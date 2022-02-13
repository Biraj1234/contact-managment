<template>
  <div @click="$emit('closeDialog')" class="overlay"></div>
  <dialog open>
    <header>
      {{ title }}
    </header>
    <section>
      <p>Some message</p>
      <slot name="cofirmError"></slot>
    </section>
  </dialog>
</template>

<script>
export default {
  props: ["title"],
  emits: ["closeDialog"],
};
</script>

<style scoped>
.overlay {
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}
dialog {
  position: fixed;
  border: none;
  top: 100px;
  left: 30%;
  box-shadow: 0 0 2px gray;
  font-size: 1.2rem;
  width: 40%;
  z-index: 100;
}

header {
  display: flex;
  justify-content: center;
  background: rgb(0, 0, 161);
  color: white;
  padding: 0.3rem;
  border-radius: 2px 2px 0 0;
}

section {
  padding: 1rem;
}

.ok {
  display: flex;
  justify-content: center;
}
</style>