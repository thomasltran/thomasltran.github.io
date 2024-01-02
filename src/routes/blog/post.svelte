<!-- post.svelte -->
<script>
	export let date;
	export let day;
</script>

<article class="centered-content">
	<div class="content">
		<h1>{date}</h1>

		<p>Day: {day}</p>

		<slot />
	</div>
</article>

<style>
	* {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			"Open Sans",
			"Helvetica Neue",
			sans-serif;

		font-size: 1em;

		padding: 1em 0;
	}

	.centered-content {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
	}

	.content {
		width: 50%;
		text-align: left;
	}
</style>
