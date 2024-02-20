import { glob } from "glob";
import { FILETYPES } from "$lib/variables";
import { writeFileSync } from "fs";
import path from "path";
import { incrementFilename } from "$lib/utils/friendlyurl";
import dotenv from "dotenv";
dotenv.config();

const PROJECT_DIR = process.env.PROJECT_DIR;
if (!PROJECT_DIR) {
    throw new Error("Environment variable PROJECT_DIR not set");
}

export const getAllFiles = (project: string): string[] => {
    const files = [];
    for (const filetype of FILETYPES) {
        const pattern = `${PROJECT_DIR}/${project}/**/*.${filetype}`;
        const matches = glob.sync(pattern);
        files.push(...matches);
    }
    return files;
};

export const uploadFile = async (project: string, file: File) => {
    const dir = path.join(PROJECT_DIR, project, 'files', 'unprocessed');
    const buffer = await (file instanceof Blob ? file.arrayBuffer() : new Response(file).arrayBuffer());
    const filename = (file as File).name;
    let filepath = path.join(dir, filename);
    // Check that file doesn't already exist, if it does, increment filename
    while (glob.sync(filepath).length > 0) {
        console.log('file exists', filepath)
        filepath = incrementFilename(filepath);
    }
    writeFileSync(filepath,
        Buffer.from(buffer)
    );
}

export const getUnprocessedFiles = (project: string): string[] => {
    const dir = path.join(PROJECT_DIR, project, 'files', 'unprocessed');
    return glob.sync(`${dir}/**/*.*`);
}

export const getProcessingFiles = (project: string): string[] => {
    const dir = path.join(PROJECT_DIR, project, 'files', 'processed');
    return glob.sync(`${dir}/**/*.*`);
}

export const getProcessedFiles = (project: string): string[] => {
    const dir = path.join(PROJECT_DIR, project, 'files', 'processed');
    return glob.sync(`${dir}/**/*.*`);
}

export const getPreprocessedFiles = (project: string): string[] => {
    const dir = path.join(PROJECT_DIR, project, 'files', 'processed');
    return glob.sync(`${dir}/**/*.*`);
}