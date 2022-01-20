<template>
  <div class="poultry">
    <div class="row">
      <h2>poultry</h2>
      <div class="col-md-3" v-for="poultry in poultrys" :key="poultry.id">
          <router-link :to="poultry.url">
          <div class="card">
              <div class="card-body">
                  <img :src="poultry.img"/>
              </div>
              <div class="card-footer">
                  <p>{{poultry.name}}</p>
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
            poultrys:[
                {id :1, name:"Antibiotic", img: require('../../assets/image/partner1.png'),url:'/antibiotic'},
                {id :2, name:"Betaine", img: require('../../assets/image/partner1.png'),url:'/betaine'},
                {id :3, name:"Butyric acid", img: require('../../assets/image/partner1.png'),url:'/butyricacid'},
                {id :4, name:"Disinfectant", img: require('../../assets/image/partner1.png'),url:'/disinfectant'},
                {id :5, name:"Emulsifier", img: require('../../assets/image/partner1.png'),url:'/emulsifier'},
                {id :6, name:"Essential oil", img: require('../../assets/image/partner1.png'),url:'/essentialoil'},
                {id :7, name:"Liver tonic", img: require('../../assets/image/partner1.png'),url:'/livertonic'},
                {id :8, name:"Nutritional", img: require('../../assets/image/partner1.png'),url:'/nutritional'},
                {id :9, name:"Prebiotics", img: require('../../assets/image/partner1.png'),url:'/prebiotics'},
                {id :10, name:"Toxin binder", img: require('../../assets/image/partner1.png'),url:'/toxinbinder'}
            ],
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap');

.poultry{
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
}
 h2{
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Vollkorn', serif;
    text-align: center;
    text-transform: uppercase;
}
.col-md-3{
    width: 25%;
    height: 250px;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
}
.col-md-3 a{
    width: 100%;
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #000;
}
.col-md-3 a .card{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: none;
    background: #fff;
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
    border: 4px solid orangered;
}
.card .card-footer p{
    font-size: 1.2rem;
    font-weight: 600;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: center;
}

</style>