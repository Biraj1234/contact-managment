<template>
  <base-card>
    <form method="POST" @submit.prevent="storeFriend">
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

      <div class="form-control">
        <label for="address">Profile Picture</label>
        <input type="file" @change="imageSelected" />
      </div>
      <div v-if="image_preview">
        <img
          :src="image_preview"
          class="figure-img img-fluid rounded"
          style="max-height: 100px"
        />
      </div>

      <div class="save">
        <button type="submit" class="btn btn-success">Add</button>
      </div>
    </form>
  </base-card>
</template>


<script>
import axios from "axios";
import { EndPoint } from "../../utils/EndPoint";

export default {
  inject: ["newFriend"],
  data() {
    return {
      file: new FormData(),
      attachment: null,
      form: {
        name: "",
        address: "",
        email: "",
        contact_number: "",
        imagePath: "",
      },
    };
  },

  methods: {
    imageSelected(e) {
      let selectedFile = e.target.files[0];
      this.attachment = selectedFile;
    },

    storeFriend() {
      this.file.append("profile_name", this.attachment);
      this.file.append("name", this.form.name);
      this.file.append("address", this.form.address);
      this.file.append("email", this.form.email);
      this.file.append("contact_number", this.form.contact_number);

      let config = { headers: { "Content-Type": "multipart/form-data" } };
      axios.post(`${EndPoint}/api/friends`, this.file, config).then((res) => {
        this.$router.push({ path: "/friend" });
        console.log(res);
      });
      //Success message
      this.$toast.open({
        position: "bottom-right",
        message: "Friend succesfully added!",
        type: "success",
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