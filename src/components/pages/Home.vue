<template>
  <div class="home">
    <div class="slider">
      <h3>We Concern to delivery best product for Poultry</h3>
      <button class="btn">Contect Us</button>

        <!-- <Slider/> -->
      </div>
    <div class="row">
      
      <!-- <h2>Stay with us</h2> -->
      <!-- <div class="divider div-transparent div-dot"></div> -->
      <!-- <div class="col-md-12">
        <div class="box">
          <p>Have any slogan</p>
        </div>
      </div> -->
      <h2>WE &nbsp; PROVIDE</h2>
      <!-- <div class="divider div-transparent div-dot"></div> -->
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
      <!-- <div class="divider div-transparent div-dot"></div> -->
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
// import Slider from "../../services/Slider.vue";
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
    // Slider,
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap');
.home {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 150px;
  margin-bottom: 0;
}
.slider{
  width: 100%;
  height: 450px;
  padding: 0;
  margin:0;
  background-image: url('../../assets/image/1.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: left;
}
.slider h3{
  width: 30%;
  font-size: 3.5rem;
  font-weight: 900;
  font-family: 'Raleway', sans-serif;
  padding:40px;
  margin: 20px;
  color: rgb(52, 218, 52);
}
.slider .btn{
  width: 150px;
  height: 50px;
  border-radius: 20px;
  margin-top: 200px;
  margin-left: -60px;
  background: #75be0e83;
  font-size: 1.3rem;
  font-weight: 700;
  color:#fff;
  transition:0.5s all ease-out;
}
.slider .btn:hover{
  transition:0.3s all ease-out;
  box-shadow: 2px 5px 20px #75be0ef1;
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
  background-image: linear-gradient(0deg, #fff,rgba(49, 233, 25, 0.856));
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
  /* background:  #FAA61A; */
  border-radius: 10px;
  box-shadow: 5px 4px 4px #8DC63F;
  /* border: 5px double orangered; */
}
.col-md-12 .box p {
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  text-align: center;
  color:#000;
}
.col-md-3 {
  width: 25%;
  height: 260px;
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
  height: 250px;
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
  box-shadow: 0 0 20px #75be0e;
}
.card .card-body {
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.card .card-body img{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  transform: scale(1);
  transition: 0.3s transform ease-out;
}
.card .card-body img:hover{
    transform: scale(1.1);
  transition: 0.5s transform ease-out;
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
  box-shadow: 0 0 50px green;
}
.col-md-4 .card .card-header {
  width: 100%;
  height: 50%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.col-md-4 .card .card-header img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  transform: scale(1);
  transition: 0.5s transform ease-out;
}
.col-md-4 .card .card-header img:hover{
  transform:scale(1.1);
  transition: 0.3s transform ease-out;
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
  color: #000;
}
.col-md-4 .card .card-body ul li:nth-child(2) {
  width: 100%;
  height: 30%;
  padding: 5px;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
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
}
</style>