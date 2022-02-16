<template>
  <base-card>
    <form action="" @submit.prevent="storeFriend">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" v-model="form.name" />
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" v-model="form.email" />
      </div>

      <div class="form-control">
        <label for="address">Contact No.</label>
        <input type="number" v-model="form.contact_number" />
      </div>

      <div class="form-control">
        <label for="address">Address</label>
        <input type="text" v-model="form.address" />
      </div>

      <div class="save">
        <base-button class="btn btn-success" type="submit" @click="updateFriend"
          >Update</base-button
        >
      </div>
    </form>
    <base-dialog
      v-if="errorMessage"
      title="Invalid Input"
      @closeDialog="confirmError"
    >
      <template #cofirmError>
        <div class="center">
          <base-button @click="confirmError">Ok</base-button>
        </div>
      </template>
    </base-dialog>
  </base-card>
</template>


<script>
import axios from "axios";
import { EndPoint } from "../../utils/EndPoint";

export default {
  inject: ["newFriend"],
  data() {
    return {
      errorMessage: false,
      form: {
        name: "",
        address: "",
        email: "",
        contact_number: "",
      },
    };
  },
  created() {
    this.getFriend();
  },
  methods: {
    getFriend() {
      axios
        .get(`${EndPoint}/api/friends/` + this.$route.params.id)
        .then((res) => {
          this.loading = false;
          this.form = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateFriend() {
      axios
        .put(`${EndPoint}/api/friends/` + this.$route.params.id, {
          name: this.form.name,
          address: this.form.address,
          email: this.form.email,
          contact_number: this.form.contact_number,
        })
        .then((res) => {
          this.$router.push({ path: "/friend/view/" + this.form.id });
          console.log(res);
        });
      //success message
      this.$toast.open({
        position: "bottom-right",
        message: "Details updated sucessfully!",
        type: "info",
        duration: 3000,
      });
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
}
.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

form input {
  padding: 0.4rem;
  font-size: 1rem;
  outline: none;
}

.center {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
}
</style>