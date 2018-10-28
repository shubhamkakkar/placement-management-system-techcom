<template>
<div>
  <v-card-text>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field autofocus name="Complex Task" label="Complex Task" :rules="fieldRules" v-model="complexTask"></v-text-field>
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
import { fieldRules, CXMX } from "@/components/mixin/mixin.js";
import SaveButton from "@/pages/saveButton/SaveButton.vue";

export default {
  name: "complexTaskVcardText",
  components: {
    SaveButton
  },
  mixins: [fieldRules, CXMX],
  methods: {
      remove() {
          let index = this.$store.state.toEdit.atPos;
          let x = this.$store.state.userData[
              this.$store.state.tiles.indexOf("most difficult task accomplished or the most complex project")
              ];
          x.splice(index, 1);
          this.$router.push("/preview");
      },
    SaveChanges() {
      let tile = this.$store.getters.tiles_getters;
      let tempUserData = this.$store.getters.userData_getters;
      let currentTempData =
        tempUserData[tile.indexOf("most difficult task accomplished or the most complex project")][this.atPos];
      let complexTask = { complex_task: this.complexTask };

      currentTempData = this.complexTask;
      this.$store.state.userData[tile.indexOf("most difficult task accomplished or the most complex project")][
        this.atPos
      ] = complexTask;
      this.$router.push("/preview");
    }
  },
  data() {
    return {
      complexTask: ""
    };
  }
};
</script>