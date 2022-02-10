<template>
  <div class="login">
    <div class="row">
      <div class="col-md-8">
        <div class="image">     
        </div>
      </div>
      <div class="col-md-4">
        <div class="box">
          <form action="">
            <h4>Login Form</h4>
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" v-model="email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <div class="my-3">
              <button class="btn btn-primary" @click.prevent="onLogin()">
                Send
              </button>
            </div>
          </form>
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
.login {
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
background-image: linear-gradient(0deg, #fff,rgba(49, 233, 25, 0.856));
}
.col-md-8{
    width: 70%;
    height: 100%;
    padding: 0;
    margin: 0;
}

.col-md-8 .image {
  width: 900px;
  height: 400px;
  padding: 0;
  margin: 0;
  background-image: url('../../assets/image/log.jpg');
  background-position: center;
  background-size: cover;
    box-shadow: 5px 5px 10px greenyellow;
}

.row .col-md-4 {
  width: 30%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.col-md-4 .box {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}

.box form {
  padding: 20px;
  margin-top: 10px;
  width: 100%;
}
form h4 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Vollkorn', serif;
  color: #000;
  text-align: center;
  padding: 5px;
  margin: 5px;
}
.box form label {
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
  padding: 5px;
}
form .form-control {
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgb(68, 0, 255);
}
form .btn{
  width: 100px;
  height: 40px;
  border-radius: 20px;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: 'Vollkorn', serif;
}
</style>