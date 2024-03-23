<script>
// @ts-nocheck

	import {
		Collapse,
		NavbarToggler,
		NavbarBrand,
		Nav,
		Navbar,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from '@sveltestrap/sveltestrap';

	import logo from '$lib/assets/Sourcery Logo.png';

	export let project;
	export let version;

	let isOpen = false;

    function handleUpdate(event) {
		isOpen = event?.detail?.isOpen;
	}
</script>
<div class="navbar-container">
<Navbar color="none" expand="sm" container="fluid">
	<NavbarBrand style="height: 40px" href="/"><img class="logo" alt="Sourcery.info" src={logo} /></NavbarBrand>
	<Nav>
	{#if project}
		<NavItem>
			<NavLink href="/chat/{project.urlid}">{project.name}</NavLink>
		</NavItem>
	{/if}
	</Nav>
	<Nav class="ms-auto">
		<NavItem>Version {version}</NavItem>
	</Nav>
</Navbar>
</div>

<style class="less">
	.logo {
		height: 100%;
	}
</style>