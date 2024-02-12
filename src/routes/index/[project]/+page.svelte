<script>
    import { Container, Form, Button } from '@sveltestrap/sveltestrap';
    export let data;
</script>

<Container>
    <h1>Index { data.project?.name }</h1>
    <Form method="post">
        <Button formaction="?/build_index">Build Index</Button>
    </Form>
</Container>