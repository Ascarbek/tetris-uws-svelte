<script lang="ts">
  import Board from '$widgets/game/Board.svelte';
  import Toolbar from '$widgets/game/Toolbar.svelte';
  import type { KeyboardEventHandler } from 'svelte/elements';
  import { makeMove } from '$features/api/GameApi';
  import { MoveTypes } from '@my-tetris/backend';
  import { CurrentSession } from '$stores/Session';

  let pressed = false;

  const onKeyDown: KeyboardEventHandler<Document> = (e) => {
    if (e.code === 'ArrowLeft' && !pressed) {
      pressed = true;
      makeMove({ move: MoveTypes.LEFT, time: $CurrentSession });
    }
    if (e.code === 'ArrowRight' && !pressed) {
      pressed = true;
      makeMove({ move: MoveTypes.RIGHT, time: $CurrentSession });
    }
    if (e.code === 'ArrowDown' && !pressed) {
      pressed = true;
      makeMove({ move: MoveTypes.DROP, time: $CurrentSession });
    }
    if (e.code === 'ArrowUp' && !pressed) {
      pressed = true;
      makeMove({ move: MoveTypes.ROTATE, time: $CurrentSession });
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
