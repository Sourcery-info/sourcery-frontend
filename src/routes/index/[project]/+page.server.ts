/** @type {import('./$types').PageServerLoad} */
import Project from '$lib/classes/project';
import { LLMIndex } from '$lib/llamaindex.js';
import { PROJECT_DIR } from '$lib/variables';
import path from 'path';

export async function load({ params }) {
    const project = new Project(params.project);
    return {
        project: project.get()
    };
};

export const actions = {
    build_index: async ({ params }) => {
        const llmindex = new LLMIndex(params.project);
        await llmindex.init();
        await llmindex.index_documents(path.join(PROJECT_DIR, params.project, 'files', 'unprocessed'));
    }
}