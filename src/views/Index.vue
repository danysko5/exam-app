<template>
  <div class="wrap">
    <div class="middle">
       <router-link to="/Sun">
        <img src="../assets/images/sun_ico.png" width="220" />
      </router-link>
      <router-link to="/Mercury">
        <img src="../assets/images/mercury_ico.png" width="60" />
      </router-link>
      <router-link to="/Venus">
        <img src="../assets/images/venus_ico.png" width="100" />
      </router-link>
      <router-link to="/Earth">
        <img src="../assets/images/earth_ico.png" width="140" />
      </router-link>
      <router-link to="/Mars">
        <img src="../assets/images/mars_ico.png" width="80" />
      </router-link>
      <router-link to="/Jupiter">
        <img src="../assets/images/jupiter_ico.png" width="200" />
      </router-link>  
      <router-link to="/Saturn">
        <img src="../assets/images/saturn_ico.png" width="500" />
      </router-link>  
      <router-link to="/Uranus">
        <img src="../assets/images/uranus_ico.png" width="160" />
      </router-link>  
      <router-link to="/Neptune">
        <img src="../assets/images/neptune_ico.png" width="120" />
      </router-link>  

    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
.wrap {
  background-image: url("../assets/images/wallpaper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: fixed;
  display: flex;
  height: 2000px;

  .middle {
    width: 0%;
  }
}

img {
  margin-top: 60px;
  margin-right: 20px;
  z-index: 999;
  position: relative;
  transition: 0.3s ease 0s;
}

a {
  justify-content: center;
  display: flex;
}

img:hover {
  transform: scale(1.2);
}
</style>
