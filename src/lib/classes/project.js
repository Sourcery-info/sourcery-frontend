import friendlyURL from "$lib/utils/friendlyurl";

export default class Project {
    
    /**
     * Represents a project.
     * @constructor
     * @param {Object} data - The data object containing project information.
     * @param {string} data.id - The ID of the project.
     * @param {string} data.urlid - The URL ID of the project.
     * @param {string} data.name - The name of the project.
     * @param {string} data.description - The description of the project.
     * @param {Date} data.created_at - The creation date of the project.
     * @param {Date} data.updated_at - The last updated date of the project.
     * @param {string} data.vector_model - The vector model of the project.
     * @param {string} data.chat_model - The chat model of the project.
     * @param {Array<String>} data.tags - The tags associated with the project.
     * @param {String} data.security - The security settings of the project.
     */
    constructor(data) {
        this.name = data.name || '';
        this.urlid = data.urlid || friendlyURL(data.name);
        this.description = data.description || new Date();
        this.created_at = data.created_at || new Date();
        this.updated_at = data.updated_at || new Date();
        this.vector_model = data.vector_model || '';
        this.chat_model = data.chat_model || '';
        this.tags = data.tags || [];
        this.security = data.security || "secure";
    }

    
}