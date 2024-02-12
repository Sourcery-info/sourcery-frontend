<script>
    /** @type {import('./$types').PageData} */
    import { Container, Row, Col } from '@sveltestrap/sveltestrap';
    export let data;
</script>

<Container fluid>
    <Row>
        <Col sm="1">
            Sidebar
        </Col>
        <Col sm="11">
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <h1>{data.project.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        {data}
                    </Col>
                </Row>
            </Container>
        </Col>
    </Row>
</Container>