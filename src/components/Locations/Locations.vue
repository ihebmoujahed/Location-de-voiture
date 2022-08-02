<script setup>
import Promo from '../../promo';
</script>
<template>
    <html>
        <body>
            
    <div>
        <div>

            <div>
                <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/296429376_1105980373609415_3341798052715055884_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=AKg0E5P1aQEAX_cNSvO&tn=aJkvatisXwnSMyRh&_nc_ht=scontent.ftun14-1.fna&oh=03_AVKqj0zLOopGsjlMRbZuMTPfiQTDMe4BIo8rRKIO6jm0vQ&oe=630BA32E"
                    alt="">
            </div>
           <div class="container">
  <main class="grid">
    <article v-for="elem in Promo" :key="elem">
      <img :src="elem.image" alt="Sample photo">
      <div class="text">
        <h3>{{elem.title}}</h3>
        <p>{{elem.text}}.</p>
        <p>{{elem.prix1}}.</p>
        <p>{{elem.prix2}}.</p>
        <p>{{elem.prix3}}.</p>
        <a href="https://codepen.io/collection/XdWJOQ/" class="btn btn-primary btn-block">Plus</a>
      </div>
    </article>
    
  </main>
</div>


        </div>
    </div>
        </body>

    </html>
</template>
<style>
body {
  padding: 40px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}

.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.grid > article img {
  max-width: 100%;
}

.grid .text {
  padding: 20px;
}
</style>