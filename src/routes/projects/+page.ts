import { projects } from '$lib/config';

export const load = async () => ({
	markdown: await Promise.all(projects.map((path) => import(`../../lib/markdown/${path}.md`)))
});
