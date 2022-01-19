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
          <li><router-link to="/partner">Partners</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
      <div class="col-md-4 product">
        <h3>We provide</h3>
        <div class="image">
          <img src="../assets/image/footer1.jpg" />
        </div>
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
            <button class="btn btn-primary" @click.prevent="sendMessage()">
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
  background: #fff;
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
   background: rgb(255, 68, 0);
   z-index: 1;
   border-radius: 5px;
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
  color: #fff;
}
li i {
  font-size: 1.8rem;
  font-weight: 700;
  padding: 5px;
  margin: 0;
  color: #fff;
  z-index: 2;
}
.quick {
  padding: 10px;
  margin-top: -30px;
  background: #8dc63f;
  width: 20%;
  box-shadow: 2px 2px 5px #8dc63f;
}
.product {
  padding: 10px;
  margin-top: -30px;
  background: #8ec63fb0;
  width: 40%;
  box-shadow: 2px 2px 5px #8ec63fcb;
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
  background: #8ec63f7c;
  width: 40%;
  box-shadow: 2px 2px 5px #8ec63f9a;
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
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Vollkorn', serif;
  padding: 5px;
  margin: 0;
}
.row2 {
  background: #000;
  display: flex;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.row2 p {
  font-size: 0.8rem;
  font-weight: 400;
  color: orange;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}
</style>