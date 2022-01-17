<script lang="ts">
	export let url: string;
</script>

<div class="fixed z-50 flex-centcent">
	<iframe
		title="Youtube Video"
		class="w-full sm:w-[400px] md:w-[700px] lg:w-[1000px] h-[550px] flex-centcent"
		src={`https://www.youtube.com/embed/${url}`}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>
