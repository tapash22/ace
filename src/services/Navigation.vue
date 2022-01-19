<template>
  <div class="navigation">
    <div class="first">
      <a class="brand" href="/home">
        <img src="../assets/image/ace_logo.png" />
      </a>
    </div>
    <nav>
      <ul class="sticky">
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li>
          <router-link to="/products">Products</router-link>
          <ul class="ul">
            <li>
              <router-link to="/poultry">Poultry</router-link>
              <ul class="two">
                <li><router-link to="/antibiotic">Antibiotic  </router-link></li>
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
              </ul>
            </li>
            <li>
              <router-link to="/dairy">Dairy</router-link>
              <ul class="two">
                <li><router-link to="/driedmolasses">Dried molasses</router-link></li>
                <li>
                  <router-link to="/yeastbased">
                    Yeast based product</router-link
                  >
                </li>
              </ul>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap');

.navigation {
  width: 100%;
  height: auto;
  padding: 0;
  margin:0;
  z-index: 999;
  background: #fff;
}
.navigation .first {
  width: 100%;
  height: 120px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.first a {
  width: 200px;
  height: 100px;
  padding: 10px;
  margin: 0;
}
.first a img {
  transform: scale(1.2);
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.navigation nav {
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;
  background: #8DC63F;
  justify-content: center;
}
nav .sticky {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
nav .sticky li {
  list-style: none;
  padding: 5px;
  margin: 5px;
}
nav .sticky li a {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  padding:0;
  margin: 5px;
  text-decoration: none;
  color: #fff;
  border-bottom: 2px none #000;
}
nav .sticky li a:hover,
nav .sticky li a.router-link-exact-active {
  /* .navbar .ul li a.router-link-exact-active{ */
  border-bottom: 2px solid rgb(255, 166, 0);;
}
.sticky li:hover .ul {
  display: block;
}
.sticky li .ul {
  width: 120px;
  height: auto;
  position: absolute;
  display: none;
  padding: 0;
  margin-top: 5px;
  margin-left: -20px;
  background: #8DC63F;
  z-index: 5;
}
.sticky li .ul li {
  display: block;
  width: 100%;
  height: 60px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.sticky li .ul li:hover{
    background: rgba(0, 0, 0, 0.445);
}
.sticky li .ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border-bottom: 2px none #fff;
}
.sticky li .ul li:hover .two {
  display: block;
}
.ul li .two {
  width: 250px;
  height: auto;
  position: absolute;
  display: none;
  padding: 0;
  margin-top: 20px;
  margin-left: 370px;
  background: #8ec63fa9 !important;
}
.ul li .two li:hover {
  background: rgba(0, 0, 0, 0.445);
}
</style>