<template>
  <router-link :to="{ path: '/friend/view/' + this.id }">
    <header>
      <user-circle :short="shortForm(name)" :pp="profile_picture">
        <!-- <img :src="'data:image/jpeg;base64,' + profile_picture" /> -->
      </user-circle>
      <h5>{{ name }}</h5>
    </header>
  </router-link>
</template>

<script>
export default {
  props: ["id", "name", "profile_picture"],
  // inject: ["getFriends"],

  methods: {
    shortForm(name) {
      let words = name.split(" ");
      if (words.length < 2) return words[0][0];
      return `${words[0][0]}${words[words.length - 1][0]}`;
    },
  },
};
</script>

<style scoped>
header {
  border-bottom: 1px solid gray;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem;
  transition: 100ms ease-in;
}

header:hover {
  background: rgb(240, 240, 240);
}

header h5 {
  margin-left: 1rem;
}

.actions {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}
span {
  font-weight: bold;
}

li {
  list-style: none;
}

.message {
  background: green;
  color: white;
}

a {
  text-decoration: none;
  color: black;
}
</style>