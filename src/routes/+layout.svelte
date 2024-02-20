<script>
    import { Styles, Container } from '@sveltestrap/sveltestrap';
    import Navbar from "$lib/ui/navbar.svelte";
</script>
<svelte:head>
    <title>Sourcery.info</title> 
</svelte:head>
<Styles />
<Navbar />
<Container fluid>
    <slot />
</Container>