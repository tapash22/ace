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
                {id:1, image:require('../../assets/image/gallery/1.jpg')},
                {id:2, image:require('../../assets/image/gallery/2.jpg')},
                {id:3, image:require('../../assets/image/gallery/3.jpg')},
                {id:4, image:require('../../assets/image/gallery/4.jpg')},
                {id:5, image:require('../../assets/image/gallery/5.jpg')},
                {id:6, image:require('../../assets/image/gallery/6.jpg')},
                {id:7, image:require('../../assets/image/gallery/7.jpg')},
                {id:8, image:require('../../assets/image/gallery/8.jpg')},
                {id:9, image:require('../../assets/image/gallery/9.jpg')},
                {id:10, image:require('../../assets/image/gallery/10.jpg')},
                {id:11, image:require('../../assets/image/gallery/11.jpg')},
                {id:12, image:require('../../assets/image/gallery/12.jpg')},
                {id:13, image:require('../../assets/image/gallery/13.jpg')},
                {id:14, image:require('../../assets/image/gallery/14.jpg')},
                {id:15, image:require('../../assets/image/gallery/15.jpg')},
                {id:16, image:require('../../assets/image/gallery/16.jpg')},
                {id:17, image:require('../../assets/image/gallery/17.jpg')},
                {id:18, image:require('../../assets/image/gallery/18.jpg')},
                {id:19, image:require('../../assets/image/gallery/19.jpg')},
                {id:20, image:require('../../assets/image/gallery/20.jpg')},
                {id:21, image:require('../../assets/image/gallery/21.jpg')},
                {id:22, image:require('../../assets/image/gallery/22.jpg')},
                {id:23, image:require('../../assets/image/gallery/23.jpg')},
                {id:24, image:require('../../assets/image/gallery/24.jpg')},
                 {id:25, image:require('../../assets/image/gallery/25.jpg')},
                {id:26, image:require('../../assets/image/gallery/26.jpg')},
                {id:27, image:require('../../assets/image/gallery/27.jpg')},
            ],
        };
    },
}
</script>

<style scoped>
.gallery{
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
    padding: 5px;
    margin: 5px;
}
.card img{
    width: 100%;
    height: 100%;
}

</style>