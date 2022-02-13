<template>
  <slot>
    <!-- <div>{{ short }}</div> -->

    <div>
      <img :src="'data:image/jpeg;base64,' + pp" />
    </div>
  </slot>
</template>


<script>
export default {
  props: ["short", "pp"],
};
</script>
<style scoped>
div {
  /* border: 1px solid red; */
  min-height: 50px;
  min-width: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background: cornflowerblue;
  color: white;
  overflow: hidden;
}

img {
  width: 80px;
  height: 80px;
}
</style>