<script lang="ts">
	export let data;
</script>

<div class="flex flex-col justify-start gap-8 p-6 font-serif md:w-9/12">
	<img
		class="aspect-video w-full object-cover object-center"
		alt={data.metadata.image.alt}
		src={data.metadata.image.src}
		width={data.metadata.image.width}
		height={data.metadata.image.height}
	/>

	<h2 class="font-sans">{data.metadata.title}</h2>

	<div class="flex max-w-3xl flex-col gap-2">
		<svelte:component this={data.default} />
	</div>

	<p class="font-sans text-xl">{data.metadata.cta}</p>

	<a class="w-fit bg-[#007a99] px-8 py-3 font-sans text-white" href={data.metadata.button.href}>
		{data.metadata.button.text}
	</a>
</div>
