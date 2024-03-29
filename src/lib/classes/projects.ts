import fs from 'fs';
import { glob } from 'glob';
import { PROJECT_DIR } from "$lib/variables"
import Project from "$lib/classes/project";
import type { Project as ProjectType } from '$lib/types/Project.type';

export default class Projects {
    projects: ProjectType[];

    constructor() {
        this.projects = [];
        this.load_projects();
    }

    load_projects() {
        const files = fs.readdirSync(PROJECT_DIR);
        files.forEach(file => {
            if (!file) return;
            const urlid = file.split('/')?.pop()?.split('.')[0];
            if (!urlid) return;
            const project = new Project(urlid);
            if (project.data) this.projects.push(project.data);
        });
    }

    get_project(urlid: string): ProjectType {
        const project = this.projects.find(project => project.urlid === urlid);
        if (!project) throw new Error('Project not found');
        return project;
    }

    get(): ProjectType[] {
        return this.projects;
    }
}