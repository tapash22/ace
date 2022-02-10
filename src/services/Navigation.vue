<template>
  <div class="navigation">
    <nav>
      <router-link class="brand" to="/home">
        <img src="../assets/image/ace_logo.png" />
      </router-link>
      <ul class="sticky">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li>
          <router-link to="/products">Products</router-link>
          <ul class="ul">
            <li>
              <router-link to="/poultry">Poultry</router-link>
              <!-- <ul class="two">
                <li>
                  <router-link to="/betaine">
                    Betaine</router-link
                  >
                </li>
                <li>
                  <router-link to="/butyricacid"
                    >Butyric acid</router-link
                  >
                </li>
                <li><router-link to="/disinfectant">Disinfectant  </router-link></li>
                <li><router-link to="/emulsifier">Emulsifier  </router-link></li>
                <li><router-link to="/essentialoil">Essential oil</router-link></li>
                <li><router-link to="/livertonic">Liver tonic powder  </router-link></li>
                <li><router-link to="/nutritional">Nutritional  </router-link></li>
                <li><router-link to="/prebiotics">Prebiotics  </router-link></li>
                <li><router-link to="/toxinbinder">Toxin binder  </router-link></li>
              </ul> -->
            </li>
            <li>
              <router-link to="/dairy">Dairy</router-link>
              <!-- <ul class="twoo">
                <li><router-link to="/driedmolasses">Dried molasses</router-link></li>
                <li>
                  <router-link to="/yeastbased">
                    Yeast based product</router-link
                  >
                </li>
              </ul> -->
            </li>

            <li>
              <router-link to="/aqua">Aqua</router-link>
            </li>
          </ul>
        </li>
        <li><router-link to="/partners">Partners</router-link></li>
        <li><router-link to="/contactus">Contact Us</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap");

.navigation {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  z-index: 999;
  position: fixed;
}
nav {
  width: 100%;
  height: 150px;
  padding: 10px;
  margin: 0;
  display: flex;
  background: #fff;
  box-shadow: 0 0 10px green;
}
nav .brand {
  width: 20%;
  height: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  text-decoration: none;
}
nav .brand img {
  width: 160px;
  height: 110px;
}
nav .sticky {
  width: 80%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.sticky li {
  padding: 20px;
  margin-top: 50px;
  list-style: none;
}
.sticky li a {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Vollkorn", serif;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #000;
}
.sticky li a:hover,
.sticky li a.router-link-exact-active {
  color: green;
}
.sticky li:hover .ul {
  display: flex;
}

.sticky li .ul {
  width: 450px;
  height: 50px;
  position: fixed;
  display: none;
  padding: 0;
  margin: 0;
  z-index: 5;
  background: #fff;
}

.sticky li .ul li {
  width: 150px;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.sticky li .ul li:hover {
  background: green;
}
.sticky li .ul li a {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Vollkorn", serif;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #000;
}
</style>