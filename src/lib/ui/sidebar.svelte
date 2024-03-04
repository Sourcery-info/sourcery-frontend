<script lang="ts">
    /** @type {import('./$types').PageData} */
    import { Nav, NavItem, NavLink, ButtonDropdown, Button } from "@sveltestrap/sveltestrap";
    export let data = {
        projects: [],
        project: null
    };
</script>

<Nav vertical >
    {#each data.projects as project}
        <NavItem>
            <NavLink href="/chat/{project.urlid}">{project.name}</NavLink>
        </NavItem>
        {#if (data.project && project.urlid === data.project.urlid)}
        <Nav vertical style="padding-left: 10px">
            <NavItem>
                <NavLink href="/chat/{project.urlid}">Chat</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/files/{project.urlid}">Files</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/edit/{project.urlid}">Edit</NavLink>
            </NavItem>
        </Nav>
        {/if}
    {/each}
    <NavItem>
        <NavLink href="/new"><Button>New Project</Button></NavLink>
    </NavItem>
</Nav>