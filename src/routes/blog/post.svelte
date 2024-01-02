<!-- post.svelte -->
<script>
	export let title;
	export let day;
</script>

<article>
	<h1>{title}</h1>

	<p>Day: {day}</p>

	<slot />
</article>