<script lang="ts">
  import { onMount } from 'svelte';
  import { startMessageListener } from '$features/messages/MessageQueue';
  import { MessageModal } from '$stores/ModalStore';
  import Message from '$widgets/popup/Message.svelte';

  $MessageModal = Message;

  onMount(() => {
    const unsub = startMessageListener();

    return () => {
      unsub();
    };
  });
</script>

<slot />
