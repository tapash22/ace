<template>
  <div class="dairy">
    <div class="row">
      <h2>Dairy</h2>
      <div class="col-md-4" v-for="dairy in dairys" :key="dairy.id">
          <router-link :to="dairy.url">
          <div class="card">
              <div class="card-body">
                  <img :src="dairy.img"/>
              </div>
              <div class="card-footer">
                  <p>{{dairy.name}}</p>
              </div>
          </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dairys:[
                {id :1, name:"Dried molasses", img: require('../../assets/image/c1.png'),url:'/driedmolasses'},
                {id :2, name:"Yeast product", img: require('../../assets/image/c1.png'),url:'/yeastbased'},
            ],
        }
    },

      mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap');

.dairy{
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 170px;
}
.row{
    width: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: center;
}
 h2{
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Vollkorn', serif;
    text-align: center;
    text-transform: uppercase;
}
.col-md-4{
    width: 33%;
    height: 300px;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
}
.col-md-4 a{
    width: 100%;
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #000;
}
.col-md-4 a .card{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: none;
    box-shadow: 5px 5px 5px #8DC63F;
}
.card .card-body{
    width: 100%;
    height: 80%;
    padding: 0;
    margin: 0;
}
.card .card-body img{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
.card .card-footer{
    width: 100%;
    height: 20%;
    padding: 5px;
    margin: 0;
    border: 4px solid #faa61a;
}
.card .card-footer p{
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Vollkorn", serif;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
}

</style>