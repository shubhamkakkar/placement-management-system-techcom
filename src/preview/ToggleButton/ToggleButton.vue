<template>
    <v-card-actions>
       <div style="width: 100%" class="text-xs-center">
            <v-btn large color="indigo" dark class="text-xs-center" @click="toggleCurrentCardText">
                {{ btnValue }}
            </v-btn>
       </div>
    </v-card-actions>
</template>

<script>
export default {
  props: ["btnValue"],
  methods: {
      toggleCurrentCardText(){
          this.$emit("toggleCurrentCardText")
      }
  }
};
</script>