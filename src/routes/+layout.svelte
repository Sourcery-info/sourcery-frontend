<script>
    import { Styles, Container } from '@sveltestrap/sveltestrap';
    import Navbar from "$lib/ui/navbar.svelte";
</script>
<Styles />
<Navbar />
<Container fluid>
    <slot />
</Container>