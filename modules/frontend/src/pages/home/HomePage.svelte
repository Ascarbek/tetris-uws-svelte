<script lang="ts">
  import Board from '$widgets/game/Board.svelte';
  import Toolbar from '$widgets/game/Toolbar.svelte';
</script>

<div class="flex items-center justify-center h-full">
  <div class="flex flex-col items-center gap-8">
    <Toolbar />
    <Board />
  </div>
</div>
