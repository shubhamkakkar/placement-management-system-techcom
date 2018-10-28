<template>
    <div v-if="!logoutDisplay" style="right: 0; position: fixed; z-index: 1;">
        <v-flex>
            <v-btn @click="logout" color="indigo" dark class="round">Logout</v-btn>
        </v-flex>
    </div>
</template>

<script>
  export default{
      name: 'Logout',
      methods:{
          logout(){
              let response = confirm("You have not yet submitted your data, logout will delete everything");
              if(response){
                  this.$store.state.user.id = null;
                  this.$router.go(this.$router.push('/'))
              }
          }
      },
      computed: {
          logoutDisplay(){
              return  Boolean(this.$route.path === '/');
          }
      }
  }
</script>