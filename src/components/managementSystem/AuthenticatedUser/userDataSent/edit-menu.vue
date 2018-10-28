<template>
<v-container fluid>
  <v-layout row fill-height align-center justify-center>
    <div class="w-100">
      <v-card class="pa-3 round elevation-5">
        <v-card-title>
          <div class="title text-xs-center pa-1 m-a primary--text"> {{ tile }} </div>
        </v-card-title>
        <div  v-if="render === 'bio' " >
          <bio-vcard-text/>
        </div>
        <div v-if="render === 'ed' ">
          <ed-vcard-text />
        </div>
        <div v-if="render === 'pr' ">
          <work-x-vcard-text />
        </div>
        <div v-if="render === 'skills' ">
          <skill-vcard-text />
        </div>
        <div v-if="render === 'complextask' ">
          <complex-task-vcard-text />
        </div>
        <div v-if="render === 'socialprofile' ">
          <social-profile-vcard-text />
        </div>
      </v-card>
    </div>
  </v-layout>
</v-container>
</template>

<script>
import edVcardText from "@/pages/educationForm.vue";
import workXVcardText from "@/pages/workXForm.vue";
import bioVcardText from "@/pages/bioForm.vue";
import skillVcardText from "@/pages/skillForm.vue";
import complexTaskVcardText from "@/pages/complexTaskForm.vue";
import socialProfileVcardText from "@/pages/socialProfileForm.vue";
export default {
  name: "edit-menu",
  computed: {
    tile() {
      return this.$store.state.toEdit.reference;
    },
    render() {
      console.log(this.tile)
      switch (this.tile) {
        case "Personal Information": {
          return "bio";
        }
        case "Educational Information": {
          return "ed";
        }
        case "Work Experiance": {
          return "pr";
        }
        case "Skills": {
          return "skills";
        }
        case "Complex Task": {
          return "complextask";
        }
        case "Social Profile": {
          return "socialprofile";
        }
      }
    }
  },
  components: {
    edVcardText,
    workXVcardText,
    bioVcardText,
    skillVcardText,
    complexTaskVcardText,
    socialProfileVcardText
  }
};
</script>

<style scoped>
  .w-100 {
    width: 100% !important;
  }
</style>
