<template>
  <div>
    <header id="header">
      <div class="header-top-container">
        <div class="left-header">
          <router-link to="/">
             <img src="@/assets/images/logo.png" width="100%"/>
          </router-link>
        </div>
        <div class="right-header">
          <a href="#" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <h3 class="email-us">email&nbsp;us.</h3>
        </div>
      </div>
      <div class="header-bot-container">
        <div class="left-header">
          <h2 class="header-title">Interactive - Solar System</h2>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          About
          <span>Interactive Solar System</span>
        </h3>
        <br />

        <p class="footer-company-name">© 2019 Solar Design Ltd.</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>103 - Spangsbjerg Kirkevej,</span>
            Esbjerg, Danmark - 6700
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+45 11 22 33 44</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@solardesign.com">support@solardesign.com</a>
          </p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-about">
          <span>About the company</span>
          <br />
          <br />We offer design and development across Technology, Management,
          Science and Humanities.
        </p>
        <div class="footer-icons">
          <a href="#" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: "Raleway", sans-serif;

  header {
    background-color: black;
    color: white;
    width: 100%;
    flex: 1 100%;
    height: 170px;

    .header-top-container {
      width: 100%;
      background-color: white;
      display: flex;
      height: 120px;

      .left-header {
        display: flex;
        flex-basis: 0;
        justify-content: center;
        flex-grow: 1;

        img {
          z-index: 9999;
          padding-top: 30px;
          width: 130px;
        }

        .header-title-top {
          line-height: 50px;
          font-size: 1.6rem;
          color: black;
          letter-spacing: 2px;
        }
      }

      .right-header {
        display: flex;
        flex-grow: 1;

        a {
          color: black;
          text-decoration: none;
          display: block;

          i {
            margin-left: 5px;
            line-height: 120px;
            position: relative;
            transition: 0.3s ease-in-out 0s;
          }

          i:hover {
            color: #adad00;
            transform: scale(1.6);
          }
        }
      }
    }

    .header-bot-container {
      display: flex;
      width: 100%;
      flex-grow: 1;
      justify-content: center;

      .header-title {
        line-height: 50px;
        font-size: 1.3rem;
        font-weight: 300;
        text-transform: uppercase;
      }
    }
  }
}

.email-us {
  line-height: 120px;
  font-weight: 200;
  font-size: 0.9rem;
  color: black;
  margin-left: 30px;
}

footer {
  position: fixed;
  bottom: 0;
}

.footer-distributed {
  background-color: white;
  width: 100%;
  text-align: left;
  padding: 50px 50px 60px 50px;
  margin-top: -10px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

.footer-distributed .footer-left {
  width: 30%;
}

.footer-distributed h3 {
  color: black;
  margin: 0;
}

.footer-distributed .footer-links {
  color: black;
  margin: 20px 0 12px;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: white;
  color: black;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: black;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #adad00;
  text-decoration: none;
}

.footer-distributed .footer-right {
  width: 30%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #444;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background-color: black;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;
}

a {
  text-decoration: none;
}

@media (max-height: 800px) {
  footer {
    position: static;
  }
}

@media (max-width: 880px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer-distributed .footer-center i {
    margin-left: 0;
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
  }
}
</style>
