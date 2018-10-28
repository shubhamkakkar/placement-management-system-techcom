<template>
<v-container fluid class="pa-5">
  <v-layout fill-height align-center justify-center row wrap>
    <v-flex>
      <v-layout row align-center justify-center>
        <v-flex sm8 xs12>
          <v-card class="indigo--text title pa-3 mt-2 text-xs-center">
            Preview Your Details
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-5">
        <v-flex xs12>
          <div v-if="personalInfoDisplay">
            <v-card class="elevation-5 round mb-5">
              <bio-preview-display />
            </v-card>
          </div>
          <div v-if="educationalInfoDisplay">
            <v-card class="elevation-5 round mb-5">
              <ed-preview-display />
            </v-card>
          </div>
          <div v-if="workXInfoDisplay">
            <v-card class="elevation-5 round mb-5">
              <work-x-preview-display />
            </v-card>
          </div>
          <div v-if="skillsInfoDisplay">
            <v-card class="elevation-5 round mb-5">
              <skills-preview-display />
            </v-card>
          </div>
          <div v-if="complexTaskInfoDisplay">
            <v-card class="elevation-5 round mb-5">
              <complex-task-preview-display />
            </v-card>
          </div>
          <div v-if="socialProfileInfoDisplay">
            <v-card class="elevation-5 round mb-5">
              <social-profile-preview-display />
            </v-card>
          </div>
          <div class="text-xs-center">
             <v-btn color="indigo" dark large @click="sendDataToServer">Save</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { previewCommon } from "@/components/mixin/mixin.js";
import edPreviewDisplay from "@/preview/ed-preview.vue";
import workXPreviewDisplay from "@/preview/workX-preview.vue";
import bioPreviewDisplay from "@/preview/bio-preview.vue";
import skillsPreviewDisplay from "@/preview/skills-preview.vue";
import complexTaskPreviewDisplay from "@/preview/complex-preview.vue";
import socialProfilePreviewDisplay from "@/preview/social-profile-preview.vue";

import axios from "axios";
import BioVCardText from "../../../../pages/bioForm";
export default {
  name: "preview",
  mounted() {
    if (this.$store.state.tiles.length < 1) {
      alert("Error:  Logout and login in again");
      this.$router.go(this.$router.push("/"));
    }
  },
  mixins: [previewCommon],
  methods: {
    sendDataToServer() {
      const getters = this.$store.getters;
      const applicant_Information = {
        userData: getters.userData_getters,
        tiles: getters.tiles_getters
      };
      axios
        .post(
          `https://placementmanagementsyste-bf904.firebaseio.com//users/${
            this.$store.state.user.id
          }.json`,
          applicant_Information
        )
        .then(res => console.log(res))
        .catch(err => console.log(err.response));

      let confirm_bool = confirm("Data is saved Successfuly");
      if (confirm_bool) {
        this.$store.state.tiles = [];
        this.$store.state.user.id = null;
         this.router.go(this.router.push("/"))
      } else {
        this.$router.push("/404");
      }
    }
  },
  components: {
    BioVCardText,
    edPreviewDisplay,
    workXPreviewDisplay,
    bioPreviewDisplay,
    skillsPreviewDisplay,
    complexTaskPreviewDisplay,
    socialProfilePreviewDisplay
  }
};
</script>
