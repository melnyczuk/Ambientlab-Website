<script lang="ts">
	import { onMount } from 'svelte';

	export let length: number = 100;
	export let href: string;

	let content: Element;
	let text: string | null;

	onMount(() => {
		console.log('content', content);
		const truncated = content.textContent?.trim().slice(0, length).trim();
		text = truncated ? `${truncated}...` : '';
	});
</script>

<p>
	{text}
	<a class="text-[#007a99] underline" {href}>Read More</a>
</p>
<div hidden bind:this={content} class="hidden"><slot /></div>
