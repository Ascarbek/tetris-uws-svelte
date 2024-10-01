<script lang="ts">
  import { onMount } from 'svelte';
  import { startMessageListener } from '$features/messages/MessageQueue';
  import { MessageModal, ModalQueue } from '$stores/ModalStore';
  import Message from '$widgets/popup/Message.svelte';
  import Header from '$widgets/nav/Header.svelte';
  import Footer from '$widgets/nav/Footer.svelte';

  $MessageModal = Message;

  onMount(() => {
    const unsub = startMessageListener();

    return () => {
      unsub();
    };
  });
</script>

<Header />
<main class="container mx-auto">
  <slot />
</main>
<Footer />

{#each $ModalQueue as modal}
  <svelte:component this="{modal}"></svelte:component>
{/each}

<style lang="postcss">
  main {
    height: calc(100vh - 60px - 24px);
  }
</style>
