<script setup>
import Loaction from "../../locations"
</script>
<template>
  <html>

  <body>

    <div>
      <div>

        <div style="margin-top:122px;text-align: center; display: inline;">
          <h1>Our car hire deals in Tunisia</h1>
        </div>
        <div class="container" style="margin-top:72px ;">
          <main class="grid">
            <article v-for="elem in Loaction" :key="elem">
              <img :src="elem.image" alt="Sample photo">
              <div class="text">
                <h3>{{ elem.title }}</h3>
                <p>{{ elem.text }}</p>

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

.grid>article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.grid>article img {
  max-width: 100%;
}

.grid .text {
  padding: 20px;
}
</style>