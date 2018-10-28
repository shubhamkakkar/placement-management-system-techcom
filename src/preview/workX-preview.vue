<template>
   <v-container fluid>
    <toggle-card  @toggleCurrentCardText="toggleCurrentCard" btnValue="Profesional Experience"/>
    <v-card-text  v-if="display" class="body-2">
        <v-container fluid>
          <v-layout>
            <v-flex xs12 v-for="(info, index) in workXInfo" :key="index">
            <v-layout row wrap class="pa-2 mt-3">
              <v-flex sm6 xs12 class="mb-3">
                <v-layout row wrap>
                  <v-flex xs6 class="indigo--text">
                    Work Title: 
                  </v-flex>
                  <v-flex sm6 xs12>
                    {{info.profile_title}}
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 xs12 class="mb-3">
                <v-layout row wrap>
                  <v-flex xs6 class="indigo--text">
                  Company : 
                  </v-flex>
                  <v-flex sm6 xs12>
                    {{info.company}}
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 xs12 class="mb-3">
                <v-layout row wrap>
                  <v-flex xs6 class="indigo--text">
                    Duration :
                  </v-flex>
                  <v-flex sm6 xs12>
                    {{info.duration}}
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex sm6 xs12 class="mb-3">
                <v-layout row wrap>
                  <v-flex xs6 class="indigo--text">
                    Role :
                  </v-flex>
                  <v-flex sm6 xs12>
                    {{info.role}}
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
          </v-flex>
          </v-layout>
            <v-flex xs12 class="text-xs-right">
                <v-layout class="mt-4">
                    <v-flex class="text-xs-right">
                        <v-btn @click="addWX" class="teal" dark round>Add</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-container>
    </v-card-text>
</v-container>
</template>

<script>
import {
  previewCommon,
  toggleCardText,
  passIndex
} from "@/components/mixin/mixin.js";
import toggleCard from "@/preview/ToggleButton/ToggleButton.vue";

export default {
  name: "work-x-preview",
  mixins: [previewCommon, toggleCardText, passIndex],
  components: {
    toggleCard
  },
  methods: {
    addWX() {
      let store = this.$store;
      let newPr = {
        company: "",
        profile_title: "",
        duration: "",
        location: "",
        role: ""
      };
      let tile = store.getters.tiles_getters;
      store.state.userData[tile.indexOf("Work Experiance Information")].push(
        newPr
      );
      let index = (store.state.toEdit.atPos = this.workXInfo.length);
      store.state.add_edit = true;
      this.passIndex(index, "Work Experiance");
    }
  }
};
</script>
