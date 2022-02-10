<template>
  <div class="poultry">
    <div class="row">
            <div class="image">
        <img src="../../assets/image/product.jpg"/>
      </div>
      <div class="col-md-3" v-for="product in products" :key="product.id">
        <router-link :to="product.url">
          <div class="card">
            <div class="card-body">
              <img :src="product.img" />
            </div>
            <div class="card-footer">
              <p>{{ product.name }}</p>
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
      products: [
        {
          id: 1,
          name: "POULTRY",
          img: require("../../assets/image/p1.png"),
          url: "/poultry",
        },
        {
          id: 2,
          name: "DAIRY",
          img: require("../../assets/image/c1.png"),
          url: "/dairy",
        },
        {
          id: 3,
          name: "AQUA",
          img: require("../../assets/image/a1.png"),
          url: "/aqua",
        },
      ],
    };
  },

    mounted() {
    window.scrollTo(0, 0);
  },
  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap");

.poultry {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 150px;
}
.row {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
      background-image: linear-gradient(0deg, #fff,rgba(49, 233, 25, 0.856));
}
.row .image{
  width: 100%;
  height:500px;
 padding: 0;
 margin: 0; 
}
.row .image img{
  width: 100%;
  height: 100%;

}
.col-md-3 {
  width: 25%;
  height: 250px;
  padding: 20px;
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
  box-shadow: 5px 5px 5px #8dc63f;
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
  border: 4px solid #faa61a;
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