<script>
    export let data = [];
    import Movie from './Movie.svelte';
</script>

<style>
    .Thumbnail {
        color: var(--white);
        position: absolute;
        z-index: 1;
        bottom: 0;
    }
    .thumbnail-movies {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        max-width: 100vw;
        align-items: flex-end;
    }
</style>

<div class="Thumbnail">
    <div class="thumbnail-movies">
        {#each data as movie (movie.id)}
            <Movie {movie} />
        {/each}
    </div>
</div>