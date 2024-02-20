<script>
    /** @type {import('./$types').PageData} */
    import { Button, Form, FormGroup, Label, Input, FormText} from '@sveltestrap/sveltestrap';
    import { enhance } from '$app/forms';
    export let data;

</script>

<h1>Upload Documents</h1>

<form method="POST" use:enhance enctype="multipart/form-data">
    <Input multiple={true} type="file" name="files" id="files" label="File" />
    <Button color="primary" type="submit" formaction="?/upload">Submit</Button>
</form>