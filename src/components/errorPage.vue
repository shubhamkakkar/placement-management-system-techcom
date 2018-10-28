<template>
    <v-container fluid style="background-color: white; overflowX: hidden">
       <v-layout align-center justify-end fill-height row wrap>
           <v-flex sm4 xs12 class="customMargin_1">
               <div class="headline text-xs-center" style="font-weight: none !important">
                    <p class="headline">Page Not Found</p>
                    <p class="subjeading">Don't worry, We got you</p>
                    <p class="mt-5">
                        <router-link to="/" style="text-decoration: none">
                            <v-btn round color="error">Go to home page</v-btn>
                        </router-link>
                    </p>
               </div>
           </v-flex>
            <v-flex sm8 xs10 class="text-xs-center customMargin">
               <v-img contain height="500" src="https://cdn.dribbble.com/users/111260/screenshots/4929152/hss_dribble_2.png" alt="error"/>
           </v-flex>
       </v-layout>
    </v-container>
</template>

<script>
    export default{
        name: 'errorPage'
    }
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .customMargin {
        left: -30px;
        position: relative; 
    }
}

@media only screen and (min-width: 768px) {
    .customMargin_1 {
        left: 100px;
        position: relative;
    }
}
</style>

