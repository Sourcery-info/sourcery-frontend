/** @type {import('./$types').PageServerLoad} */
/** @type {import('./$types').Actions} */

import Project from '$lib/classes/project';
import type { IProject } from "$lib/types/Project.type";
import { fail, redirect } from '@sveltejs/kit';
import { zfd } from "zod-form-data";
import { z } from 'zod';
import { validate } from '$lib/validate';

export async function load() {
    return {};
};

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const newProjectScheme = zfd.formData({
            name: zfd.text(z.string().min(3)),
            description: zfd.text(z.string().optional()),
            vector_model: zfd.text(z.string()),
            chat_model: zfd.text(z.string()),
            security: zfd.text(z.string()),
        });
        const validation = validate(formData, newProjectScheme);
        if (validation.errors) {
            return fail(400, validation);
        }
        const project = new Project();
        try {
            project.save(validation.data);
        } catch (err: any) {
            return fail(400, { errors: [err], data: validation.data });
        }
        redirect(303, '/projects');

        // const project_data: IProject = {
        //     urlid: data.project_name,
        //     name: project_name,
        //     description,
        //     notes: string;
        //     created_at: Date | null;
        //     updated_at: Date | null;
        //     vector_model: string;
        //     chat_model: string;
        //     tags: string[];
        //     security: string;
        // }
        // // Save the project to the database
        // project.save(data);
        
    }
}