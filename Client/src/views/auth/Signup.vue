<template>
  <form>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" />
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" />
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" />
    </div>

    <div class="mb-3">
      <label for="cpassword" class="form-label">Confirm Password</label>
      <input type="password" class="form-control" id="cpassword" />
    </div>

    <div class="mb-3 form-check">
      Alread have an account?
      <router-link to="/signin">Login</router-link> now
    </div>

    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>


<style scoped>
form {
  /* border: 1px solid red; */
  background: rgb(212, 212, 212);
  padding: 1rem;
  margin-left: 1rem;
  width: 20rem;
}
</style>