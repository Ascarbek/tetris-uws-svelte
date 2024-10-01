<script lang="ts">
  export let value: number;
</script>

<div class:filled="{value > 0 || value < 0}"></div>

<style lang="postcss">
  div {
    @apply h-[20px] w-[20px] border-r border-neutral-200;
  }
  div:last-child {
    @apply border-r-0;
  }
  div.filled {
    @apply bg-sky-300;
  }
</style>
