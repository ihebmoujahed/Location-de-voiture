<template>
    
    <div class="container">
        <form @submit.prevent="sendEmail" v-for="elem in this.Data" :key="elem">
            <label>Name Car</label>
            <input type="text" v-model="name_car" name="car" placeholder="Name car"  >
            <label> Car</label>
            <img :src="elem.image_location" alt="Sample photo">
            <hr>
            <label>Price</label>
            <select class="form-select" aria-label="Default select example"  v-model="PRICE" name="prix" placeholder="Price">
                <option >{{ elem.price_1 }}</option>
                <option >{{ elem.price_2 }}</option>
                <option >{{ elem.price_3 }}</option>
            </select>

            <label>Name</label>
            <input type="text" v-model="name" name="name" placeholder="Your Name">
            <label>Email</label>
            <input type="email" v-model="email" name="email" placeholder="Your Email">
            <label>National Identity Card</label>
            <input name="cart_id" type="number" v-model="cart_id" placeholder="Your Id">
            <label>Your Numero</label>
            <input name="number" type="number" v-model="number" placeholder="number">

            <input type="submit" value="Send">
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    name: 'ContactUs',

    data() {
        return {
            name_car: "",
            cart_id: "",
            Data: [],
            name: '',
            email: '',
            number: '',
            PRICE: ""
        }
    },
    mounted() {
        var pr = ''
        var name = ""
        const items = (localStorage.getItem("car"))
        if (items) {
            var s = JSON.parse(items);
            console.log(s);
            pr = s[0].price_3
            this.PRICE = pr
            name = s[0].name_car
            this.name_car = name
            this.Data = s;
        }
    },
    methods: {
        sendEmail(e) {
            var em = {
                prix: this.PRICE,
                car: this.name_car,
                name: this.name,
                email: this.email,
                number: this.number,
                cart_id: this.cart_id
            }  
            try {
                emailjs.sendForm('ihebmoujahed', 'template_4n1za82', e.target, 'Rx72Cgmpnvk8w0xkR', em)
                location.replace("http://localhost:3000/professionnels/location-voiture-longue-duree-tunisie")
            } catch (result) {
                console.log(result)
            }
            // Reset form field
            this.prix = ''
            this.name_car = ''
            this.image = ''
            this.name = ''
            this.email = ''
            this.number = ''
            this.cart_id = ''
        },
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

label {
    float: left;
}

input[type=text],
[type=email],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #b8c7b9;
}

.container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    background-color: #f2f2f200;
    padding: 20px;
    width: 50%;
}
</style>
