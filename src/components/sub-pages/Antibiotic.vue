<template>
  <div class="product">
    <div class="row">
      <h2>antibiotic</h2>
      <div
        class="col-md-3"
        v-for="antibiotic in antibiotics"
        :key="antibiotic.id"
      >
        <router-link :to="antibiotic.url">
          <div class="card">
            <div class="card-body">
              <img :src="antibiotic.img" />
            </div>
            <div class="card-footer">
              <p>{{ antibiotic.name }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      antibiotics: [
        {
          id: 1,
          name: "Antibiotic",
          img: require("../../assets/image/partner1.png"),
          url: "/antibiotic",
        },
        {
          id: 2,
          name: "Betaine",
          img: require("../../assets/image/partner1.png"),
          url: "/betaine",
        },
        {
          id: 3,
          name: "Butyric acid",
          img: require("../../assets/image/partner1.png"),
          url: "/butyricacid",
        },
        {
          id: 4,
          name: "Disinfectant",
          img: require("../../assets/image/partner1.png"),
          url: "/disinfectant",
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
@import url('../../assets/css/product.css');
</style>