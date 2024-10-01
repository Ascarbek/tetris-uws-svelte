<script lang="ts">
  import Board from '$widgets/game/Board.svelte';
  import Toolbar from '$widgets/game/Toolbar.svelte';
  import type { KeyboardEventHandler } from 'svelte/elements';

  let pressed = false;

  const onKeyDown: KeyboardEventHandler<Document> = (e) => {
    if (e.code === 'ArrowLeft' && !pressed) {
      pressed = true;
      console.log('left');
    }
    if (e.code === 'ArrowRight' && !pressed) {
      pressed = true;
      console.log('right');
    }
    if (e.code === 'Space' && !pressed) {
      pressed = true;
      console.log('space');
    }
  };

  const onKeyUp: KeyboardEventHandler<Document> = (e) => {
    pressed = false;
  };
</script>

<svelte:document on:keydown="{onKeyDown}" on:keyup="{onKeyUp}" />

<div class="flex items-center justify-center h-full">
  <div class="flex flex-col items-center gap-8">
    <Toolbar />
    <Board />
  </div>
</div>
