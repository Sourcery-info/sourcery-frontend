/** @type {import('./$types').PageServerLoad} */
import Projects from '$lib/classes/projects';

export async function load() {
    const projects = new Projects();
    return {
        projects: projects.projects
    };
};