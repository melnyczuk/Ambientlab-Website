<script lang="ts">
	import Logo from '$lib/components/logo.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<main class="m-auto flex flex-col items-center">
	<a class="w-screen p-6 md:w-8/12" href="/">
		<Logo />
	</a>
	{@render children()}
</main>
