import fs from 'fs';
import { glob } from 'glob';

export default class Projects {
    constructor() {
        this.projects = [];
        this.loadProjects();
    }

    loadProjects() {
        const dir = './projects';
        const files = glob.sync(`${dir}/**/config.json`);
        files.forEach(file => {
            const data = fs.readFileSync(file, 'utf8');
            this.projects.push(JSON.parse(data));
        });
    }

    getProject(urlid) {
        return this.projects.find(project => project.urlid === urlid);
    }

    addProject(project) {
        this.projects.push(project);
        // fs.writeFileSync(`src/projects/${project.id}.json`, JSON.stringify(project, null, 4));
    }

    saveProject(project) {
        const index = this.projects.findIndex(p => p.id === project.id);
        this.projects[index] = project;
        // fs.writeFileSync(`src/projects/${project.id}.json`, JSON.stringify(project, null, 4));
    }
}