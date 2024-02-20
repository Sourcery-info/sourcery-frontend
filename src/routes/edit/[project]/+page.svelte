<script>
    /** @type {import('./$types').PageData} */
    import { Button, Form, FormGroup, Label, Input, FormText } from '@sveltestrap/sveltestrap';
    export let data;
    export let form;
    const models = [
        { 
            id: 'llama2:latest',
            value: 'Llama2' 
        }, 
        { 
            id: 'mistral:latest',
            value: 'Mistral' 
        }, 
        { 
            id: 'mixtral:latest',
            value: 'Mixtral' 
        }, 
        { 
            id: 'falcon:latest',
            value: 'Falcon' 
        }
    ];
</script>

<h1>Edit Project</h1>

<Form method="POST">
    {#if form?.missing}<p class="error">A field is required</p>{/if}
    <FormGroup>
        <Label for="projectName">Name</Label>
        <Input type="text" name="project_name" id="projectName" label="Name" bind:value={data.project.name} feedback={(form?.error?.field === "project_name") ? "Error" : ""} />
    </FormGroup>
    <FormGroup>
        <Label for="projectTags">Tags</Label>
        <Input type="text" name="project_tags" id="projectTags" bind:value={data.project.tags} />
    </FormGroup>
    <FormGroup>
        <Label for="projectNotes">Notes</Label>
        <Input type="textarea" name="project_notes" id="projectNotes" bind:value={data.project.notes} />
    </FormGroup>
    <FormGroup>
        <Label for="projectVectorModel">Vector Model</Label>
        <Input type="select" name="project_vector_model" id="projectVectorModel" bind:value={data.project.vector_model}>
            {#each models as model}
                <option value={model.id}>{model.value}</option>
            {/each}
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="projectChatModel">Chat Model</Label>
        <Input type="select" name="project_chat_model" id="projectChatModel" bind:value={data.project.chat_model}>
            {#each models as model}
                <option value={model.id}>{model.value}</option>
            {/each}
        </Input>
    </FormGroup>
    <FormGroup check>
        <Input type="radio" theme="light" bind:group={data.project.security} value="secure" label="Secure" />
        <Input type="radio" theme="light" bind:group={data.project.security} value="insecure" label="Insecure - Internet access" />
    </FormGroup>
    <Button color="primary" formaction="?/save">Submit</Button>
</Form>