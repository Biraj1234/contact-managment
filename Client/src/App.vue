<template>
  <the-header></the-header>

  <div class="main">
    <div class="container">
      <the-sidebar></the-sidebar>

      <div class="router">
        <div class="back">
          <button class="btn btn-success" @click="$router.go(-1)">
            <i class="fas fa-arrow-left"></i>
          </button>
        </div>
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
html {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  /* border: 1px solid blue; */
  margin: 1rem auto;
  width: 50rem;
  box-shadow: 0 0 3px gray;
  border-radius: 5px;
}
.container {
  padding: 0;
  display: flex;
  min-height: 100vh;
}

.router {
  width: 100%;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.1s ease-in;
}

.back {
  display: flex;
  justify-content: end;
}
</style>
