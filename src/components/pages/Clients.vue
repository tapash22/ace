<template>
  <div class="client">
    <Navigation />
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
};
</script>

<style scoped>
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