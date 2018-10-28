<template>
    <v-container fluid>

        <v-layout align-center justify-center row wrap>
              <v-flex sm3 xs8>
                 <v-card class="lowerRound">
                     <v-card-title>
                       <div class="pa-1 subheading indigo--text text-xs-center m-a pa-3">
                           <div>
                               Welcome
                           </div>
                           <div class="mt-2 text-transform-uppercase">
                            {{ user.name }}
                           </div>   
                       </div>
                     </v-card-title>
                 </v-card>
              </v-flex>
        </v-layout>
        <v-layout row wrap class="ma-4">
            <v-flex xs12>
                <v-card class="pa-3 round">
                    <v-card-title>
                        <h3 style="font-weight: normal">
                           You are requested to fill in the following information: 
                        </h3>
                    </v-card-title>
                    <input-form/>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import inputForm from "@/components/managementSystem/AuthenticatedUser/inputForm.vue"
import { userMx } from '@/components/mixin/mixin.js'
import Logout from '@/components/managementSystem/Logout'

export default {
    name: 'dashboard',
    mixins: [userMx],
    components: {
        inputForm,
        Logout
    },
    mounted(){
        if(this.$store.state.user.id !== null){
               return;
        }else{
            this.$router.push("/404")
        }
    },
    data(){
        return{
            validateCmp: false
        }
    }
}
</script>

<style scoped>
.lowerRound{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    height: 120px !important;
}
</style>
