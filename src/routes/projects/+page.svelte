<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { Button, Container, Row, Col, Card, CardBody } from '@sveltestrap/sveltestrap';
</script>

<Container class="mt-4">
    <Row>
        <Col xs="auto">
            <Button size="xl" color="primary" href="/new">New Project</Button>
        </Col>
        <Col>
            <Container>
                <Row>
                    {#each data.projects as project}
                        <Col xs="4">
                            <Card>
                                <CardBody>
                                    <h4>{project.name}</h4>
                                    <p>{project.notes}</p>
                                    <p>{project.created_at}</p>
                                    <p>
                                        <Button color="primary" href="/chat/{project.urlid}">Chat</Button>
                                        <Button color="secondary" href="/upload/{project.urlid}">Upload</Button>
                                        <Button color="secondary" href="/files/{project.urlid}">Files</Button>
                                        <Button color="secondary" href="/index/{project.urlid}">Index</Button>
                                        <Button color="secondary" href="/edit/{project.urlid}">Edit</Button>
                                    </p>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    {/each}
                </Row>
            </Container>
        </Col>
    </Row>
</Container>