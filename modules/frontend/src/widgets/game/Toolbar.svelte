<script lang="ts">
  import { endGame, startGame } from '$features/api/GameApi';
  import { CurrentSession } from '$stores/Session';

  const onStartClick = () => {
    $CurrentSession = new Date().getTime();
    startGame({ time: $CurrentSession });
  };

  const onEndClick = () => {
    endGame({ time: $CurrentSession });
  };
</script>

<div class="flex items-center gap-8">
  <button on:click="{onStartClick}" class="bg-blue-500 rounded text-white w-[120px] h-[30px]">Start</button>
  <button on:click="{onEndClick}" class="bg-blue-500 rounded text-white w-[120px] h-[30px]">End</button>
</div>
