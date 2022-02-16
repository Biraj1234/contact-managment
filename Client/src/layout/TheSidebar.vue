<template>
  <section>
    <router-link to="/">Home</router-link>
    <router-link to="/friend">Friends</router-link>
    <router-link to="/friend/add">Add</router-link>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;

  border-right: 1px solid rgb(226, 226, 226);
  border-radius: 5px 0 0 5px;
  padding: 0;
}

a {
  text-decoration: none;
  padding: 0.3rem;
  width: 10vw;
  text-align: center;
  transition: 100ms ease-in-out;
  color: black;
  border-bottom: 1px solid rgb(221, 221, 221);
}
a:hover {
  background: rgb(248, 206, 206);
}

a.router-link-active {
  background: rgb(255, 45, 45);
  color: white;
}
</style>