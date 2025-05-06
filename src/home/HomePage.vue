<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" aria-hidden="true" alt="Robot" />
    </div>
    <div class="get-started">
      <router-link to="/build">get started</router-link> building your first robot
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
