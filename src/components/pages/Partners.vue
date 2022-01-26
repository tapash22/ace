<template>
  <div class="partners">
    <div class="row">
      <h2>Partners</h2>
      <div class="box" v-for="partner in partners" :key="partner.id">
        <div class="left">
          <img :src="partner.img" />
        </div>
        <div class="right">
            <p>{{partner.name}}</p>
          <address>
           {{ partner.detail}}
          </address>
          <a href="partner.url">visit site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            partners:[
                {id:1, name:"partner name", url:"", img:require('../../assets/image/partner1.png'),detail:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci"},
                {id:2, name:"partner name", url:"", img:require('../../assets/image/partner2.png'),detail:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci"},
                {id:3, name:"partner name", url:"", img:require('../../assets/image/partner3.png'),detail:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci"},
                {id:4, name:"partner name", url:"", img:require('../../assets/image/partner4.png'),detail:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci"},
                {id:5, name:"partner name", url:"", img:require('../../assets/image/partner5.png'),detail:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sapiente eligendi dicta possimus eos recusandae quod laudantium consequuntur provident corporis iure delectus ea saepe facere quae, et iste eveniet adipisci"},
            ],
        }
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
  margin-top: 170px;
}
.row {
  width: 100%;
  padding: 0;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 20px;
  display: flex;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Vollkorn', serif;
  text-align: center;
  text-transform: uppercase;
}
.row .box {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.box .left {
  width: 30%;
  height: 200px;
  padding: 5px;
  margin: 0;
  border: 5px solid #faa61a;
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
  background: #faa61a;
  box-shadow: 4px 5px 4px #8dc63f;
}
.box .right p{
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: 'Vollkorn', serif;
    text-align: center;
    text-transform: uppercase;
    color: #000;
}
.box .right address {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
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
  font-family: 'Vollkorn', serif;
}
</style>