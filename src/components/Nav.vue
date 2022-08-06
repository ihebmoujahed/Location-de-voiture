<script setup>
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    });
});
</script>

<template>
  <header>
        <nav>
        <ul class="menu">
            <li class="logo"><img src="https://avantgarde.tn/static/assets/images/logo-footer.png" alt=""></li>
            <li class="item"><a href="#">Home</a></li>
            <li class="item"><a href="#">About</a></li>
            <li class="item"><a href="#">Services</a></li>
            <li class="item button"><a href="/connexion">Log In</a></li>
            <li class="item button secondary"><a href="/inscreption">Sign Up</a></li>
            <li class="toggle"><span class="bars"></span></li>
              <a  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Menu
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/">Home</a>
                <a class="dropdown-item" href="">Transfert</a>
                <a class="dropdown-item" href="/professionnels/location-voiture-longue-duree-tunisie">Locations Longues Durée</a>
                <a class="dropdown-item" href="/nos-agences">Our agencies</a>
                <a class="dropdown-item" href="#">Service</a>
                <a class="dropdown-item" href="/Promotions">Promotions</a>
              </ul>
        </ul>

    </nav>
  </header>
</template>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
}
nav {
  background: #222;
  padding: 5px 20px;
}
ul {
  list-style-type: none;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.logo a:hover {
  text-decoration: none;
}
.menu li {
  font-size: 16px;
  padding: 15px 5px;
  white-space: nowrap;
}
.logo a,
.toggle a {
  font-size: 20px;
}
.button.secondary {
  border-bottom: 1px #444 solid;
}

/* Mobile menu */
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.toggle {
  order: 1;
}
.item.button {
  order: 2;
}
.item {
  width: 100%;
  text-align: center;
  order: 3;
  display: none;
}
.item.active {
  display: block;
}

/* Navbar Toggle */
.toggle {
  cursor:pointer;
}
.bars {
  background: #999;
  display: inline-block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}
.bars:before,
.bars:after {
  background: #999;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}
.bars:before {
  top: 5px;
}
.bars:after {
  top: -5px;
}

/* Tablet menu */
@media all and (min-width: 468px) {
  .menu {
      justify-content: center;
  }

  .logo {
      flex: 1;
  }

  .item.button {
      width: auto;
      order: 1;
      display: block;
  }
  .toggle {
      order: 2;
  }
  .button.secondary {
      border: 0;
  }
  .button a {
      padding: 7.5px 15px;
      background: teal;
      border: 1px #006d6d solid;
      border-radius:50em;
  }
  .button.secondary a {
      background: transparent;    
  }
  .button a:hover {
      text-decoration: none;
      transition:all .25s;
  }
  .button:not(.secondary) a:hover {
      background: #006d6d;
      border-color: #005959;
  }
  .button.secondary a:hover {
      color: #ddd;
  } 
}

/* Desktop menu */
@media all and (min-width: 768px) {
  .item {
      display: block;
      width: auto;
  }
  .toggle {
      display: none;
  }
  .logo {
      order: 0;
  }
  .item {
      order: 1;
  }
  .button {
      order: 2;
  }
  .menu li {
      padding: 15px 10px;
  }
  .menu li.button {
      padding-right: 0;
  }
}

</style>