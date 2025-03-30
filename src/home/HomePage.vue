<template>
  <div class="Home">
    <div>
      <img class="robot" src="../assets/robot-home.png" aria-hidden="true" alt="Robot" />
    </div>
    <div class="get-started">
      <a href>get started</a> building your first robot
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}

.robot {
  height: 500px;
}

.get-started {
  padding-top: 20px;
  font-size: 32px;
}
</style>
