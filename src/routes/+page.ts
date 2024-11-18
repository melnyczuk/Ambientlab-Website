import extract from '$lib/markdown/extract.md';
import commissions, { metadata as commissionsData } from '$lib/markdown/commissions.md';
import consultancy, { metadata as consultancyData } from '$lib/markdown/consultancy.md';
import framework, { metadata as frameworkData } from '$lib/markdown/framework.md';
import { projects } from '../lib/config';

export const load = async () => ({
	content: {
		extract,
		commissions: { body: commissions, title: commissionsData.title },
		consultancy: { body: consultancy, title: consultancyData.title },
		framework: { body: framework, title: frameworkData.title }
	},
	image: {
		src: '/images/yesterday-youre-still-dreaming-jo.jpg',
		alt: "From the project 'Yesterday You're Still Dreaming', 2016",
		width: '770px',
		height: '515px'
	},
	projects: await Promise.all(projects.map((path) => import(`../lib/markdown/${path}.md`)))
});
