export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/markdown/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	console.log(iterablePostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const blog = path.slice(11, path.indexOf('markdown') - 1);
			const postfix = path.slice(path.indexOf('markdown') + 8, path.indexOf('.'));
			const postPath =  blog + postfix;

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	
	return allPosts;
};