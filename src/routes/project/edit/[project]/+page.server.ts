import Projects from '$lib/classes/projects';
import Project from '$lib/classes/project';
import { fail } from '@sveltejs/kit';

export async function load({ params }) {
    const projects = new Projects();
    const project = projects.get_project(params.project);
    return {
        project
    };
};

export const actions = {
    save: async ({ request, params }) => {
        const data = await request.formData();
        const urlid = params.project;
        const name = data.get('project_name');
        if (!name) return fail(400, { name, error: { field: 'project_name' }, missing: true });
        if (!urlid) return fail(400, { urlid, error: { field: 'project_urlid' }, missing: true });
        const notes = data.get('project_notes') || '';
        const vector_model = data.get('project_vector_model');
        if (!vector_model) return fail(400, { vector_model, missing: true });
        const chat_model = data.get('project_chat_model');
        if (!chat_model) return fail(400, { chat_model, missing: true });
        const tags = data.get('project_tags');
        const security = data.get('project_security') || "secure";
        const description = data.get('project_description') || '';

        const project = new Project(urlid);
        project.save({
            urlid: urlid.toString(),
            name: name.toString(),
            // urlid: urlid.toString(),
            notes: notes.toString(),
            vector_model: vector_model.toString(),
            chat_model: chat_model.toString(),
            tags: tags ? tags.toString().split(',') : [],
            security: security.toString(),
            created_at: null,
            updated_at: new Date(),
            description: description.toString(),
        });
        return {
            body: {
                status: 'success'
            }
        };
    }
}