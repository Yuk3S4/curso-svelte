<script>
    import { store } from '../stores';
    import { fade } from 'svelte/transition';
    function trailer() {
        store.update(state => ({
            ...state,
            youtube: true
        }));
    }
    function closeYoutube() {
        store.update(state => ({
            ...state,
            youtube: false,
            trailer: state.trailerActive            
        }));
    }
</script>

<style>
    .Portada {
        height: 100vh;
        user-select: none;
    }
    .Portada-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        position: relative;
        z-index: 1;
        color: var(--color);
        font-family: var(--font-family);
    }
    .title {
        font-weight: 900;
        font-size: 2.5rem;
    }
    .background {
        height: 100%;
        background-position: center !important;
    }
    .background::after {
        content: '';
        position: fixed;
        background: var(--dark-primary);
        filter: opacity(.65);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .more {
        margin-top: 10px;
        background: var(--secondary);
        color: var(--white);
        width: 50%;
        padding: 5px;
        border-radius: 7px;
        border: 2px solid var(--color);
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
    }

</style>

<div class="Portada">
    <div class="background" style="background: url({$store.url}) no-repeat;">
      <div class="Portada-container">
        <div class="trailer" on:click={trailer}>
          <i class="fab fa-youtube"/> <span>Ver trailer</span>
        </div>
        <div class="title">
          {$store.title}
        </div>
        {#if $store.youtube}
            <div transition:fade class="more" on:click={closeYoutube}>Cerrar youtube</div>
        {/if}
      </div>
    </div>
  </div>