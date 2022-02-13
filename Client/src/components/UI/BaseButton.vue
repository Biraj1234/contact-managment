<template>
  <button :class="mode" v-if="!link">
    <slot></slot>
  </button>

  <router-link v-else :class="mode" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ["mode", "link", "to", "title", "icon"],
};
</script>

<style scoped>
a,
button {
  width: 5rem;
  text-align: center;
  color: white;
  font-size: 0.8rem;
}
</style>