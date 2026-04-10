import { error } from '@sveltejs/kit';
import { getPost, posts } from '$lib/data/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) throw error(404, 'Post not found');

	const recentPosts = posts.filter((p) => p.slug !== params.slug).slice(0, 3);

	return { post, recentPosts };
};
