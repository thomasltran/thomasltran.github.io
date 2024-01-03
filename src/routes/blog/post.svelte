<!-- post.svelte -->
<script>
	export let date;
	export let day;
</script>

<body>
	<article class="centered-content">
		<div class="content">
			<h1>{date}</h1>

			<p>Day: {day}</p>

			<slot />
		</div>
	</article>
</body>

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

		color: #0e1111;
	}

	body {
		background: #faf9f6;
	}

	.centered-content {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
	}

	.content {
		width: 50vh;
		text-align: left;
	}
</style>
