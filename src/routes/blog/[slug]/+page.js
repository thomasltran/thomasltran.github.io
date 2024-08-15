// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../markdown/${params.slug}.md`);
	const { date } = post.metadata;
	const content = post.default;

	return {
		content,
		date
	};
}