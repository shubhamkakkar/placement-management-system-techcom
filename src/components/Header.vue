<template>
  <v-container fluid>
     <v-card class="padding-20 round pt-4">
       <v-layout row wrap>
        <v-flex xs12>
          <v-card 
          id="gradient-card" 
          class="round white--text">
            <v-card-title primary-title class="text-xs-center">
              <div class="m-a letterSpacing_2 text-transform-uppercase">{{ heading }}</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <!-- <v-flex xs12 class="text-xs-center mt-4 pt-2">
            <p v-html="details" class="headline"/>
        </v-flex> -->
     </v-layout>
     <v-layout row wrap style="margin-top: 5%;">
       <v-img
        class="m-a"
        src="https://cdn.dribbble.com/users/1201838/screenshots/3710372/job_interview.jpg"
        height="400"
        contain
        style=" margin-top: -20px;"/>
     </v-layout>
         <div id="small" class="text-center m-a text-xs-center" style="top: -50px; position: relative;">
            <v-btn color="indigo" dark fab href="#signUp-logIn_dialog">
              <v-icon dark>keyboard_arrow_down</v-icon>
            </v-btn>
         </div>
    </v-card>
     <management-system id="signUp-logIn_dialog" />
      <v-btn id="large"  style="bottom: 20px; right: 40px; position: fixed"
             class="mt-2 mb-2"
            round color="error" href="#signUp-logIn_dialog">Sign Up / Log In</v-btn>
  </v-container>
</template>

<script>
import managementSystem from "@/components/managementSystem/appComp";
export default {
  name: "Header",
  data() {
    return {
      display: true,
      institution: "MAIT",
      heading: "Welcome To The Placement Management System",
      details: `
      <p>
        Welcome all
      </p>
      You are required to fill in the details through which you will be categorised per your input fields`
    };
  },
  components: {
    managementSystem
  }
};
</script>

<style scoped>
.letterSpacing_2 {
  letter-spacing: 2px;
}

@media only screen and (max-width: 600px) {
  #btn, #large {
    display: none;
  }
}

@media only screen and (min-width : 600px){
    #small{
        display: none;
    }
}
</style>
