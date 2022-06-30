<script setup>
</script>

<template>
 <div>
      <div style="margin-top: 90px">
        <a href="/Home" class="nav-item nav-link active show" id="nav-tab-1" data-toggle="tab" style="color:#800000; position:relative;left:822px;    font-family: Arial, sans-serif;
">RENT A CAR</a>
        <a href="http://" class="nav-item nav-link active show" id="nav-tab-2" data-toggle="tab" style="position:relative;left:940px;bottom: 39px;    font-family: Arial, sans-serif;
">RESERVED A TRANSFER</a>
     </div>
     <div style="position:relative;bottom:132px">
     <div class="start" style="position: relative;top:122px;left:222px">
        <p style="font-family: Arial, sans-serif;font-weight:bold">START AND RETURN</p>
        <select style="width: 30%; height:52px">
            <option>TUNIS CARTHAGE AIREPORT</option>
            <option>EL MANAR</option>
            <option>Port La Goulette</option>
            <option>Monastir aireport</option>
            <option>Aéreport d'Enfidha</option>
            <option>The Aireport of Djerba</option>
        </select>
     </div>
     <div class="date" style="position: relative;top:29px;left:796px">
        <p style="font-family: Arial, sans-serif;font-weight:bold">START OF RENT</p>
        <input type="date" name="" style="width: 6%; height:50px"/> 
        <select style="height:52px;width:62px">
  <option value="0">01</option>
  <option value="1">02</option>
  <option value="2">03</option>
  <option value="3">04</option>
  <option value="4">05</option>
  <option value="5">06</option>
  <option value="6">07</option>
  <option value="7">08</option>
  <option value="8">09</option>
  <option value="9">10</option>
  <option value="10">11</option>
  <option value="11">12</option>
  <option value="12">13</option>
  <option value="13">14</option>
  <option value="14">15</option>
  <option value="15">16</option>
  <option value="16">17</option>
  <option value="17">18</option>
  <option value="18">19</option>
  <option value="19">20</option>
  <option value="20">21</option>
  <option value="21">22</option>
  <option value="22">23</option>
</select>
<select style="height:52px;width:62px">
    <option>00</option>
    <option>10</option>
    <option>20</option>
    <option>30</option>
    <option>40</option>
    <option>50</option>
</select>
     </div>
<div class="date2" style="position: relative;top:-64px;left:1050px">
        <p style="font-family: Arial, sans-serif;font-weight:bold">END OF RENT</p>
        <input type="date" name="" style="width: 6%; height:50px"/> 
        <select style="height:52px;width:62px">
  <option value="0">01</option>
  <option value="1">02</option>
  <option value="2">03</option>
  <option value="3">04</option>
  <option value="4">05</option>
  <option value="5">06</option>
  <option value="6">07</option>
  <option value="7">08</option>
  <option value="8">09</option>
  <option value="9">10</option>
  <option value="10">11</option>
  <option value="11">12</option>
  <option value="12">13</option>
  <option value="13">14</option>
  <option value="14">15</option>
  <option value="15">16</option>
  <option value="16">17</option>
  <option value="17">18</option>
  <option value="18">19</option>
  <option value="19">20</option>
  <option value="20">21</option>
  <option value="21">22</option>
  <option value="22">23</option>
</select>
<select style="height:52px ;width:62px">
    <option>00</option>
    <option>10</option>
    <option>20</option>
    <option>30</option>
    <option>40</option>
    <option>50</option>
</select>
</div>
</div>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style="position:relative;bottom:162px">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
           
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://avantgarde.tn/static/upload/2d0cbdc20c6213eb727f35bfb7e962cd.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://avantgarde.tn/static/upload/54c0d8b40c4d80f10be8e2665b06d898.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            
          </div>
          </div>
          
 </div>
</template>

<style scoped>
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
</style>
