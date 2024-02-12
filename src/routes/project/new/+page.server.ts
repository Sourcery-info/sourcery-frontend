/** @type {import('./$types').PageServerLoad} */
import Projects from '$lib/classes/projects';

export async function load() {
    return {};
};

export const actions = {
    default: async ({ request }) => {
        const data = request.formData();
        const projects = new Projects();
        // Save the project to the database

        
    }
}