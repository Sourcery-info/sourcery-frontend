<script lang="ts">
    // @ts-nocheck
    /** @type {import('./$types').PageData} */
    import { Nav, NavItem, NavLink, Icon } from "@sveltestrap/sveltestrap";
    export let projects;
    export let selected_project;
</script>

<div class="sidebar">
    <Nav vertical >
        <NavItem>
            <NavLink href="/">
                <Icon name="boxes" />
                Projects
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/new">
                <Icon name="plus-circle" />
                New Project
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/settings">
                <Icon name="gear" />
                Settings
            </NavLink>
        </NavItem>
        <hr>
        {#each projects as project}
            <NavItem>
                <NavLink href="/chat/{project.urlid}"><span class:bold={!!(selected_project && selected_project.urlid === project.urlid)}>
                    <Icon name="box" />
                    {project.name}
                </span></NavLink>
            </NavItem>
            {#if (selected_project && selected_project.urlid === project.urlid)}
            <Nav vertical style="padding-left: 10px">
                <NavItem>
                    <NavLink href="/chat/{project.urlid}">
                        <Icon name="arrow-return-right" />
                        Chat
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/files/{project.urlid}">
                        <Icon name="arrow-return-right" />
                        Files
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/edit/{project.urlid}">
                        <Icon name="arrow-return-right" />
                        Edit
                    </NavLink>
                </NavItem>
            </Nav>
            {/if}
        {/each}
    </Nav>
</div>

<style>
    .bold {
        font-weight: bold;
    }
</style>