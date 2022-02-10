<template>
  <div class="product">
    <div class="row">
      <h2>yeastbased</h2>
      <div
        class="col-md-3"
        v-for="yeastbased in yeastbaseds"
        :key="yeastbased.id"
      >
        <router-link :to="yeastbased.url">
          <div class="card">
            <div class="card-body">
              <img :src="yeastbased.img" />
            </div>
            <div class="card-footer">
              <p>{{ yeastbased.name }}</p>
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
      yeastbaseds: [
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