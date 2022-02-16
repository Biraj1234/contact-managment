<template>
  <base-card>
    <the-spinner v-if="isLoading"></the-spinner>
    <div class="detail-image">
      <div class="details">
        <div>
          <label> Name:</label><span>{{ data.name }}</span>
        </div>
        <div>
          <label> Address:</label><span>{{ data.address }}</span>
        </div>
        <div>
          <label> E-mail:</label><span>{{ data.email }}</span>
        </div>
        <div>
          <label> Contact:</label><span>{{ data.contact_number }}</span>
        </div>
      </div>

      <div class="image">
        <img :src="'data:image/jpeg;base64,' + data.profile_picture" />
      </div>
    </div>

    <div class="actions">
      <base-button
        :to="{ path: '/friend/edit/' + data.id }"
        class="btn btn-warning"
        link="true"
        ><i class="fas fa-edit"></i
      ></base-button>
      <base-button class="btn btn-danger" @click="removeFriend(data.id)"
        ><i class="fas fa-trash"></i
      ></base-button>
    </div>
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
      data: "",
      isLoading: true,
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
          this.data = res.data.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeFriend(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //Delete data
          axios
            .delete(`${EndPoint}/api/friends/` + id)

            .then((res) => {
              console.log(res);
              this.$router.replace({ path: "/friend" });
            });

          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
};
</script>

<style scoped>
.btn-warning {
  margin: 5px;
}
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

.detail-image {
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
}

.image {
  /* border: 1px solid red; */
  overflow: hidden;
  text-align: center;
}

.image img {
  width: 50%;
}

.details {
  /* border: 1px solid blue; */
  width: 100%;
}
</style>