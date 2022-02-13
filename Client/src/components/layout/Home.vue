<template>
  <base-card>No of friends: {{ result }} </base-card>
</template>

<script>
import axios from "axios";
// import EndPoint from "../../utils/EndPoint";
export default {
  data() {
    return {
      result: null,
    };
  },
  created() {
    this.getFriends();
  },
  methods: {
    getFriends() {
      axios
        .request("http://127.0.0.1:8000/api/home")
        .then((res) => {
          this.result = res.data;
          console.log(this.result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>