<template>
  <div class="product">
    <div class="row">
      <h2>prebiotics</h2>
      <div
        class="col-md-3"
        v-for="prebiotics in prebioticss"
        :key="prebiotics.id"
      >
        <router-link :to="prebiotics.url">
          <div class="card">
            <div class="card-body">
              <img :src="prebiotics.img" />
            </div>
            <div class="card-footer">
              <p>{{ prebiotics.name }}</p>
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
      prebioticss: [
        {
          id: 1,
          name: "Livertonic",
          img: require("../../assets/image/p1.png"),
          url: "/antibiotic",
        },
        {
          id: 2,
          name: "Betaine",
          img: require("../../assets/image/p1.png"),
          url: "/betaine",
        },
        {
          id: 3,
          name: "Butyric acid",
          img: require("../../assets/image/p1.png"),
          url: "/butyricacid",
        },
        {
          id: 4,
          name: "Disinfectant",
          img: require("../../assets/image/p1.png"),
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