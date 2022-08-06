<script setup>
import Agencie from "../../Agenceis";
</script>

<template>
<img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/297716530_586034502988793_932416833752549329_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=IAV9FKLoRIIAX_xkxCX&_nc_ht=scontent.ftun14-1.fna&oh=03_AVIAuO6IPgBOJMly0ww039QkVyXUujcukYNaxpVteyPx-Q&oe=63140757" alt="" id="center"   class="img-fluid" >
<hr>
    <div class="card-group">
        <div class="card" v-for="elem in Agencie" :key="elem">
            <img class="card-img-top" :src="elem.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ elem.title }}</h5>
                <p class="card-text">{{ elem.name }}</p>
                <a :href="elem.loca" target="_blank"
                    style="text-decoration: underline;position: initial;color:#212529;"><span class="card-location">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/2048px-Google_Maps_icon_%282015-2020%29.svg.png" style="    width: 50px;" alt="map">
                        Localisation GPS </span>
                </a>
            </div>
        </div>
    </div>
</template>
<style>
#center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>