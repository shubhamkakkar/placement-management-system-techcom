<template>
    <v-card-actions>
        <div class="text-xs-center m-a">
            <v-btn color="primary" @click="SaveChanges_cmp">Save Changes</v-btn>
        </div>
    </v-card-actions>
</template>


<script>
    export default {
        name: 'SaveButton',
        methods: {
            SaveChanges_cmp(){
                this.$emit("SaveChangesRoot");
            }
        }
    }
</script>