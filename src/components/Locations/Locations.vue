<script >
import Promo from '../../promo';
import axios from 'axios';
export default {
  data(){
    return {
      Data:[],
      id_loca:[]
    }
  },
  mounted(){
    axios.get("http://localhost:3001/api/items/select_Loca_car").then((response)=>{
      this.Data = response.data
      console.log(this.Data)
    })
  },
  methods: {
    reserv_car(id) {
      axios.get(`http://localhost:3001/api/items/select_idloca/${id}`).then((response)=>{
      this.id_loca = response.data
      console.log(this.id_loca)
      localStorage.setItem("car", JSON.stringify(this.id_loca));
    })
    
    location.replace("/Book/car")
    }
  }
}
</script>
<template>
    <html>
        <body>
            
    <div>
        <div>

            <div style="position: relative;top:-22px;">
                <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/296429376_1105980373609415_3341798052715055884_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=AKg0E5P1aQEAX_cNSvO&tn=aJkvatisXwnSMyRh&_nc_ht=scontent.ftun14-1.fna&oh=03_AVKqj0zLOopGsjlMRbZuMTPfiQTDMe4BIo8rRKIO6jm0vQ&oe=630BA32E"
                      alt="" style="margin-top:-42px;">
            </div>
           <div class="container">
  <main class="grid">
    <article v-for="elem in this.Data" :key="elem">
      <img :src="elem.image_location" alt="Sample photo">
      <div class="text">
        <h3>{{elem.name_car}}</h3>
        <p>{{elem.describe_car}}.</p>
        <p>{{elem.price_1}}</p>
        <p>{{elem.price_2}}</p>
        <p>{{elem.price_3}}</p>
        <button @click="reserv_car(elem.id_location)" class="btn btn-primary btn-block">Reserve</button>
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