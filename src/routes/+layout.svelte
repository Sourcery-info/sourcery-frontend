<script lang="ts">
    import { Styles, Container, Row, Col } from '@sveltestrap/sveltestrap';
    import Navbar from "$lib/ui/navbar.svelte";
    import Sidebar from "$lib/ui/sidebar.svelte";
    export let data = {
        projects: [],
        project: null
    };
</script>
<svelte:head>
    <title>Sourcery.info</title> 
</svelte:head>
<Styles />
<div class="vh-100">
<Navbar />
<Container fluid class="">
    <Row>
        <Col md="2">
            <Sidebar {data} />
        </Col>
        <Col md="10">
            <slot />
        </Col>
    </Row>
</Container>
</div>