/** @type {import('./$types').PageLoad} */
import Projects from '$lib/classes/projects';

export async function load({ params }) {
    const projects = new Projects();
    const project = projects.getProject(params.project);
    return {
        project
    };
};