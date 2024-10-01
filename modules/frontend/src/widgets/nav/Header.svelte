<script lang="ts">
  const onSignOutClick = () => {
    console.log('sign out click');
  };
  const onProfileClick = () => {
    console.log('profile click');
  };
</script>

<div class="container mx-auto flex items-center justify-between">
  <div class="py-4">
    <a href="/" class="text-xl text-blue-500">UWS Tetris</a>
  </div>
  <div class="py-4 flex items-center gap-4">
    <button on:click="{onProfileClick}">Profile</button>
    <button on:click="{onSignOutClick}">Sign Out</button>
  </div>
</div>
