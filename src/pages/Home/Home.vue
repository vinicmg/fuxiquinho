<template>
  <main>
    <section class="overlay" aria-hidden="true">
      <div class="list-group">
        <div
          class="list-group-item"
          v-for="gossip in gossipsData"
          v-bind:key="gossip.id"
        >
          <span
            ><strong>{{ gossip.title }}</strong></span
          >
          <br />
          <p>{{ gossip.content }}</p>
          <br />
          <p>{{ gossip.author }} - {{ gossip.date }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import firebase from "../../firebaseConfig";
import moment from "moment";

const db = firebase.firestore();

export default {
  name: "Home",
  data() {
    return {
      gossipsData: [],
    };
  },
  methods: {
    readGossips() {
      this.gossipsData = [];
      db.collection("gossips")
        .orderBy("date", "desc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.gossipsData.push({
              id: doc.id,
              title: doc.data().title,
              date: moment(doc.data().date.toDate()).format("DD/MM/YYYY"),
              content: doc.data().content,
              author: doc.data().author,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting gossips: ", error);
        });
    },
  },
  mounted() {
    this.readGossips();
  },
};
</script>

<style scoped>
.list-group {
  margin: 0px 20px;
  padding-top: 10px;
  width: 80%;
}

.overlay {
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-bottom: 60px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.list-group-item {
  margin-bottom: 10px;
}
</style>