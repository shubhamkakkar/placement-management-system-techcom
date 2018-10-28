<template>
<v-container fluid>
  <v-card-text>
    <v-layout v-for="(ref, index) in workXInfo" :key="index+20" row wrap>
      <v-flex xs12>
        <v-text-field autofocus class="ma-2" :rules="fieldRules" label="Work Title" v-model="ref.profile_title" type="text" />
      </v-flex>
      <v-flex xs12>
        <v-text-field autofocus class="ma-2" :rules="fieldRules" label="Company" v-model="ref.company" type="text" />
      </v-flex>
      <v-flex xs12>
        <v-text-field autofocus class="ma-2" :rules="fieldRules" label="Duration" v-model="ref.duration" type="text" />
      </v-flex>
      <v-flex xs12>
        <v-text-field autofocus class="ma-2" :rules="fieldRules" label="Location" v-model="ref.location" type="text" />
      </v-flex>
      <v-flex xs12>
        <v-text-field autofocus class="ma-2" :rules="fieldRules" label="Role" v-model="ref.role" type="text" />
      </v-flex>
    </v-layout>
  </v-card-text>
    <div class="text-xs-right">
        <v-btn  @click="remove" color="white" class="deep-purple--text elevation-6" dark>remove</v-btn>
    </div>
    <Save-button @SaveChangesRoot="SaveChanges"/>
</v-container>
</template>

<script>
import { fieldRules, WXMX } from "@/components/mixin/mixin.js";
import SaveButton from "@/pages/saveButton/SaveButton.vue";

export default {
  name: "workXVcardText",
  components: {
    SaveButton
  },
  mixins: [fieldRules, WXMX],
  methods: {
      remove() {
          let index = this.$store.state.toEdit.atPos;
          let x = this.$store.state.userData[
              this.$store.state.tiles.indexOf("Work Experiance Information")
              ];
          x.splice(index, 1);
          this.$router.push("/preview");
      },
    SaveChanges() {
      let tile = this.$store.getters.tiles_getters;
      let tempUserData = this.$store.getters.userData_getters;
      let currentTempData =
        tempUserData[tile.indexOf("Work Experiance Information")][this.atPos];
      let currentVmodelData = this.workXInfo[0];
      currentTempData.profile_title = currentVmodelData.profile_title;
      currentTempData.company = currentVmodelData.company;
      currentTempData.duration = currentVmodelData.duration;
      currentTempData.location = currentVmodelData.location;
      currentTempData.role = currentVmodelData.role;

      this.$store.state.userData[tile.indexOf("Work Experiance Information")][
        this.atPos
      ] = currentTempData;
      this.$router.push("/preview");
    }
  }
};
</script>
