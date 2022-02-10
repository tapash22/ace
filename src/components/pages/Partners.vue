<template>
  <div class="partners">
    <div class="row">
      <div class="image">
        <img src="../../assets/image/partne.jpg" />
      </div>
      <div class="box" v-for="partner in partners" :key="partner.id">
        <div class="left">
          <img :src="partner.img" />
        </div>
        <div class="right">
          <p>{{ partner.name }}</p>
          <address>
            {{ partner.detail }}
          </address>
          <a href="partner.url">visit site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          id: 1,
          name: "ICC",
          url: "",
          img: require("../../assets/image/icc.png"),
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci",
        },
        {
          id: 2,
          name: "AdiFeed",
          url: "",
          img: require("../../assets/image/ad.png"),
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci",
        },
        {
          id: 3,
          name: "bioarmor",
          url: "",
          img: require("../../assets/image/bio.png"),
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci",
        },
        {
          id: 4,
          name: "Global Nutritech",
          url: "",
          img: require("../../assets/image/glo.png"),
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci",
        },
        {
          id: 5,
          name: "killion communications consultence Inc.",
          url: "",
          img: require("../../assets/image/or.png"),
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci",
        },
        {
          id: 6,
          name: "orffa",
          url: "",
          img: require("../../assets/image/bs.png"),
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci",
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
.partners {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 150px;
}
.row {
  width: 100%;
  padding: 0;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 20px;
  display: flex;
  background-image: linear-gradient(0deg, #fff, rgba(49, 233, 25, 0.856));
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
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Vollkorn", serif;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
}
.row .box {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  box-shadow: 0 0 10px #fff;
}
.box .left {
  width: 30%;
  height: 200px;
  padding: 5px;
  margin: 0;
  /* border: 5px solid #faa61a; */
}
.box .left img {
  width: 100%;
  height: 100%;
}
.box .right {
  width: 70%;
  height: 200px;
  padding: 10px;
  margin: 0;
  /* background: #faa61a; */
  /* box-shadow: 4px 5px 4px #8dc63f; */
}
.box .right p {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: "Vollkorn", serif;
  text-align: center;
  text-transform: uppercase;
  color: #000;
}
.box .right address {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Vollkorn", serif;
  padding: 5px;
  margin: 0;
}
.box .right a {
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "Vollkorn", serif;
}
</style>