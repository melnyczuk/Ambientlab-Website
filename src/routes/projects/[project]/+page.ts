import { projects } from '$lib/config';

/** @type {import('./$types').EntryGenerator} */
export const entries = () => projects.map((project) => ({ project }));

export const load = ({ params }) => import(`../../../lib/markdown/${params.project}.md`);
