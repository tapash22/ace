<template>
  <div class="home">
    <div class="slider">
      <h3>We Concern to delivery best product for Poultry</h3>
      <button class="btn">Contact Us</button>
    </div>
    <div class="row">
      <div class="col-md-3">
        <h2>Sevices</h2>
        <p>Solution for your firm</p>
      </div>
      <div class="col-md-9">
        <div class="box2">
          <div class="container2" v-for="product in products" :key="product.id">
            <a href="product.url">
              <img :src="product.img" />
              <div class="overlay2">
                <div class="text2">{{ product.name }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row1">
      <div class="col-md-3 blog">
        <h2>Blog</h2>
        <p>Introduce with you a new firming phermacutical using</p>
      </div>
       <div class="col-md-9 blog1">
         <div class="box" v-for="event in events" :key="event.id">
           <div class="card">
             <div class="card-header">
               <img :src="event.img"/>
             </div>
             <div class="card-body">
               <h4>{{event.title}}</h4>
               <p>{{event.des}}</p>
               <a href="event.url">Read more..</a>
             </div>
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

  components: {
    // Slider,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Merienda:wght@700&family=Montserrat&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Raleway:ital,wght@1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Ubuntu:wght@700&family=Vollkorn:wght@500&display=swap");
.home {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 140px;
  margin-bottom: 0;
}
.slider {
  width: 100%;
  height: 450px;
  padding: 0;
  margin: 0;
  background-image: url("../../assets/image/1.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: left;
}
.slider h3 {
  width: 40%;
  font-size: 3.5rem;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  padding: 40px;
  margin: 20px;
  color: rgb(52, 218, 52);
}
.slider .btn {
  width: 150px;
  height: 50px;
  border-radius: 20px;
  margin-top: 200px;
  margin-left: -60px;
  background: #75be0e83;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  transition: 0.5s all ease-out;
}
.slider .btn:hover {
  transition: 0.3s all ease-out;
  box-shadow: 2px 5px 20px #75be0ef1;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  /* margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 20px; */
  display: flex;
  /* background-image: linear-gradient(0deg, #fff, rgba(49, 233, 25, 0.856)); */
}
.row .col-md-3 {
  width: 25%;
  height: 100%;
  padding-top: 90px;
  padding-bottom: 90px;
  margin: 0;
  display: block;
  background: #01abed;
      border: 10px solid #F9A51A;
  
}
.row .col-md-3 h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  font-family: "Vollkorn", serif;
  text-transform: uppercase;
  color: #f7f0f5;
  padding: 5px;
  margin: 5px;
  height: 100%;
}
.row .col-md-3 p {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  font-family: "Vollkorn", serif;
  color:#f7f0f5;
}
.row .col-md-9 {
  width: 75%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
  background: #f7f0f5;
}
.col-md-9 .box2 {
  width: 100%;
  height: 100%;
  padding: 15px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.col-md-9 .box2 .container2 {
  position: relative;
  width: 30%;
  height: 100%;
  border: 1px solid #01abed;
  border-top-right-radius: 5px;
  margin: 10px;
}
.col-md-9 .box2 .container2 a {
  text-decoration: none;
  padding: 0;
  margin: 0;
}
.col-md-9 .box2 .container2 img {
  width: 100%;
  height: 250px;
  padding: 0;
  margin: 0;
}
.col-md-9 .box2 .overlay2 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f9a31ab0;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: 0.3s ease;
}
.col-md-9 .box2 .container2:hover .overlay2 {
  width: 100%;
  cursor: pointer;
}
.col-md-9 .box2 .text2 {
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster", cursive;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

/* blog */
.row1 {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  /* background-image: linear-gradient(0deg, #fff, rgba(49, 233, 25, 0.856)); */
}
.row1 .blog {
  width: 25%;
  height: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
  margin: 0;
  display: block;
  background: #f7f0f5;
  border: 10px solid #F9A51A;
}
.row1 .blog h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  font-family: "Vollkorn", serif;
  text-transform: uppercase;
  color: #01abed;
  padding: 5px;
  margin: 5px;
  height: 100%;
}
.row1 .blog p {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  font-family: "Vollkorn", serif;
  color: #01abed;
}
.row1 .blog1{
  width: 75%;
  height: 450px;
  padding: 0;
  margin: 0;
  background: #01abed;
  display: flex;
  justify-content: center;
}
.blog1 .box{
  width: 100%;
  height: 100%;
  padding:20px;
  margin:0;
}
.blog1 .box .card{
  width: 100%;
  height: 400px;
  padding: 5px;
  margin:0;
  background:#fff;
}
.blog1 .box .card .card-header{
  width:100%;
  height:40%;
  padding:0;
  margin:0;
  overflow: hidden;
}
.blog1 .box .card .card-header img{
  width: 100%;
  height: 100%;
    transform:scale(1);
  transition:0.4s transform ease-out;
}
.blog1 .box .card .card-header:hover img{
  transform:scale(1.08);
  transition:0.4s transform ease-out;
}
.blog1 .box .card .card-body{
  width:100%;
  height:60%;
  padding:5px;
  margin:0;
  display: block;
  background: #fff;
}
.blog1 .box .card .card-body h4{
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Vollkorn", serif;
  text-transform: uppercase;
  padding:5px;
}
.blog1 .box .card .card-body p{
    font-size: 1rem;
  font-weight: 500;
  font-family: "Vollkorn", serif;
  padding:5px;
}
.blog1 .box .card .card-body a{
      font-size: 1rem;
  font-weight: 600;
  font-family: "Vollkorn", serif;
}
</style>