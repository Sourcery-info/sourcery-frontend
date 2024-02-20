import friendlyURL from "$lib/utils/friendlyurl";
import { PROJECT_DIR } from "$lib/variables";
import path from "path";
import fs from "fs";
import type { IProject } from "$lib/types/IProject";

export default class Project {
    
    _is_new: boolean;
    _dir: string | undefined;
    data: IProject | undefined;

    constructor(urlid: string | null) {
        this._is_new = true;
        if (!urlid) return;
        this._is_new = false;
        this._dir = path.join(PROJECT_DIR, urlid);
        this.data = this._is_new ? {} : this._get_config();
    }

    _check_unique(urlid: string) {
        if (fs.existsSync(path.join(PROJECT_DIR, urlid))) return false;
    }

    _get_config() {
        const data = fs.readFileSync(`${this._dir}/config.json`, 'utf8');
        return JSON.parse(data);
    }

    save(data: IProject) {
        if (this._is_new) {
            if (!data.name) throw new Error("Project name is required.");
            data.urlid = friendlyURL(data.name);
            this._dir = path.join(PROJECT_DIR, data.urlid);
            // TODO: Check if directory exists and increment urlid-x if it does
            fs.mkdirSync(this._dir, { recursive: true });
        }
        data.updated_at = new Date();
        console.log("Writing to file: ", `${this._dir}/config.json`)
        fs.writeFileSync(`${this._dir}/config.json`, JSON.stringify(data, null, 4));
    }

    get() {
        return this.data;
    }
}