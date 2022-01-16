<script lang="ts">
	import type { Genre } from 'src/types/Genre';

	export let genre: Genre;
</script>

<a
	href={`/genres/${genre.id}`}
	class="rounded-full bg-base-100 text-primary-content px-3 py-2 font-os-bold ml-2 inline flex-shrink-0"
>
	{genre.name}
</a>
