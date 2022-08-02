<script >
import axios from 'axios'

export default {
  methods: {
    ss() {
      $("body").hide(1000);
    },
      change(event) {
      this[event.target.name] = event.target.value;
      console.log(this[event.target.name]);
    },
add() {
      var option = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        phone_number: this.PhoneNumber,
        card_id: this.CardID,
      };
      console.log(option)
      axios
        .post("http://localhost:3001/api/items/SignUp",option)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
}

  },
};
</script>
<template>
  <div style="position: absolute; top: 142px">
    <div class="container" style="margin-left: 122px">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label for="firstName"><b>firstName</b></label>
      <input
        type="text"
        placeholder="Enter first name"
        name="firstName"
        required
        @input="change"
      />

      <label for="email"><b>lastName</b></label>
      <input
        type="text"
        placeholder="Enter last name"
        name="lastName"
        required
        @input="change"

      />

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required @input="change"/>

      <label for="number"><b>Phone Number</b></label>
      <input
        type="number"
        placeholder="Enter Phone Number"
        name="PhoneNumber"
        required
        @input="change"

      />
      <label for="number"><b>Card ID</b></label>
      <input
        type="number"
        placeholder="Enter Card ID"
        name="CardID"
        required
        @input="change"

      />
      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" required    @input="change"/>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
                @input="change"

      />
      <label>
        <input
          type="checkbox"
          checked="checked"
          name="remember"
          style="margin-bottom: 15px"
        />
        Remember me
      </label>
      <a href="/connexion" onclick="">
        <p>already have a account</p>
      </a>

      <div class="clearfix">
        <button type="button" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn" v-on:click="add()">Sign Up</button>
      </div>
    </div>
  </div>
</template>
<style>
input[type="text"],
input[type="number"],

input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>