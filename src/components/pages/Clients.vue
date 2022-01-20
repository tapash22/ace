<template>
  <div class="client">
    <Navigation :class="{change_color: scrollPosition > 100}"></Navigation>
    <div class="row">
      <div class="col-md-12">
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../../services/Navigation.vue";
import Footer from "../../services/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },

  data(){
    return{
      scrollPosition: null,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
},
  
methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
}
};
</script>

<style scoped>
.client {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.client .change_color{
  background-color: #fff;
  transition: 0.3s all ease-out;
}

.row {
  width: 100%;
  height: auto;
  padding: 0;
  margin:0;
}
.col-md-12 {
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 436px) {
  .client {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .row {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  }
  .col-md-12 {
    padding: 0;
  }
}
</style>