<template>
<v-container fluid>
  <toggle-card @toggleCurrentCardText="toggleCurrentCard" btnValue="Personal Information"/>
  <v-card-text v-if="display" class="body-2 m-a text-align">
    <v-layout row wrap class="pa-2 mt-3">
      <v-flex sm6 xs12 v-for="(info, index) in label" :key="index">
        <v-container fluid class="w-100" >
          <v-layout row wrap  fill-height>
            <v-flex xs12 class="m-a indigo--text">
              {{ info }}
            </v-flex>
            <v-flex xs12>
              {{ personalInfo[index] }}
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-right">
        <v-layout row justify-end>
          <v-btn @click="passIndex(0, 'Personal Information')" color="error" dark>edit</v-btn>
          <v-dialog v-model="dialog" max-width="500px" />
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card-text>
</v-container>
</template>
        
<script>
import toggleCard from "@/preview/ToggleButton/ToggleButton.vue";
import {
  previewCommon,
  labelMx,
  toggleCardText
} from "@/components/mixin/mixin.js";
export default {
  name: "bio-preview",
  mixins: [previewCommon, labelMx, toggleCardText],
  components: {
    toggleCard
  }
};
</script>

<style scoped>
@media screen only(min-width: 600px){
    .text-align{
      text-align: 'center' 
    }
}
@media  screen only (min-width: 600px){
    .text-align{
      text-align: 'left' 
    }
}
</style>