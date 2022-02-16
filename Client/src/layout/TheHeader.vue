<template>
  <section @click="closeResult" v-if="searchResult"></section>
  <header>
    <h3>
      <router-link to="/"> Contacts </router-link>
    </h3>

    <div class="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
        name="search"
        @input="searchFriend()"
      />
      <div v-if="searchResult" class="search-result">
        <!--If result is found-->
        <div v-if="friends.length > 0">
          <div v-for="friend in friends" :key="friend.id">
            <router-link :to="{ path: '/friend/view/' + friend.id }">
              <p>
                {{ friend.name }}
              </p>
            </router-link>
          </div>
        </div>

        <!--If result is not fouund-->
        <div v-else>
          <p>No data found..</p>
        </div>
      </div>

      <button class="btn btn-success" type="submit">Search</button>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import { EndPoint } from "../utils/EndPoint";
export default {
  data() {
    return {
      search: null,
      friends: "",
      searchResult: false,
    };
  },
  methods: {
    searchFriend() {
      axios
        .get(`${EndPoint}/api/friends`, { params: { search: this.search } })
        .then((res) => {
          console.log(res);
          this.searchResult = true;
          this.friends = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeResult() {
      // alert("hello");
      this.searchResult = false;
    },
  },
};
</script>

<style scoped>
section {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  /* background: black; */
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: purple;
  color: white;
  height: 4rem;
}

.search {
  /* border: 1px solid red; */
  width: 20rem;
  display: flex;
  flex-direction: row;
  position: relative;
}

.search-result {
  background: rgb(224, 224, 224);
  position: absolute;
  top: 45px;
  width: 75%;
  /* height: 10rem; */
  color: black;
  /* border: 1px solid red; */
}
.search-result a {
  text-decoration: none;
  color: black;
}

.search-result p {
  padding: 0.3rem;
  border-bottom: 1px solid gray;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}
</style>