<template>
    <v-container fluid>
        <v-card-text>
            <v-layout v-for="(ref, index) in label" :key="index+10" row wrap>
                <v-flex xs12>
                    <v-text-field autofocus class="ma-1" :rules="fieldRules" v-model="personalInfo[index]" :label="ref" type="text" />
                </v-flex>
            </v-layout>
        </v-card-text>
        <Save-button @SaveChanges_root="SaveChanges"/>
    </v-container>
</template>

<script>
import { fieldRules, labelMx } from "@/components/mixin/mixin.js";
import SaveButton from "@/pages/saveButton/SaveButton.vue";
export default {
  name: "bioVCardText",
  mixins: [fieldRules, labelMx],
  methods: {
    SaveChanges() {
      let tile = this.$store.getters.tiles_getters;
      let tempUserData = this.$store.getters.userData_getters;
      let currentTempData =
        tempUserData[tile.indexOf("Personal Information")][this.atPos];
      const personalInfo = this.personalInfo;
      for (let i in personalInfo) {
        currentTempData[i] = personalInfo[i];
      }
      this.$store.state.userData[tile.indexOf("Personal Information")] = currentTempData;
      this.$router.push("/preview");
    }
  },
  data() {
    return {
      personalInfo: [
        "Full Name",
        "E-mail",
        "Enrollment Number",
        "Gender",
        "Course",
        "Work Field",
        "Work Profile",
        "Contact Number"
      ]
    };
  },
  components: {
    SaveButton
  }
};
</script>
