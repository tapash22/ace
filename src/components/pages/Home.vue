<template>
  <div class="home">
    <div class="slider">
        <Slider/>
      </div>
    <div class="row">
      
      <h2>Stay with us</h2>
      <div class="divider div-transparent div-dot"></div>
      <div class="col-md-12">
        <div class="box">
          <p>Have any slogan</p>
        </div>
      </div>
      <h2>products</h2>
      <div class="divider div-transparent div-dot"></div>
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
      <h2>Events</h2>
      <div class="divider div-transparent div-dot"></div>
      <div class="col-md-4" v-for="event in events" :key="event.id">
        <div class="card">
          <div class="card-header">
            <img :src="event.img" />
          </div>
          <div class="card-body">
            <ul>
              <li>{{event.title}}</li>
              <li>{{event.des}}</li>
              <li>{{event.url}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../../services/Slider.vue";
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "POULTRY",
          img: require("../../assets/image/chi.png"),
          url: "/poultry",
        },
        {
          id: 2,
          name: "DAIRY",
          img: require("../../assets/image/co.png"),
          url: "/dairy",
        },
        {
          id: 3,
          name: "AQUA",
          img: require("../../assets/image/fi.png"),
          url: "/aqua",
        },
      ],

      events: [
        {
          id: 1,
          title: "this is the title",
          url: "link",
          img: require("../../assets/image/c.jpg"),
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium similique, nobis repellat voluptas rem ad illum,Lorem ipsum dolor sit,",
        },
        {
          id: 1,
          title: "this is the title",
          url: "link",
          img: require("../../assets/image/c.jpg"),
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium similique, nobis repellat voluptas rem ad illum,Lorem ipsum dolor sit,",
        },
        {
          id: 1,
          title: "this is the title",
          url: "link",
          img: require("../../assets/image/c.jpg"),
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium similique, nobis repellat voluptas rem ad illum,Lorem ipsum dolor sit,",
        },
      ],
    };
  },

    mounted() {
    window.scrollTo(0, 0);
  },
  
  components:{
    Slider,
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap');

.home {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
.slider{
  width: 100%;
  height: 650px;
  padding: 0;
  margin:0;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  font-family: 'Vollkorn', serif;
  text-transform: uppercase;
  padding: 5px;
  margin: 5px;
}
.row .divider {
  position: relative;
  margin: 0;
  height: 1px;
}
.row .div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 40%;
  right: 40%;
  width: 20%;
  height: 2px;
  background-image: linear-gradient(
    to right,
    transparent,
    #FAA61A,
    transparent
  );
}
.row .div-dot:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -9px;
  left: calc(50% - 9px);
  width: 18px;
  height: 18px;
  background-color: #8DC63F;
  border: 1px solid #FAA61A;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px white, 0 0 0 4px white;
}
.col-md-12 {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.col-md-12 .box {
  width: 600px;
  height: 60px;
  padding: 5px;
  margin: 10px;
  background:  #FAA61A;
  border-radius: 10px;
  box-shadow: 5px 4px 4px #8DC63F;
  /* border: 5px double orangered; */
}
.col-md-12 .box p {
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  text-align: center;
  color:#fff;
}
.col-md-3 {
  width: 25%;
  height: 200px;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.col-md-3 a {
  width: 100%;
  color: #000;
  padding: 0;
  margin-top: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
}
.col-md-3 a .card {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
  box-shadow: 0 0 10px #8DC63F;
}
.card .card-body {
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.card .card-footer {
  width: 100%;
  height: 20%;
  padding: 0;
  margin: 0;
  background: #FAA61A;
}
.card-footer p {
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  padding: 0;
  margin: 0;
  text-align: center;
}
.col-md-4 {
  width: 33%;
  height: 350px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.col-md-4 .card {
  width: 70%;
  height: 100%;
  padding: 0;
  margin: 0;
  box-shadow: 0 0 10px #274202;
}
.col-md-4 .card .card-header {
  width: 100%;
  height: 50%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-header img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-body {
  width: 100%;
  height: 50%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-body ul {
  width: 100%;
  height: 200%;
  padding: 0;
  margin: 0;
}
.col-md-4 .card .card-body ul li {
  list-style: none;
  display: flex;
  justify-content: center;
}
.col-md-4 .card .card-body ul li:nth-child(1) {
  width: 100%;
  height: 10%;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  text-transform: uppercase;
  text-align: center;
  background: #FAA61A;
  color: #fff;
}
.col-md-4 .card .card-body ul li:nth-child(2) {
  width: 100%;
  height: 30%;
  padding: 5px;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  text-align: justify;
  background: #fff;
}
.col-md-4 .card .card-body ul li:nth-child(3) {
  width: 100%;
  height: 10%;
  padding: 0;
  margin: 0;
  color: #000;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Vollkorn', serif;
  background: #FAA61A;
}
</style>