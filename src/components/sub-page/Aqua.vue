<template>
  <div class="aqua">
    <div class="row">
      <h2>Aqua</h2>
      <div class="col-md-12">
          <p>Aqua product are added soon</p>
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
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Gideon+Roman&family=Lato:wght@100&family=Lobster&family=Luxurious+Roman&family=Oswald:wght@400;500&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100;500&family=Romanesco&family=Vollkorn:wght@500&display=swap');

.aqua {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 170px;
}
.row {
  width: 100%;
  padding: 10px;
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 20px;
  display: flex;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Vollkorn', serif;
  text-align: center;
  text-transform: uppercase;
}
.col-md-12{
    width: 100%;
    height: 50px;
    padding: 10px;
    margin: 0;
    background: #faa61a;
    box-shadow: 5px 5px 5px #8DC63F;
}
.col-md-12 p{
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Vollkorn", serif;
    text-align: center;
    padding: 0;
    margin: 0;
}
</style>