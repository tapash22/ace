<template>
  <div class="toxinbinder">
    <div class="row">
      <h2>toxinbinder</h2>
      <div
        class="col-md-3"
        v-for="toxinbinder in toxinbinders"
        :key="toxinbinder.id"
      >
        <router-link :to="toxinbinder.url">
          <div class="card">
            <div class="card-body">
              <img :src="toxinbinder.img" />
            </div>
            <div class="card-footer">
              <p>{{ toxinbinder.name }}</p>
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
     toxinbinders: [
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