<script lang="ts">
	export let data;
</script>

<div class="flex flex-col gap-8 p-6 font-serif md:w-9/12">
	<img
		class="aspect-video w-full object-cover object-center"
		alt={data.metadata.image.alt}
		src={data.metadata.image.src}
		width={data.metadata.image.width}
		height={data.metadata.image.height}
	/>

	<div class="flex flex-col gap-2">
		<h2 class="font-sans">{data.metadata.title}</h2>
		<h3 class="font-serif">{data.metadata.author}</h3>
	</div>

	<div class="two-col [&>*]:break-inside-avoid [&>*]:py-2">
		<svelte:component this={data.default} />
	</div>

	<hr class="" />

	<div class="two-col">
		{#each data.metadata.credits as { role, name }}
			<span class="flex break-inside-avoid flex-col py-2 leading-tight">
				<p class="font-serif underline">{role}</p>
				<p class="font-serif">{name}</p>
			</span>
		{/each}
	</div>
</div>

<style>
	.two-col {
		column-count: 2;
		column-gap: 16px;
	}
</style>
