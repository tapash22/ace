<template>
    <div class="gallery">
        <div class="row">
            <h2>Gallery</h2>
            <div class="col-md-4" v-for="gallery in gallerys" :key="gallery.id">
                <div class="card" >
                    <img :src="gallery.image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            gallerys:[
                {id:1, image:require('../../assets/image/gallery/23.jpg')},
                {id:2, image:require('../../assets/image/gallery/11.jpg')},
                {id:3, image:require('../../assets/image/gallery/10.jpg')},
                {id:4, image:require('../../assets/image/gallery/7.jpg')},
                {id:5, image:require('../../assets/image/gallery/2.jpg')},
            ],
        };
    },

      mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.gallery{
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 150px;
}
.row{
    width: 100%;
    padding: 10px;
    margin: 0;
    display: flex;
    background-image: linear-gradient(0deg, #fff,rgba(49, 233, 25, 0.856));
}
 h2{
     font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Vollkorn', serif;
  text-align: center;
  text-transform: uppercase;
}
 .col-md-4{
    width: 31%;
    height: 200px;
    padding: 0;
    margin: 10px;
    display: flex;
}
.col-md-4 .card{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 5px;
    background: #fff;
    box-shadow: 5px 5px 5px #8DC63F;
    overflow: hidden;
}
.card img{
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: 0.5s transform ease-out;
}
.card img:hover{
        transform: scale(1.09);
    transition: 0.3s transform ease-out;
}

</style>