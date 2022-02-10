<template>
  <div class="about">
    <div class="row">
      <div class="image">
        <img src="../../assets/image/about.jpg" />
      </div>
      <div class="col-md-4">
        <h3>Message</h3>
        <div class="divider div-transparent div-dot"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum
          numquam, quis beatae ipsam nemo aspernatur officiis autem! Officia
          dolores quasi aperiam! Officia, error aliquid. Ducimus pariatur iste
          libero dolores?
        </p>

        <h3>CEO</h3>
        <div class="divider div-transparent div-dot"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum
          numquam, quis beatae ipsam nemo aspernatur officiis autem! Officia
          dolores quasi aperiam! Officia, error aliquid. Ducimus pariatur iste
          libero dolores?
        </p>

        <h3>Destination</h3>
        <div class="divider div-transparent div-dot"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum
          numquam, quis beatae ipsam nemo aspernatur officiis autem! Officia
          dolores quasi aperiam! Officia, error aliquid. Ducimus pariatur iste
          libero dolores?
        </p>
      </div>
      <div class="col-md-8">
        <div class="box">
          <h4>History</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            culpa cumque! Mollitia vel quo nihil suscipit aperiam quasi
            reiciendis. Asperiores nihil harum doloribus voluptates consectetur
            dolore. Non, obcaecati debitis?
          </p>
        </div>
        <div class="box">
          <h4>Mission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            culpa cumque! Mollitia vel quo nihil suscipit aperiam quasi
            reiciendis. Asperiores nihil harum doloribus voluptates consectetur
            dolore. Non, obcaecati debitis?
          </p>
        </div>
        <div class="box">
          <h4>Vission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            culpa cumque! Mollitia vel quo nihil suscipit aperiam quasi
            reiciendis. Asperiores nihil harum doloribus voluptates consectetur
            dolore. Non, obcaecati debitis?
          </p>
        </div>
        <div class="box">
          <h4>Activity</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
            culpa cumque! Mollitia vel quo nihil suscipit aperiam quasi
            reiciendis. Asperiores nihil harum doloribus voluptates consectetur
            dolore. Non, obcaecati debitis?
          </p>
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
};
</script>

<style scoped>
.about {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 150px;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(0deg, #fff, rgba(49, 233, 25, 0.856));
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
  text-align: center;
  font-family: "Vollkorn", serif;
  text-transform: uppercase;
  padding: 5px;
  margin: 5px;
}
h3 {
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  font-family: "Vollkorn", serif;
  text-transform: uppercase;
  padding: 5px;
  margin: 5px;
}
.col-md-4 {
  width: 33%;
  height: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
.col-md-4:hover {
  box-shadow: 0 0 10px #fff;
}
.row .divider {
  position: relative;
  margin: 0;
  height: 1px;
}
.row .div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 30%;
  right: 30%;
  width: 40%;
  height: 2px;
  background-image: linear-gradient(
    to right,
    transparent,
    #faa61a,
    transparent
  );
}
.row .div-dot:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -9px;
  left: calc(50% - 9px);
  width: 18px;
  height: 18px;
  background-color: #8dc63f;
  border: 1px solid #faa61a;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px white, 0 0 0 4px white;
}
.col-md-4 p {
  font-size: 1rem;
  font-weight: 500;
  font-family: "Vollkorn", serif;
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
}
.col-md-8 {
  width: 67%;
  padding: 10px;
  margin-bottom: 10px;
  display: block;
}
.col-md-8 .box {
  width: 98%;
  height: 120px;
  padding: 10px;
  margin: 0;
  cursor: pointer;
}
.col-md-8 .box:hover {
  box-shadow: 0 0 10px #fff;
}
.box h4 {
  width: 30%;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  font-family: "Vollkorn", serif;
  text-transform: uppercase;
  padding: 10px;
  margin: 0;
  /* background: #FAA61A; */
  margin-left: 35%;
  margin-right: 35%;
  margin-bottom: -20px;
  color: #000;
}
.box p {
  width: 100%;
  padding: 15px;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Vollkorn", serif;
  /* border: 5px double #FAA61A; */
  /* box-shadow: 4px 4px 5px #8DC63F; */
}
</style>