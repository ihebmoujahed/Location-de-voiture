<script setup>
import Offer from "../Offer.js"
const iheb = () => {
  console.log(Promo)
}
</script>

<template>
  <html>

  <body>
    <div>


      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"
       >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>

        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://avantgarde.tn/static/upload/2d0cbdc20c6213eb727f35bfb7e962cd.jpeg" class="d-block w-100"
              alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://avantgarde.tn/static/upload/54c0d8b40c4d80f10be8e2665b06d898.jpeg" class="d-block w-100"
              alt="..." />
          </div>n

        </div>
       
      </div>

      <h2 style="text-align:center;">OUR PROMOTIONS</h2>
      <p style="text-align:center;font-weight:bold;font-size:18px;color: #800000 !important;margin-top:52px">CAR RENTAL
        IN
        TUNISIA</p>
      <div class="card-group">
        <div class="card">
          <img src="https://avantgarde.tn/static/upload/471a854cd067bdc9c9d860125c3d830e.png" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">Rental Car Promotion</h5>
            <p class="card-text">Special promotion: One week: 374,500 DT One month: 1350.00 DT.</p>
            <a href="/Promotions" class="btn btn-primary">More</a>

          </div>
        </div>
        <div class="card">
          <img src="https://avantgarde.tn/static/upload/97076f0ea4d39ea07f453c298444256d.png" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">Special Offer !!</h5>
            <p class="card-text">Special promotion: The week: 357.00 DTThe month: 1275.00 DT.</p>
            <a href="/Promotions" class="btn btn-primary">More</a>

          </div>
        </div>
        <div class="card">
          <img src="https://avantgarde.tn/static/upload/69eab4b802c786db885ea3d8017d8850.jpg" class="card-img-top"
            alt="...">
          <div class="card-body">
            <h5 class="card-title">Best Car Rental Deal</h5>
            <p class="card-text">Much more than a car at with unbeatable price! One week rental: 654,50 DT One Month
              Rental: 1675.50 DT Promo valid From 20/01/2019 to 10/02/2019 Best Car Rental Offer In Tunisia.</p>
            <a href="/Promotions" class="btn btn-primary">More</a>

          </div>
        </div>
      </div>

      <section id="sec3" class="bg-gray">
        <div class="container">
          <div>
            <div>
              <h2 style="font-size:29px">CAR RENTAL IN TUNISIA</h2>
              <p style="text-align:justify;">Tunisia has always been the destination of thousands of tourists from all
                over the world to spend their holidays there and they are not wrong. Tunisia seduces, bewitches and
                bewitches. Beaches like you rarely see. Crystal clear seas resembling gigantic swimming pools where you
                can clearly see the small fish swimming between the feet of swimmers. A sun warming the bodies and the
                hearts to which people abandon themselves during their sunbathing sessions.
                Tunisia is not limited to white sand beaches. It has a whole cultural and historical heritage to its
                credit: Punic ports, archaeological sites and marinas and more. So many things to see located in the
                four
                corners of the country. This is why the rental car is the best way to move quickly and do the maximum
                number of sites in the country of the sun.</p>
              <h2 style="font-size:29px;color:#800000">Rent a vehicle in Tunisia</h2>
              <p style="text-align:justify">A dream vacation. Without the constraint of transport. This is what our car
                rental agency offers you. With a large fleet of all kinds of rental vehicles: premium, city, utility and
                luxury cars, Avantgarde manages to satisfy the most demanding customers. We attach the greatest
                importance
                to delivery times and the condition of our rental cars. We always take care of their good maintenance.
                This is what makes Avantgarde strong. You can have your car rental quote and book your vehicle online.
                We
                take care of planning everything and delivering your vehicle to you. Or, if you prefer, you can contact
                our agency located within Tunis Carthage airport and rent the vehicle you want on site.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>

  </html>

</template>

<style scoped>
.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}

.nav-tabs {
  text-align: center;
  border-bottom: none;
  text-decoration: none;
}

.nav-tabs .nav-item.active {
  border-bottom: 2px solid #800000 !important;
}

#nav-tab-2 {
  display: inline-block;
  border: none;
  border-bottom: 2px solid transparent !important;
  padding: 7px 0;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000000;
  margin-left: 22px;
}

.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  position: relative;
  left: 152px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;

  }

}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  height: 493px;
}

.bg-gray {
  background-color: #e6e6e6;
  text-align: center;
}

.button-40 {
  background-color: #800000;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .75rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 123px;
  margin-left: 272px;
}

.button-40:hover {
  background-color: #513b37;
}

.button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .button-40 {
    padding: .75rem 1.5rem;
  }
}

.button-87 {
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #800000;
  background-image: linear-gradient(45deg, #800000 0%, #800000 51%, #FF512F 100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 10%;
  position: relative;
  left: 1302px;
  bottom: 122px;
}

.button-87:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-87:active {
  transform: scale(0.95);
}
</style>
