<template>
  <div class="footer">
    <div class="row">
      <div class="col-md-12 toto">
        <ul>
          <li>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <p>acepharma15@gmail.com</p>
          </li>
          <li>
            <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
            <p>+880258156958</p>
          </li>
        </ul>
      </div>
      <div class="col-md-4 quick">
        <h3>Quick Link</h3>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/partners">Partners</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
      <div class="col-md-4 product">
        <h3>We provide</h3>
        <router-link to="/products">
        <div class="image">
          <img src="../assets/image/p.png" />
        </div>
        </router-link>
      </div>
      <div class="col-md-4 contact">
        <h3>Contact Form</h3>
        <form>
          <div class="form-group my-2">
            <input
              type="text"
              placeholder=" Enter your Name"
              class="form-control"
            />
          </div>
          <div class="form-group my-2">
            <input
              type="text"
              placeholder=" Enter your Email"
              class="form-control"
            />
          </div>
          <div class="form-group my-2">
            <textarea
              class="form-control"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div class="my-3">
            <button class="btn" @click.prevent="sendMessage()">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row2">
      <p>All right reserved in &copy; ULTRAWAVE.DIGITAL</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap');

.footer {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #F7F0F5;
}
.row {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row .toto {
  padding: 0;
  margin-top: -10px;
  display: flex;
  justify-content: center;
}
.toto ul {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  width: 600px;
  height: 60px;
   background: #F9A51A;
   z-index: 1;
   border-radius: 5px;
   box-shadow: 0 0 20px #F9A51A;
}
ul li {
  padding: 5px;
  margin: 5px;
  list-style: none;
  display: flex;
}
ul li p {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  padding: 5px;
  color: #F7F0F5;
}
li i {
  font-size: 1.8rem;
  font-weight: 700;
  padding: 5px;
  margin: 0;
  color: #F7F0F5;
  z-index: 2;
}
.quick {
  padding: 10px;
  margin-top: -30px;
  background: #81C747;
  width: 20%;
  box-shadow: 2px 2px 5px #F9A51A;
}
.product {
  padding: 10px;
  margin-top: -30px;
  background: #81C747;
  width: 40%;
  box-shadow: 2px 2px 5px #F9A51A;
}
.product .image {
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
.product .image img {
  width: 480px;
  height: 200px;
}
.contact {
  padding: 10px;
  margin-top: -30px;
  background: #81C747;
  width: 40%;
  box-shadow: 2px 2px 5px #F9A51A;
}
.col-md-4 h3 {
  /* margin-top: 20px; */
  padding-top: 30px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Vollkorn', serif;
}
.quick ul {
  padding: 10px;
  margin: 0;
}
.quick ul li {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.quick ul li a {
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Vollkorn', serif;
  padding: 5px;
  margin: 0;
}
.contact form .btn{
  width: 60px;
  height: 30px;
  padding: 0;
  margin: 0;
  color: #221E1F;
  background: #F7F0F5;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Vollkorn', serif;
}
.row2 {
  background: #F7F0F5;
  box-shadow: 2px 2px 4px #fff;
  display: flex;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row2 p {
  font-size: 0.8rem;
  font-weight: 400;
  color: #000;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}
</style>