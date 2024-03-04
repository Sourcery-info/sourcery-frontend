/** @type {import('./$types').PageServerLoad} */

import Projects from '$lib/classes/projects';

export async function load({ params }) {
    const projects = new Projects();
    let proj_data = projects.get();
    if (params?.project) return {
        projects: proj_data,
        project: proj_data.find(p => p.urlid === params.project),
    }
    return {
        projects: proj_data
    }
    // await projects.load_projects();
    // if (params.project === undefined) return {
    //     projects
    // };
    // const project = projects.get_project(params.project);
    // return {
    //     project,
    //     projects
    // };
};