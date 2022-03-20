<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model.trim="email"
      />
      <p class="text text-danger" v-if="emailErr">Please enter your email</p>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model.trim="password"
      />
      <p class="text text-danger" v-if="emailErr">Please enter your password</p>
    </div>
    <div class="mb-3 form-check">
      Not have an account? <router-link to="/signup">Sign up</router-link> now
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      emailErr: false,
      pwdErr: false,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === "") {
        this.formIsValid = false;
        this.emailErr = true;
        return;
      }
      if (this.password === "") {
        this.formIsValid = false;
        this.pwdErr = true;
        return;
      } else {
        alert("form submitted");
      }
    },
  },
};
</script>

<style scoped>
form {
  /* border: 1px solid red; */
  background: rgb(212, 212, 212);
  padding: 1rem;
  margin-left: 1rem;
  width: 20rem;
}
</style>