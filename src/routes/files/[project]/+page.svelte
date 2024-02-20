<script>
    /** @type {import('./$types').PageData} */
    import {Row, Col} from '@sveltestrap/sveltestrap';
    export let data;
</script>

<div>
    <h1>Files</h1>
    <Row>
        <Col sm="2">
            Unprocessed Files:
        </Col>
        <Col sm="10">
            {data.props.unprocessedFiles.length}
        </Col>
    </Row>
    <Row>
        <Col sm="2">
            Processing Files:
        </Col>
        <Col sm="10">
            {data.props.processingFiles.length}
        </Col>
    </Row>
    <Row>
        <Col sm="2">
            Processed Files:
        </Col>
        <Col sm="10">
            {data.props.processedFiles.length}
        </Col>
    </Row>
    <Row>
        <Col sm="2">
            Preprocessed Files:
        </Col>
        <Col sm="10">
            {data.props.preprocessedFiles.length}
        </Col>
    </Row>
</div>