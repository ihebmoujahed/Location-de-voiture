<script >
export default {
  methods: {

     b() {
      window.location.assign ('')
    }
  }
}
</script>

<template>
  <header>
    <div class="top-menu">
      <div class="container">
        <div class="row">
          <div class="left-menu">
            <ul class="top-navbar" style="position: relative; left: 192px;text-decoration: none;">
              <li>
                <a href="/" style="text-decoration: none;">Home</a>
              </li>

              <li>
                <a href="/hello" style="text-decoration: none;">Transfer</a>
              </li>
              <li>
                <a href="http://" style="text-decoration: none;">Lesings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <nav class="navbar" style="position: relative;top:-19px">
          <div style="position: relative; left: 372px">
            <img id="logo" src="../assets/image/logo.png" alt="" />
            <a class="connexion" href="/inscreption" data-toggle="modal" data-target="#exampleModal">CONNEXION</a>
            <form id="app-cover">
              <div id="select-box">
                <input type="checkbox" id="options-view-button" />
                <div id="select-button" class="brd">
                  <div id="selected-value">
                    <span style="color: white">Menu</span>
                  </div>
                  <div id="chevrons">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div id="options">
                  <div class="option">
                    <input class="s-c top" type="radio" name="platform" value="codepen" v-on:click="bb()" />
                    <input class="s-c bottom" type="radio" name="platform" value="codepen" />
                    <span value="http://localhost:3000/Home" class="label">Home</span>
                  </div>
                  <div class="option">
                    <input class="s-c top" type="radio" name="platform" value="dribbble"  />
                    <input class="s-c bottom" type="radio" name="platform" value="dribbble" />
                    <span class="label">Transfert</span>
                  </div>
                  <div class="option">
                    <input class="s-c top" type="radio" name="platform" value="behance" />
                    <input class="s-c bottom" type="radio" name="platform" value="behance" />
                    <span class="label">Locations Longues Durée</span>
                  </div>
                  <div class="option">
                    <input class="s-c top" type="radio" name="platform" value="hackerrank" />
                    <input class="s-c bottom" type="radio" name="platform" value="hackerrank" />
                    <span class="label">Our agencies</span>
                  </div>

                  <div class="option">
                    <input class="s-c top" type="radio" name="platform" value="freecodecamp" />
                    <input class="s-c bottom" type="radio" name="platform" value="freecodecamp" />
                    <span class="label">Service</span>
                    <span class="opt-val">Service</span>
                  </div>
                  <div class="option">
                    <input class="s-c top" type="radio" name="platform" value="freecodecamp" />
                    <input class="s-c bottom" type="radio" name="platform" value="freecodecamp" />
                    <span class="label">Promotions</span>
                    <span class="opt-val">Promotions</span>
                  </div>
                  <div class="option">
                    <input class="s-c top" type="radio" name="platform" value="freecodecamp" />
                  </div>
                  <div id="option-bg"></div>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<style scoped>
a {
  color: #707070;
  padding: 10px 15px 15px;
  display: block;
  font-size: 12px;
  line-height: 13px;
  text-transform: uppercase;
  transition: all 0.5s ease;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.top-menu {
  background-color: white;
  max-height: 50px;
}

.left-menu {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.top-navbar {
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1140px;
}

.navbar {
  background-color: #636363;
  color: #707070;
  padding: 10px 15px 15px;
  display: block;
  font-size: 12px;
  line-height: 13px;
  text-transform: uppercase;
  height: 84px;
}

.navbar-brand {
  max-width: 220;
  width: 100%;
  height: 100%;
  padding: 0;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
  text-align: -webkit-match-parent;
}

a.active {
  border-top: 5px solid red;
}

a:hover {
  color: red;
}

.user {
  color: white;
  height: 22px;
}

.connexion {
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  position: relative;
  left: 522px;
  top: -52px;

  letter-spacing: 0.025px;
  margin-right: 35px;
  padding: 0.025px;
  margin: 0%;
}

.brd {
  border-color: #707070 #707070 #707070 #707070;
}

#info {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  color: #2d3667;
  font-size: 16px;
  text-align: center;
  padding: 14px;
  background-color: #707070;
}

#app-cover {
  position: relative;
  bottom: 179px;
  right: 0;
  left: 0;
  width: 90px;
  height: 42px;
  margin: 100px auto 0 auto;
  z-index: 1;
}

#select-button {
  position: relative;
  height: 16px;
  padding: 12px 14px;
  background-color: #636363;
  border-radius: 4px;
  cursor: pointer;
}

#options-view-button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  background-color: #707070;

}

#selected-value {
  font-size: 16px;
  line-height: 1;
  margin-right: 26px;
}

.option i {
  width: 16px;
  height: 16px;
}

.option,
.label {
  color: #2d3667;
  font-size: 16px;
}

#chevrons {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 12px;
  padding: 9px 14px;
}

#chevrons i {
  display: block;
  height: 50%;
  color: #d1dede;
  font-size: 12px;
  text-align: right;
}

#options-view-button:checked+#select-button #chevrons i {
  color: #2d3667;
}

.options {
  position: relative;
  left: 0;
  width: 250px;
}

#options {
  position: absolute;
  top: 42px;
  right: 0;
  left: 0;

  width: 298px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
}

#options-view-button:checked~#options {
  border: 1px solid #e2eded;
  border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
}

.option {
  position: relative;
  line-height: 1;
  transition: 0.3s ease all;
  z-index: 2;
}

.option i {
  position: absolute;
  left: 14px;
  padding: 0;
  display: none;
}

#options-view-button:checked~#options .option i {
  display: block;
  padding: 12px 0;
}

.label {
  display: none;
  padding: 0;
  margin-left: 27px;
}

#options-view-button:checked~#options .label {
  display: block;
  padding: 12px 14px;
}

.s-c {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
}

.s-c.top {
  top: 0;
}

.s-c.bottom {
  bottom: 0;
}

input[type="radio"] {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 50%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.s-c:hover~i {
  color: #fff;
  opacity: 0;
}

.s-c:hover {
  height: 100%;
  z-index: 1;
}

.s-c.bottom:hover+i {
  bottom: -25px;
  animation: moveup 0.3s ease 0.1s forwards;
}

.s-c.top:hover~i {
  top: -25px;
  animation: movedown 0.3s ease 0.1s forwards;
}

@keyframes moveup {
  0% {
    bottom: -25px;
    opacity: 0;
  }

  100% {
    bottom: 0;
    opacity: 1;
  }
}

@keyframes movedown {
  0% {
    top: -25px;
    opacity: 0;
  }

  100% {
    top: 0;
    opacity: 1;
  }
}

.label {
  transition: 0.3s ease all;
}

.opt-val {
  position: absolute;
  left: 14px;
  width: 217px;
  height: 21px;
  opacity: 0;
  background-color: #fff;
  transform: scale(0);
}

.option input[type="radio"]:checked~.opt-val {
  opacity: 1;
  transform: scale(1);
}

.option input[type="radio"]:checked~i {
  top: 0;
  bottom: auto;
  opacity: 1;
  animation: unset;
}

.option input[type="radio"]:checked~i,
.option input[type="radio"]:checked~.label {
  color: #fff;
}

.option input[type="radio"]:checked~.label:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

#options-view-button:not(:checked)~#options .option input[type="radio"]:checked~.opt-val {
  top: -30px;
}

.option:nth-child(1) input[type="radio"]:checked~.label:before {
  background-color: #000;
  border-radius: 4px 4px 0 0;
}

.option:nth-child(1) input[type="radio"]:checked~.opt-val {
  top: -31px;
}

.option:nth-child(2) input[type="radio"]:checked~.label:before {
  background-color: #ea4c89;
}

.option:nth-child(2) input[type="radio"]:checked~.opt-val {
  top: -71px;
}

.option:nth-child(3) input[type="radio"]:checked~.label:before {
  background-color: #0057ff;
}

.option:nth-child(3) input[type="radio"]:checked~.opt-val {
  top: -111px;
}

.option:nth-child(4) input[type="radio"]:checked~.label:before {
  background-color: #32c766;
}

.option:nth-child(4) input[type="radio"]:checked~.opt-val {
  top: -151px;
}

.option:nth-child(5) input[type="radio"]:checked~.label:before {
  background-color: #f48024;
}

.option:nth-child(5) input[type="radio"]:checked~.opt-val {
  top: -191px;
}

.option:nth-child(6) input[type="radio"]:checked~.label:before {
  background-color: #006400;
  border-radius: 0 0 4px 4px;
}

.option:nth-child(6) input[type="radio"]:checked~.opt-val {
  top: -231px;
}

.option .fa-codepen {
  color: #000;
}

.option .fa-dribbble {
  color: #ea4c89;
}

.option .fa-behance {
  color: #0057ff;
}

.option .fa-hackerrank {
  color: #32c766;
}

.option .fa-stack-overflow {
  color: #f48024;
}

.option .fa-free-code-camp {
  color: #006400;
}

#option-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  transition: 0.3s ease all;
  z-index: 1;
  display: none;
}

#options-view-button:checked~#options #option-bg {
  display: block;
}

.option:hover .label {
  color: #fff;
}

.option:nth-child(1):hover~#option-bg {
  top: 0;
  background-color: #000;
  border-radius: 4px 4px 0 0;
}

.option:nth-child(2):hover~#option-bg {
  top: 40px;
  background-color: #ea4c89;
}

.option:nth-child(3):hover~#option-bg {
  top: 80px;
  background-color: #0057ff;
}

.option:nth-child(4):hover~#option-bg {
  top: 120px;
  background-color: #32c766;
}

.option:nth-child(5):hover~#option-bg {
  top: 160px;
  background-color: #f48024;
}

.option:nth-child(6):hover~#option-bg {
  top: 200px;
  background-color: #006400;
  border-radius: 0 0 4px 4px;
}
</style>s