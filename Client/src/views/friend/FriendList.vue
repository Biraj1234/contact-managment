<template>
  <base-card>
    <section>
      <the-spinner v-if="isLoading"></the-spinner>
      <li v-for="friend in friends" :key="friend.id">
        <friend-list
          :id="friend.id"
          :name="friend.name"
          :profile_picture="friend.profile_picture"
        ></friend-list>
      </li>
    </section>
  </base-card>
</template>

<script>
import axios from "axios";
import { EndPoint } from "../../utils/EndPoint";
import FriendList from "../../components/freinds/FriendList.vue";

export default {
  components: { FriendList },
  data() {
    return {
      friends: [],
      isLoading: true,
    };
  },

  provide() {
    return {
      getFriends: true,
    };
  },

  created() {
    this.getFriends();
  },

  methods: {
    getFriends() {
      axios
        .get(`${EndPoint}/api/friends`)
        .then((res) => {
          this.friends = res.data.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>



<style scoped>
section {
  /* border: 1px solid red; */
  padding: 1rem;
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

.loader {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
}
</style>