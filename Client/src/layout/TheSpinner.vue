<template>
  <div class="loader">
    <half-circle-spinner
      :animation-duration="1000"
      :size="100"
      color="#0a0a0a"
    />
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";
export default {
  components: { HalfCircleSpinner },
};
</script>

<style scoped>
.loader {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
}
</style>