<template>
<v-container fluid>
    <toggle-card  @toggleCurrentCardText="toggleCurrentCard" btnValue="Skills"/>
            <v-container fluid>
                <v-card-text  v-if="display" class="body-2">
                <v-layout row wrap alogn-cemter justify-center>
                    <v-flex sm4 xs12 class="mt-3 text-xs-center" v-for="(info, index) in  skillset" :key="index">
                            <v-layout row wrap align-center justify-center>
                                <v-flex sm6 xs12 class="text-sm-center m-a">
                                    <span class="indigo--text">Skill :  {{index}}</span> :  <span  style="font-size: 16px; font-weight: normal; text-transform: uppercase">{{ info }}</span>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap align-center justify-center>
                                <v-flex xs12 class="mb-3">
                                    <v-btn @click="passIndex(index, 'Skills')" class="elevation-6" color="deep-purple darken-1" dark>edit</v-btn>
                                </v-flex>
                                <v-dialog v-model="dialog" max-width="500px"></v-dialog>
                            </v-layout>
                    </v-flex>
                    <v-flex xs12 class="text-xs-right">
                        <v-layout class="mt-4">
                            <v-flex class="text-xs-right">
                                <v-btn @click="addSkill" class="teal" dark round>Add</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>

                </v-card-text>
            </v-container>
</v-container>
</template>
<script>
import toggleCard from "@/preview/ToggleButton/ToggleButton.vue";
import {
  previewCommon,
  toggleCardText,
  passIndex
} from "@/components/mixin/mixin.js";
export default {
  name: "skills-preview",
  mixins: [previewCommon, toggleCardText, passIndex],
  mounted() {
    this.skillset = this.skills;
  },
  data() {
    return {
      skillset: []
    };
  },
  components: {
    toggleCard
  },
  methods: {
    addSkill() {
      let atPos = this.$store.state.toEdit.atPos;
      atPos = this.skillset.length;
      this.passIndex(atPos, "Skills");
    }
  }
};
</script>
