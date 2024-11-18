<script lang="ts">
	export let data;
</script>

<h1>Projects</h1>
<div class="flex flex-col">
	{#each data.markdown as markdown}
		<a href="./{markdown.metadata.slug}">{markdown.metadata.title}</a>
	{/each}
</div>
