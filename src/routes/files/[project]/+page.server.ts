/** @type {import('./$types').PageServerLoad} */
import { getUnprocessedFiles, getPreprocessedFiles, getProcessedFiles, getProcessingFiles } from '$lib/utils/files';
export async function load({ params}) {
    const project = params.project;
    const unprocessedFiles = getUnprocessedFiles(project);
    const preprocessedFiles = getPreprocessedFiles(project);
    const processedFiles = getProcessedFiles(project);
    const processingFiles = getProcessingFiles(project);
    return {
        props: {
            unprocessedFiles,
            preprocessedFiles,
            processedFiles,
            processingFiles
        }
    };
};