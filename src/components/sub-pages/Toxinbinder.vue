<template>
  <div class="toxinbinder">
    <div class="row">
      <h2>toxinbinder</h2>
      <div
        class="col-md-3"
        v-for="toxinbinder in toxinbinders"
        :key="toxinbinder.id"
      >
        <router-link :to="toxinbinder.url">
          <div class="card">
            <div class="card-body">
              <img :src="toxinbinder.img" />
            </div>
            <div class="card-footer">
              <p>{{ toxinbinder.name }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     toxinbinders: [
        {
          id: 1,
          name: "Antibiotic",
          img: require("../../assets/image/partner1.png"),
          url: "/antibiotic",
        },
        {
          id: 2,
          name: "Betaine",
          img: require("../../assets/image/partner1.png"),
          url: "/betaine",
        },
        {
          id: 3,
          name: "Butyric acid",
          img: require("../../assets/image/partner1.png"),
          url: "/butyricacid",
        },
        {
          id: 4,
          name: "Disinfectant",
          img: require("../../assets/image/partner1.png"),
          url: "/disinfectant",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap");

.toxinbinder {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
.row {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Vollkorn", serif;
  text-align: center;
  text-transform: uppercase;
}
.col-md-3 {
  width: 25%;
  height: 250px;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.col-md-3 a {
  width: 100%;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #000;
}
.col-md-3 a .card {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
}
.card .card-body {
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 0;
}
.card .card-body img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.card .card-footer {
  width: 100%;
  height: 20%;
  padding: 5px;
  margin: 0;
  border: 4px solid orangered;
}
.card .card-footer p {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
}
</style>