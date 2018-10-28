<template>
    <v-container id="signUp-logIn">
         <v-layout row wrap align-center justify-center >
           <v-card class="w-100 pa-3 round">
               <v-flex xs12>
                 <v-layout row wrap 
                     v-if="id !== 'Sign Up'">
                     <div class="subheading m-a indigo--text" style="font-weight: 500; text-transform: capitalize">
                       good to see you again!
                     </div>
                   </v-layout>
                   <v-layout row wrap 
                     v-if="id === 'Sign Up'">
                     <div class="subheading m-a indigo--text" style="font-weight: 500; text-transform: capitalize">
                       Great to have you!
                     </div>
                   </v-layout>
                 <v-form>
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      />
                      <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                      />
                      <v-text-field
                        v-if="id === 'Sign Up' "
                        v-model="confirm_password"
                        :rules="[comparePaswods]"
                        label="Confirm Password"
                        type="password"
                        required
                      />
                 </v-form>
               </v-flex>
               <v-card-actions>
                   <v-flex class="text-xs-center">
                       <v-btn flat :disabled="btnDisable" @click="register" class="blue--text">
                         {{ id }}
                       </v-btn>
                   </v-flex>
               </v-card-actions>
           </v-card>
         </v-layout>
         <v-alert
        :value="true"
        type="error"
        v-if="alert.message"
        >
        {{alert.message}}
        </v-alert>
    </v-container>
</template>

<script>
import { alertMx } from '@/components/mixin/mixin.js'
import { userMx } from "@/components/mixin/mixin.js"
export default {
  props: ["id"],
  mixins: [alertMx, userMx],
  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be greater than 6 characters"
      ],
      confirm_password: ""
    };
  },
  computed: {
    comparePaswods() {
      return this.password != this.confirm_password
        ? " Passwords don't match "
        : "";
    },
    btnDisable() {
      if (this.id === "Log In") {
        if (!this.email.includes("@") || this.password.length < 6) {
          return true;
        } else {
          return false;
        }
      } else {
        if (!this.email.includes("@") || this.password.length < 6) {
          return true;
        } else if (
          this.email.includes("@") &&
          this.password.length >= 6 &&
          this.password === this.confirm_password
        ) {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  watch: {
      user(value){
          if(value !== null && value !== undefined){
              this.$router.push('/dashboard')
          }
      }
  },
  methods: {
    register() {
      if (this.id === "Sign Up") {
        this.$store.dispatch("signUpUser", {
          email: this.email,
          password: this.password
        });
      }
      if (this.id === "Log In") {
        this.$store.dispatch("logInUser", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}
</style>
