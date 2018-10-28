<template>
<v-container fluid="">
  <toggle-card  @toggleCurrentCardText="toggleCurrentCard" btnValue="Educational Information"/>
  <v-card-text class="body-2" v-if="display">
       <v-container fluid>
          <div v-for="(info, index) in  educationalInfo" :key="index">
          <v-layout row wrap  class="pa-2 mt-3">
          <v-flex sm6 xs12 class="mb-3">
            <v-layout row wrap>
              <v-flex sm6 xs12 class="indigo--text">
              School / College / University :
              </v-flex>
              <v-flex sm6 xs12>
                {{info.school}}
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex sm6 xs12 class="mb-3">
            <v-layout row wrap>
              <v-flex xs6 class="indigo--text">
                Course :
              </v-flex>
              <v-flex sm6 xs12>
                {{info.course}}
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex sm6 xs12 class="mb-3">
            <v-layout row wrap>
              <v-flex xs6 class="indigo--text">
                Score :
              </v-flex>
              <v-flex sm6 xs12>
                {{info.score}}
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex sm6 xs12 class="mb-3">
            <v-layout row wrap>
              <v-flex xs6 class="indigo--text">
                Location :
              </v-flex>
              <v-flex sm6 xs12>
                {{info.location}}
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex sm6 xs12 class="mb-3">
            <v-layout row wrap>
              <v-flex xs6 class="indigo--text">
                Achievements :
              </v-flex>
              <v-flex sm6 xs12>
                {{info.additionalInfo}}
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 class="text-xs-right">
            <v-layout row justify-end>
              <v-btn @click="passIndex(index, info.reference)" class="elevation-6" color="deep-purple darken-1" dark>edit</v-btn>
              <v-dialog v-model="dialog" max-width="500px">
              </v-dialog>
            </v-layout>
          </v-flex>
        </v-layout>
          </div>
          <v-flex xs12 class="text-xs-right">
              <v-layout class="mt-4">
                  <v-flex class="text-xs-right">
                      <v-btn @click="addEd" class="teal" dark round>Add</v-btn>
                  </v-flex>
              </v-layout>
          </v-flex>
      </v-container>
  </v-card-text>
</v-container>
</template>

<script>
import { toggleCardText, previewCommon, passIndex } from "@/components/mixin/mixin.js";
import toggleCard from "@/preview/ToggleButton/ToggleButton.vue";

export default {
  name: "ed-preview",
  mixins: [toggleCardText, previewCommon, passIndex],
  components: {
    toggleCard
  },
  methods: {
    addEd() {
        let store = this.$store;
      let newEd = {
        school: "",
        course: "",
        score: "",
        location: "",
        additionalInfo: "",
        reference: "Educational Information"
      };
      let tile = store.getters.tiles_getters;
      store.state.userData[tile.indexOf("Educational Information")].push(
        newEd
      );
      let index = (store.state.toEdit.atPos = this.educationalInfo.length);
      store.state.add_edit = true;
      this.passIndex(index, "Educational Information");
    }
  }
};
</script>
