<script lang="ts">
  import { stopGame, startGame } from '$features/api/GameApi';
  import { CurrentSession, IsGameOver } from '$stores/Session';

  const onStartClick = () => {
    $CurrentSession = new Date().getTime();
    $IsGameOver = false;
    startGame({ time: $CurrentSession });
  };

  const onEndClick = () => {
    stopGame({ time: $CurrentSession });
  };
</script>

<div class="flex items-center gap-8">
  <button on:click="{onStartClick}" class="bg-blue-500 rounded text-white w-[120px] h-[30px]">Start</button>
  <button on:click="{onEndClick}" class="bg-blue-500 rounded text-white w-[120px] h-[30px]">End</button>
</div>
