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
        .post("http://localhost:3001/api/items/SignUp", option)
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
  <section>
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                  <form class="mx-1 mx-md-4">

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control" name="firstName" @input="change" />
                        <label class="form-label" for="form3Example1c">FirstName</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control" name="lastName" @input="change" />
                        <label class="form-label" for="form3Example1c">LastName</label>
                      </div>
                    </div>


                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control" name="email" @input="change" />
                        <label class="form-label" for="form3Example3c">Your Email</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-phone me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="number" id="form3Example3c" class="form-control" name="PhoneNumber"
                          @input="change" />
                        <label class="form-label" for="form3Example3c">PhoneNumber</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-id-card me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="number" id="form3Example3c" class="form-control" name="CardID" @input="change" />
                        <label class="form-label" for="form3Example3c">Card Id</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" class="form-control" @input="change"
                          name="password" />
                        <label class="form-label" for="form3Example4c">Password</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" class="form-control" @input="change"
                          name="password" />
                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" v-on:click="add()">Register</button>
                    </div>

                  </form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img
                    src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.15752-9/297509517_778902546571064_7627047616391354112_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-Xwso-JMFK8AX_wYsuL&_nc_ht=scontent.ftun16-1.fna&oh=03_AVL136EIIfBvzgiP2dE3xYKSR1IKVLEhtALhnHsr0N439A&oe=63149F44"
                    class="img-fluid" alt="Sample image">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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