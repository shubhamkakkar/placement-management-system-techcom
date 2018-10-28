<template>
   <v-container fluid>
      <toggle-card  @toggleCurrentCardText="toggleCurrentCard" btnValue="Social Profile(s)"/>
      <v-card-text v-if="display">
          <v-container fluid>
            <v-layout row wrap v-for="(ref, index) in socailProfileCmp" :key="index">
              <v-flex xs12 mb-2>
              </v-flex>
              <v-layout style="width: 100%" row wrap align-center justify-center fill-height>
                  <v-flex xs12 sm4 class="text-xs-center">
                    <div class="body-2">
                        <span class=indigo--text>Name</span> :  {{ ref.name }}
                    </div>   
                  </v-flex>
                  <v-flex xs12 sm4 class="text-xs-center">
                    <div class="body-2">
                        <span class=indigo--text>Url</span> :  {{ ref.url }}
                    </div>   
                  </v-flex>
                  <v-flex xs12 sm4 class="text-xs-right">
                      <v-layout row justify-end class="mt-3">
                          <v-btn @click="passIndex(index, 'Social Profile')" class="elevation-6" color="deep-purple darken-1" dark>edit</v-btn>
                          <v-dialog v-model="dialog" max-width="500px">
                          </v-dialog>
                      </v-layout>
                  </v-flex>
              </v-layout>
            </v-layout>
              <v-layout>
                  <v-flex xs12 class="text-xs-right">
                      <v-layout class="mt-4">
                          <v-flex class="text-xs-right">
                              <v-btn @click="addSP" class="teal" dark round>Add</v-btn>
                          </v-flex>
                      </v-layout>
                  </v-flex>
              </v-layout>
          </v-container>
      </v-card-text>
   </v-container>
</template>
<script>
import toggleCard from "@/preview/ToggleButton/ToggleButton.vue";
import { previewCommon, toggleCardText, passIndex } from "@/components/mixin/mixin.js";
export default {
  name: "social-profile-preview",
  mixins: [previewCommon, toggleCardText, passIndex],
  computed: {
    socailProfileCmp() {
      let tile = this.$store.getters.tiles_getters;
      console.log(this.$store.state.userData[tile.indexOf("Social Profile")])
      return this.$store.state.userData[tile.indexOf("Social Profile")];
    }
  },
  components: {
    toggleCard
  },
    methods:{
      addSP(){
          let store = this.$store;
          let newSP = {
              name: "",
              url: ""
          };
          let tile = store.getters.tiles_getters;
          store.state.userData[tile.indexOf("Social Profile")].push(
              newSP
          );
          let index = store.state.toEdit.atPos = this.socialProfiles.length;
          store.state.add_edit = true;
          this.passIndex(index, "Social Profile");
      }
    }
};
</script>
