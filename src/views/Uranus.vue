<template>
  <div class="wrap">
    <main>
      <div class="wrapper">
        <section class="planet-info" id="planet-info">
          <div class="info-wrap">
            <div class="info-top">
              <h2>Uranus</h2>
              <h3>
                Astronomical symbol
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Uranus_symbol.svg/25px-Uranus_symbol.svg.png"
                  alt
                />
              </h3>
              <br />
            </div>
            <div class="info-bot">
              <h3 class="ff">fast facts</h3>
              <br />
              <ul>
                <li>
                  <b>Age of Uranus:</b> 4.503 billion years
                </li>
                <li>
                  <b>Radius:</b> 25,362 km
                </li>
                <li>
                  <b>Surface Temperature:</b> −197.2 °C
                </li>
              </ul>
              <br />
              <div class="description">
                <h3 class="ff">fun facts</h3>
                <br />
                <p>Uranus has 13 presently known rings.</p>
                <p>Uranus is the coldest planet in the solar system. </p>
                <p>Uranus is often referred to as the “ice giant”.</p>
                <p>It takes Uranus 84 Earth days to orbit the Sun.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
main {
  width: 100%;
  height: 600px;

  .wrapper {
    display: flex;
    flex: 1 100%;
    background-image: url("../assets/images/uranus_bg.jpg");
      background-size: cover;

    .planet-info {
      display: flex;
      flex-grow: 1;
      flex-basis: 0;
      height: 600px;
      
      color: white;

      .info-wrap {
        display: block;
        width: 100%;
        justify-content: center;
        margin-left: 80px;
        margin-top: 50px;

        .info-top {
          h2 {
            font-size: 3.6rem;
            animation: 2.1s ease-out 0s 1 slideInFromLeft;
          }

          h3 {
            font-weight: 200;
            font-size: 1.3rem;
            animation: 2.1s ease-out 0s 1 slideInFromLeft;

            img {
              background-color: white;
              margin-left: 10px;
            }
          }
        }
      }
    }

    .info-bot {
      .ff {
        margin-top: 10px;
        text-transform: uppercase;
        font-size: 1.6rem;
        text-shadow: 0 0 10px black;
        animation: 3s ease-out 0s 1 slideInFromLeft;
      }

      ul {
        list-style: none;
        animation: 3s ease-out 0s 1 slideInFromLeft;

        li {
          font-size: 1.2rem;
          text-shadow: 0 0 10px black;
         animation: 3s ease-out 0s 1 slideInFromLeft;
        }
      }

      p {
        font-size: 1.2rem;
        text-shadow: 0 0 10px black;
        animation: 3s ease-out 0s 1 slideInFromLeft;
      }
    }
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@media screen and (max-width: 700px) {
  body {
    .left-header {
      img {
        width: 90px;
        margin-left: 20px;
      }
    }
    .right-header {
      margin-left: 50px;
      padding: 2px;
      a {
        margin-left: -20px;
      }
    }
    .email-us {
      margin-left: -20px;
    }
    .planet-info {
      margin-left: -30px;
    }
  }
}
</style>