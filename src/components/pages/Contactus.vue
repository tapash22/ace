<template>
  <div class="contactus">
    <div class="row">
      <div class="image">
        <img src="../../assets/image/contact.jpg"/>
      </div>
      <div class="col-md-6 ">
        <div class="image">
          <img src="../../assets/image/contact1.png" />
        </div>
      </div>
      <div class="col-md-6 shade">
        <div class="box">
          <h3>Corporate Office</h3>
          <address>
            SEL Huq Skypark,(4th Floor),<br />
            23/2 khizi Road, Block-B,<br />
            Shyamoli, Dhaka-1207
          </address>
        </div>
        <div class="box">
          <h3>Contact with</h3>
          <ul>
            <li>
              <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
              <p>+880258156958</p>
            </li>
            <li>
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              <p>acepharma15@gmail.com</p>
            </li>
          </ul>
          <ul class="link">
            <li>
              <a href="">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
    window.scrollTo(0, 0);
  },
}
</script>

<style scoped>
.contactus {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 150px;
}
.row {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
background-image: linear-gradient(0deg, #fff,rgba(49, 233, 25, 0.856));
}
.row .image{
  width: 100%;
  height:500px;
 padding: 0;
 margin: 0; 
}
.row .image img{
  width: 100%;
  height: 100%;

}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Vollkorn', serif;
  text-align: center;
  text-transform: uppercase;
}
.col-md-6 {
  width: 50%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.col-md-6 .image{
    width: 100%;
    height: 500px;
    padding: 0;
    margin: 0;
    z-index: 1;
}
.col-md-6 .image img{
    width: 100%;
    height: 100%;
}
.col-md-6 .box {
  display: block;
  width: 90%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.box h3 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Vollkorn', serif;
  padding: 5px;
  margin-top: 50px;
  text-align: right;
}
.box address {
  display: flex;
  justify-content: right;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
}
.box ul {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
}
.box ul li {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: right;
}
.box ul li i {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 5px;
  margin: 0;
}
.box ul li p {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  padding: 2px;
  margin: 0;
}
.box .link {
  display: flex;
  justify-content: right;
  padding: 0;
  margin: 10px;
}
.box .link li {
  list-style: none;
  padding: 5px;
  margin-left: 10px;
  width: 50px;
  height: 50px;
  background: #faa61a;
  border-radius: 10px;
  transition: 0.3s all ease-out;
}
.link li a {
  text-decoration: none;
  padding: 0;
  margin: 0;
}
.link li a i {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
}
.link li:hover {
  background: #8dc63f ;
  transition: 0.3s all ease-out;
}
</style>