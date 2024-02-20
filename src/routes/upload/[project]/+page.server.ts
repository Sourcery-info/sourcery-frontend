/** @type {import('./$types').PageServerLoad} */
import { uploadFile } from '$lib/utils/files';

export async function load() {
    return {};
};

export const actions = {
    upload: async ({ request, params }) => {
        const formData = await request.formData();
        const files = formData.getAll('files');
        const project = params.project;
        for (const file of files) {
            await uploadFile(project, (file as File));
        }
        return {
            status: 200,
            data: {
                message: `Upload file to project ${params.project} with ${request.method} method`
            }
        };
    }
};