import { glob } from "glob";
import { FILETYPES } from "$lib/variables";

export const getFiles = (project: string): string[] => {
    const files = [];
    for (const filetype of FILETYPES) {
        const pattern = `${project}/**/*.${filetype}`;
        const matches = glob.sync(pattern);
        files.push(...matches);
    }
    return files;
};
