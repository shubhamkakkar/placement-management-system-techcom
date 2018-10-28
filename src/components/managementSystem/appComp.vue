<template>
  <v-container fluid>
      <v-layout align-center justify-center  row wrap>
          <v-flex sm4 xs12>
            <v-card class="round mt-2">
                <v-card-actions>
                    <v-layout row wrap>
                      <v-layout  style="border-bottom: 1px solid #ccc" class="pa-2" fill-height row wrap>
                        <v-flex xs6 align-center class="text-xs-center"
                        v-for="(loginOption, index) in loginOptions" :key="index">
                            <v-btn href="#signUp-logIn" flat large class="ma-3 white--text"
                            @click="register(index)" color="indigo">
                                {{ loginOption }}
                            </v-btn>
                        </v-flex>
                    </v-layout>  
                    <v-layout row wrap>
                      <v-flex xs12 class="mt-4 primary--text caption text-xs-center">
                          Or enter through :
                        </v-flex>
                        <v-flex xs6 align-center class="text-xs-center"
                        v-for="(socialAuth, index) in socialAutherization" :key="index+2">
                            <v-btn @click="socialRegister(index)" round class="ma-3 white--text" :color="socialAuth_color[index]">
                                {{ socialAuth }}
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    </v-layout>
                </v-card-actions>
            </v-card>
            <signup-login v-if="signUp_logIn" :id="signUp_logIn" />
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import { userMx } from "@/components/mixin/mixin.js"
import SignupLogin from "@/components/managementSystem/signUp_logIn/signUp_logIn.vue";
export default {
  mixins: [ userMx ],
  data() {
    return {
      loginOptions: ["Sign Up", "Login"],
      loginOptions_color: ["red", "blue"],
      socialAutherization: ["Google +", "Facebook"],
      socialAuth_color: ["red", "#4267B2"],
      signUp_logIn: ""
    };
  },
  methods: {
    register(index) {
      if (index == 0) {
        this.signUp_logIn = "Sign Up";
      } else {
        this.signUp_logIn = "Log In";
      }
    },
    socialRegister(index) {
      this.$store.dispatch("socialSignIn", index);
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/dashboard");
      }
    }
  },
  components: {
    SignupLogin
  }
};
</script>

<style scoped>
</style>
