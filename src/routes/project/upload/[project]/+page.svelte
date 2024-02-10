<script>
    /** @type {import('./$types').PageData} */
    import { Button, Form, FormGroup, Label, Input, FormText} from '@sveltestrap/sveltestrap';
    export let data;

</script>

<h1>Upload Documents</h1>

<Form method="POST">
    <Input multiple={true} type="file" name="file" id="file" label="File" />
    <Button color="primary" type="submit">Submit</Button>
</Form>