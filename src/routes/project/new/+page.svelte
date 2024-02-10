<script>
    /** @type {import('./$types').PageData} */
    import { Button, Form, FormGroup, Label, Input, FormText } from '@sveltestrap/sveltestrap';
    export let data;
    export let form;
    let radioGroup = 'project_chat_model_secure';
    const models = ['Llama2', 'Mistral', 'Mixtral', 'Falcon'];
    let chatModel = models[0];
    let vectorModel = models[0];
</script>

<h1>New Project</h1>

<Form method="POST">
    <FormGroup>
        <Label for="projectName">Name</Label>
        <Input type="text" name="project_name" id="projectName" label="Name" />
    </FormGroup>
    <FormGroup>
        <Label for="projectTags">Tags</Label>
        <Input type="text" name="project_tags" id="projectTags" />
    </FormGroup>
    <FormGroup>
        <Label for="projectNotes">Notes</Label>
        <Input type="textarea" name="project_notes" id="projectNotes" />
    </FormGroup>
    <FormGroup>
        <Label for="projectVectorModel">Vector Model</Label>
        <Input type="select" name="project_vector_model" id="projectVectorModel" bind:value={vectorModel}>
            {#each models as model}
                <option>{model}</option>
            {/each}
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="projectChatModel">Chat Model</Label>
        <Input type="select" name="project_chat_model" id="projectChatModel" bind:value={chatModel}>
            {#each models as model}
                <option>{model}</option>
            {/each}
        </Input>
    </FormGroup>
    <FormGroup check>
        <Input type="radio" theme="light" bind:group={radioGroup} value="project_secure" label="Secure" />
        <Input type="radio" theme="light" bind:group={radioGroup} value="project_insecure" label="Insecure - Internet access" />
    </FormGroup>
    <Button color="primary" type="submit">Submit</Button>
</Form>