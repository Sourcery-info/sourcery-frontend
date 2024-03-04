<script>
    /** @type {import('./$types').PageData} */
    import { Button, Form, FormGroup, Label, Input, FormText } from '@sveltestrap/sveltestrap';
    import { enhance } from '$app/forms'
    export let form;
    let radioGroup = 'project_chat_model_secure';
    radioGroup = 'secure';
    import models from '$lib/models.json';
    let chatModel = models[0].value;
    let vectorModel = models[0].value;
</script>

<h1>New Project</h1>

<form method="POST" use:enhance>
    <FormGroup>
        <Label for="projectName">Name</Label>
        <Input type="text" name="name" label="Name" value={form?.data?.name ?? ""} />
        {#if (form?.errors?.name)}
            <FormText color="danger">{form.errors.name}</FormText>
        {/if}
    </FormGroup>
    <!-- <FormGroup>
        <Label for="projectTags">Tags</Label>
        <Input type="text" name="tags" />
    </FormGroup> -->
    <FormGroup>
        <Label for="projectDescription">Description</Label>
        <Input type="textarea" name="description" />
        {#if (form?.errors?.description)}
            <FormText color="danger">{form.errors.description}</FormText>
        {/if}
    </FormGroup>
    <FormGroup>
        <Label for="projectVectorModel">Vector Model</Label>
        <Input type="select" name="vector_model" bind:value={vectorModel}>
            {#each models as model}
                <option value={model.value}>{model.name}</option>
            {/each}
        </Input>
        {#if (form?.errors?.vector_model)}
            <FormText color="danger">{form.errors.vector_model}</FormText>
        {/if}
    </FormGroup>
    <FormGroup>
        <Label for="projectChatModel">Chat Model</Label>
        <Input type="select" name="chat_model" bind:value={chatModel}>
            {#each models as model}
                <option value={model.value}>{model.name}</option>
            {/each}
        </Input>
        {#if (form?.errors?.chat_model)}
            <FormText color="danger">{form.errors.chat_model}</FormText>
        {/if}
    </FormGroup>
    <FormGroup check>
        <Input name="security" type="radio" theme="light" bind:group={radioGroup} value="secure" label="Secure" />
        <Input name="security" type="radio" theme="light" bind:group={radioGroup} value="insecure" label="Insecure - Internet access" />
        {#if (form?.errors?.security)}
            <FormText color="danger">{form.errors.security}</FormText>
        {/if}
    </FormGroup>
    
    <Button color="primary" type="submit">Submit</Button>
</form>