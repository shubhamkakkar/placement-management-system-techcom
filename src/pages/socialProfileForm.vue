<template>
    <div>
        <v-card-text>
            <v-container fluid>
                <v-layout row wrap v-for="(ref, index) in social_profiles" :key="index">
                    <v-flex xs12>
                        <v-text-field
                        autofocus
                            name="Social Profile Name"
                            label="Social Profile Name"
                            :rules="fieldRules"
                            v-model="ref.name"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field
                        autofocus
                            name="Social Profile Url"
                            label="Social Profile Url"
                            :rules="fieldRules"
                            v-model="ref.url"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
        <div class="text-xs-right">
            <v-btn  @click="remove" color="white" class="deep-purple--text elevation-6" dark>remove</v-btn>
        </div>
        <Save-button @SaveChangesRoot="SaveChanges"/>
    </div>
</template>
<script>
import { fieldRules, SPMX } from "@/components/mixin/mixin.js";
import SaveButton from "@/pages/saveButton/SaveButton.vue";

export default {
  name: "complexTaskVcardText",
  components: {
    SaveButton
  },
  mixins: [fieldRules, SPMX],
  methods: {
      remove() {
          let index = this.$store.state.toEdit.atPos;
          let x = this.$store.state.userData[
              this.$store.state.tiles.indexOf("Social Profile")
              ];
          x.splice(index, 1);
          this.$router.push("/preview");
      },
    SaveChanges() {
      let tile = this.$store.getters.tiles_getters;
      let tempUserData = this.$store.getters.userData_getters;
      let currentTempData =
        tempUserData[tile.indexOf("Social Profile")][this.atPos];

      let social_profiles = this.social_profiles;
      if (
        social_profiles[0].name.trim() !== "" ||
        social_profiles[0].url.trim() !== ""
      ) {
        let socialProfiles = [];
        let newSP = {};
        for (let i in social_profiles) {
          if (social_profiles.length > i) {
            newSP = {
              name: "",
              url: ""
            };
            socialProfiles.push(newSP);
            socialProfiles[i].name = social_profiles[i].name;
            socialProfiles[i].url = social_profiles[i].url;
          }
        }
        this.$store.state.userData[tile.indexOf("Social Profile")][
          this.atPos
        ] = newSP;
      }
      this.$router.push("/preview");
    }
  }
};
</script>
