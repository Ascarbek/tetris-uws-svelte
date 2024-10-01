<script lang="ts">
  import Cell from '$widgets/game/Cell.svelte';
  import type { TItemCellData } from '@my-tetris/backend';
  import { TETROMINO_ROW_COUNT, TETROMINO_COL_COUNT } from '@my-tetris/backend';
  import { NextItemCells } from '$stores/Level';

  let rows: number[][] = [];

  const getRows = (cells: TItemCellData) => {
    const result: number[][] = [];
    for (let i = 0; i < TETROMINO_ROW_COUNT; i++) {
      const row: number[] = [];
      for (let j = 0; j < TETROMINO_COL_COUNT; j++) {
        row.push(cells[i * TETROMINO_COL_COUNT + j]);
      }
      result.push([...row]);
    }
    return [...result];
  };

  $: rows = getRows($NextItemCells);
</script>

<div class="flex flex-col items-center border border-neutral-500">
  {#each rows as row, indexRow}
    <div class="flex items-center row">
      {#each row as column, indexColumn}
        <Cell value="{column}" />
      {/each}
    </div>
  {/each}
</div>

<style lang="postcss">
  .row {
    @apply border-b border-neutral-200;
  }
  .row:last-child {
    @apply border-b-0;
  }
</style>
