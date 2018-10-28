<template>
    <v-container fluid>
        <v-card-text>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-text-field :rules="fieldRules"
                    autofocus 
                    name="Skill" 
                    label="Enter Skill" 
                    placeholder="Skills" 
                    id="id" v-model="skill_current"
                    class="text-xs-center" />
                </v-flex>
            </v-layout>        
        </v-card-text>
        <v-card-actions>
          <v-layout row wrap>
              <v-flex class="text-xs-right">
                  <v-btn @click.native="resetSkill" color="deep-purple" class="white--text">Reset</v-btn>
              </v-flex>
              <v-flex xs12 class="mt-4 text-xs-right">
              <v-btn  @click="remove" color="white" class="deep-purple--text elevation-6" dark>remove</v-btn>
              </v-flex>
          </v-layout>
            
        </v-card-actions>    
        <Save-button @SaveChangesRoot="SaveChanges"/>
    </v-container>
</template>

<script>
import { fieldRules } from "@/components/mixin/mixin.js";
import SaveButton from "@/pages/saveButton/SaveButton.vue";

export default {
  name: "skill-form",
  mixins: [fieldRules],
  components: {
    SaveButton
  },
  data() {
    return {
      skill_current: "",
      skill: []
    };
  },
  methods: {
    resetSkill() {
      this.skill_current = "";
    },
    remove() {
        let index = this.$store.state.toEdit.atPos;
      let x = this.$store.state.userData[
        this.$store.state.tiles.indexOf("Skills")
      ];
      x.splice(index, 1);
      this.$router.push("/preview");
    },
    SaveChanges() {
      let tile = this.$store.getters.tiles_getters;
      let tempUserData = this.$store.getters.userData_getters;
      let currentTempData = tempUserData[tile.indexOf("Skills")];
      let skill = [];
      let atPos = this.$store.state.toEdit.atPos;
      currentTempData[atPos] = this.skill_current;
      this.$store.state.userData[tile.indexOf("Skills")] = currentTempData;
      this.$router.push("/preview");
    }
  }
};
</script>
