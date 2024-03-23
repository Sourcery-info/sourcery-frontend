<script lang="ts">
    import '$lib/sass/global.scss';
    import { Styles, Container, Row, Col } from '@sveltestrap/sveltestrap';
    import Navbar from "$lib/ui/navbar.svelte";
    import Sidebar from "$lib/ui/sidebar.svelte";
    export let data = {
        projects: [],
        project: undefined
    };
</script>
<svelte:head>
    <title>Sourcery.info</title> 
</svelte:head>
<div class="grid-main">
    <Navbar project={data.project} version={"0.0.1"} />
    <div class="main">
        <Sidebar selected_project={data.project} projects={data.projects} />
        <slot />
    </div>
</div>