<script lang="ts">
  import { endGame, startGame } from '$features/api/GameApi';

  const onStartClick = () => {
    console.log('');
    startGame({ time: new Date().getTime() });
  };

  const onEndClick = () => {
    console.log('');
    endGame({});
  };
</script>

<div class="flex items-center gap-8">
  <button on:click="{onStartClick}" class="bg-blue-500 rounded text-white w-[120px] h-[30px]">Start</button>
  <button on:click="{onEndClick}" class="bg-blue-500 rounded text-white w-[120px] h-[30px]">End</button>
</div>
