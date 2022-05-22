<script>
    import { store } from '../stores';
    export let movie;
    
    function setMovie () {
        store.update(state => ({
            ...state,
            id: movie.id,
            title: movie.title,
            url: movie.url
        }));
    }
</script>

<style>
    .Movie {
        padding: 0;
        margin: 0;
    }
    figure {
        padding: 0;
        margin: 0;
        margin-right: 7px;
        cursor: pointer;
    }
    img {
        height: 150px;
        width: 116px;
        object-fit: cover;
        border: 2px solid transparent;
    }
    .selected img {
        transition: height .7s ease;
        height: 170px;
        border: 2px solid var(--color);
    }
    .not-selected img {
        transition: height .7s ease-in-out;
    }
</style>

<div class="Movie">
    <figure
      on:click={setMovie}
      class:selected="{movie.id === $store.id}"
      class:not-selected="{movie.id !== $store.id}"
    >
      <img src={movie.url} alt={movie.title}/>
    </figure>
  </div>