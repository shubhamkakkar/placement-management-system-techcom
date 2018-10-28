<template>
  <v-app>
    <Logout />
    <router-view/>
    <v-Footer/>
  </v-app>
</template>

<script>
import "@/style.css";
import vFooter from "@/components/Footer.vue";
import ManagementSystem from "@/components/managementSystem/appComp.vue";
import Logout from './components/managementSystem/Logout'

export default {
  name: "App",
  components: {
    vFooter,
    Logout,
    ManagementSystem
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  },
};
</script>
