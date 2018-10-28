<template>
   <v-container fluid>
    <toggle-card  @toggleCurrentCardText="toggleCurrentCard" btnValue="Complex Task Information"/>
    <v-card-text v-if="display">
        <v-container fluid>
           <v-layout row wrap align-center justify-center fill-height 
          v-for="(ref, index) in complexTask" :key="index">
            <v-flex xs12>
            <div class="primary--text body-2">
                Complex Task
              </div>   
            </v-flex>
            <v-flex xs12>
                <v-card class="mt-3 mb-3 elevation-2">
                    <v-card-text>
                        {{ ref.complex_task }}
                    </v-card-text>
                </v-card>              
            </v-flex>
              <v-layout row justify-end class="mt-2">
                  <v-btn @click="passIndex(index, 'Complex Task')" class="elevation-6" color="deep-purple darken-1" dark>edit</v-btn>
                  <v-dialog v-model="dialog" max-width="500px">
                  </v-dialog>
              </v-layout>
          </v-layout>
            <v-flex xs12 class="text-xs-right">
                <v-layout class="mt-4">
                    <v-flex class="text-xs-right">
                        <v-btn @click="addComplex" class="teal" dark round>Add</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-container>
    </v-card-text>
   </v-container>
</template>
<script>
import toggleCard from "@/preview/ToggleButton/ToggleButton.vue";
import { previewCommon, toggleCardText, passIndex } from "@/components/mixin/mixin.js";
export default {
  name: "complexTaskPreviewDisplay",
  mixins: [previewCommon, toggleCardText, passIndex],
  components: {
    toggleCard
  },
    methods: {
      addComplex(){
          let  store = this.$store
          let newtask = {
              complex_task: ""
          };
          let tile = store.getters.tiles_getters;
          store.state.userData[tile.indexOf("most difficult task accomplished or the most complex project")].push(
              newtask
          );
          let index = store.state.toEdit.atPos = this.complexTask.length;
          store.state.add_edit = true;
          this.passIndex(index, "Complex Task");
      }
    }
};
</script>
