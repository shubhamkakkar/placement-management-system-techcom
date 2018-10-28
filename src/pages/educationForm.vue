<template>
    <v-container fluid>
        <v-card-text>
            <v-container fluid>
                <v-layout v-for="(ref, index) in educationalInfo" :key="index+10" row wrap class="pt-4">
                    <v-flex sm6 xs12>
                        <v-text-field autofocus class="ma-2" label="School" v-model="ref.school" type="text" />
                    </v-flex>
                    <v-flex sm6 xs12>
                        <v-text-field class="ma-2" label="Course" v-model="ref.course" placeholder="ex: 10th, 12th, B.Com" type="text" />
                    </v-flex>
                    <v-flex sm6 xs12>
                        <v-text-field class="ma-2" label="Percentage / CGPA" placeholder="ex: 85%, 9.5 CGPA" v-model="ref.score" type="text" />
                    </v-flex>
                    <v-flex sm6 xs12>
                        <v-text-field class="ma-2" label="Location" v-model="ref.location" type="text" />
                    </v-flex>
                    <v-flex sm6 xs12>
                        <v-text-field class="ma-2" label="Achievements" placeholder="ex: Schoolar Badge Holder, Participated in Debates" v-model="ref.additionalInfo" type="text" />
                    </v-flex>
                </v-layout>
            </v-container>
         </v-card-text>
        <div class="text-xs-right">
            <v-btn  @click="remove" color="white" class="deep-purple--text elevation-6" dark>remove</v-btn>
        </div>
        <Save-button @SaveChangesRoot="SaveChanges"/>
    </v-container>
</template>

<script>
import { EDMX } from "@/components/mixin/mixin.js";
import SaveButton from "@/pages/saveButton/SaveButton.vue";
export default {
  name: "edVcardText",
  components: {
    SaveButton
  },
  mixins: [EDMX],
  methods: {
      remove() {
          let index = this.$store.state.toEdit.atPos;
          let x = this.$store.state.userData[
              this.$store.state.tiles.indexOf("Educational Information")
              ];
          x.splice(index, 1);
          this.$router.push("/preview");
      },
    SaveChanges() {
      /*
        *  if it come here de to edit dont ddubt 1 from atPOs
        *  else do subtrat 1 from at Pos
        * */
      let store = this.$store;
      let atPos;
      let tile = store.getters.tiles_getters;
      if (this.$store.state.add_edit) {
        //add
        atPos = store.state.userData[tile.indexOf("Educational Information")].length - 1;
      } else {
        //  edit
        atPos = store.state.toEdit.atPos;
      }

      let tempUserData = store.getters.userData_getters;
      let currentTempData =
        tempUserData[tile.indexOf("Educational Information")][atPos];
      let currentVmodelData = this.educationalInfo[0];
      currentTempData.school = currentVmodelData.school;
      currentTempData.course = currentVmodelData.course;
      currentTempData.score = currentVmodelData.score;
      currentTempData.location = currentVmodelData.location;
      currentTempData.additionalInfo = currentVmodelData.additionalInfo;

      store.state.userData[tile.indexOf("Educational Information")][
        atPos
      ] = currentTempData;

      this.$router.push("/preview");
    }
  }
};
</script>
