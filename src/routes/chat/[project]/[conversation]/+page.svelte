<script lang="ts">
    import { Input, Container, Row, Col, InputGroup, Button } from '@sveltestrap/sveltestrap';
    export let data;

    type Messages = {
        type: "input" | "response";
        content: string;
    }

    let content = "";
    let input = "";
    let thinking = false;
    let messages: Messages[] = [];

    /**
     * Handles the form submission event.
     * 
     * @param {SubmitEvent} event - The form submission event.
     */
    async function handleSubmit(event: SubmitEvent) {
        if (input === "") return;
        event.preventDefault();
        const query = input;
        input = "";
        thinking = true;
        messages.push({ type: "input", content: query });
        messages = messages;
        const response = await fetch(`/chat/${data.project?.name}/${data.conversation}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ input: query })
        });
        try {
            const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();
            if (!reader) throw new Error("No reader");
            while (true) {
                const { done, value } = await reader.read();
                thinking = false;
                if (done) {
                    messages.push({ type: "response", content });
                    content = "";
                    break;
                }
                content += value.replace(/\n/g, "<br>");
            }
        } catch (error) {
            console.error("Error reading response", error);
        } finally {
            thinking = false;
            messages = messages;
            document.getElementById("input")?.focus();
        }
    }
</script>

<div class="chat-window">
    <Col sm="12" class="answer">
        {#each messages as message}
            {#if message.type === "input"}
                <p class="text-right">&gt; {message.content}</p>
            {/if}
            {#if message.type === "response"}
                <p>{@html message.content}</p>
            {/if}
        {/each}
        {#if thinking}
            <p>Thinking...</p>
        {/if}
        {@html content}
    </Col>
    <div class="d-flex question">
        <Col sm="12">
            <form class="bottom" method="POST" on:submit|preventDefault={handleSubmit} action="?/chat">
                <InputGroup>
                    <Input id="input" type="text" placeholder="Type a message" bind:value={input} disabled={thinking} />
                    {#if !thinking}
                        <Button color="primary">Send</Button>
                    {:else}
                        <Button color="warning">Cancel</Button>
                    {/if}
                </InputGroup>
            </form>
        </Col>
    </div>

</div>