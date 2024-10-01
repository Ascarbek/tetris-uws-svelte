<script lang="ts">
  import { BoardCells } from '$stores/Level';
  import { ROW_COUNT, COL_COUNT } from '@my-tetris/backend';
  import type { TBoardCellData } from '@my-tetris/backend';
  import Cell from '$widgets/game/Cell.svelte';

  let rows: number[][] = [];

  const getRows = (cells: TBoardCellData) => {
    const result: number[][] = [];
    for (let i = 0; i < ROW_COUNT; i++) {
      const row: number[] = [];
      for (let j = 0; j < COL_COUNT; j++) {
        row.push(cells[i * COL_COUNT + j]);
      }
      result.push([...row]);
    }
    return [...result];
  };

  $: rows = getRows($BoardCells);
</script>

<div class="flex flex-col items-center border-l border-r border-b border-neutral-500">
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
