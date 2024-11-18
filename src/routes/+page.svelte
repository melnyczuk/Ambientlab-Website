<script lang="ts">
	import { truncate } from '$lib/utils.js';
	import Excerpt from '../lib/components/excerpt.svelte';

	export let data;
</script>

<div class="flex flex-col items-center gap-8 p-6 font-serif">
	<img
		class="aspect-video object-cover object-center md:w-9/12"
		alt={data.image.alt}
		src={data.image.src}
		width={data.image.width}
		height={data.image.height}
	/>

	<div class="m-8 flex max-w-3xl flex-col items-center gap-5 font-sans md:w-9/12 [&>p]:text-xl">
		<svelte:component this={data.content.extract} />
		<a class="m-auto w-fit bg-[#007a99] px-8 py-3 text-white" href="./about">Read more</a>
	</div>

	<div class="flex flex-col gap-5 md:w-screen md:flex-row md:p-8">
		{#each [data.content.framework, data.content.commissions, data.content.consultancy] as { title, body }}
			<div
				class="flex grow basis-1 flex-col gap-6 bg-white p-6 [&>ol]:flex [&>ol]:flex-col [&>ol]:gap-4"
			>
				<h3 class="text-xxl mx-auto h-fit text-center font-sans">{title}</h3>
				<svelte:component this={body} />
			</div>
		{/each}
	</div>

	<div class="flex flex-col gap-5 bg-white md:w-screen md:p-8">
		<h2 class="w-full text-center font-sans">Projects</h2>
		<div class="grid grid-cols-3 justify-around gap-5">
			{#each data.projects as project}
				{@const { author, title, image, slug } = project.metadata}
				<div class="flex flex-col gap-4">
					<img
						class="aspect-video object-cover object-center"
						src={image.src}
						alt={image.alt}
						width={image.width}
						height={image.height}
					/>
					<div class="flex flex-col gap-2">
						<h3 class="font-sans text-2xl">{title}</h3>
						<h4 class="text-lg">{author}</h4>
					</div>
					<Excerpt href="./projects/{slug}" length={100}>
						<svelte:component this={project.default} />
					</Excerpt>
				</div>
			{/each}
		</div>
	</div>
</div>
