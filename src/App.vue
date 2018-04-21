<template>
  <v-app>
    <v-toolbar>
      <div v-if='!loggedIn'>
        <router-link to="/login" tag="span">
          <v-btn flat>Login</v-btn>
        </router-link>
      </div>
      <v-menu offset-y v-if='loggedIn'>
        <v-btn primary flat slot="activator">
          <v-icon left>developer_board</v-icon>Boards
        </v-btn>
        <v-list v-for="board in boards" :key="board.id">
          <v-list-tile-title>
            &nbsp; &nbsp; {{ board.name}}
          </v-list-tile-title>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if='!loggedIn'>
        <router-link to="/register" tag="span">
          <v-btn flat>Register</v-btn>
        </router-link>
      </div>

      <v-menu offset-y v-if='loggedIn'>
        <v-btn primary flat slot="activator">
          <i class="material-icons">account_circle</i>&nbsp;&nbsp;{{ user.username}}
        </v-btn>
        <v-list>
          <v-list-tile-title>
            <router-link to="/logout" tag="span">
              &nbsp; &nbsp; Logout<br>
            </router-link>
          </v-list-tile-title> 
        </v-list>
      </v-menu>

    </v-toolbar>

    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import boardDataMixin from './mixins/boardDataMixin'

  export default {
    data() {
      return {
        boards: '',
        user:'',
        title: 'Lumenvue',
        loggedIn:false
      }
    },
    created() {
      this.redirectGuestToLogin();

      Event.$on('login', ()=> {
        this.loggedIn=true;
        this.fetchBoardsData();
      });

      Event.$on('logout', ()=> {
        this.loggedIn=false;
      }); 

      this.loggedIn=true;
      this.fetchUserData();
      this.fetchBoardsData(); 
       
    },

    mixins:[boardDataMixin],

    methods: {

      fetchUserData() {
        axios.get(baseApiUrl+"users/"+token)
        .then((response) => {
          // console.log(response.data.user.username);
        this.user = response.data.user;  
        });
      },



      redirectGuestToLogin(){
        if (!token) {
        this.$router.push('/login');  
        }
      } 

    }

  }
</script>

<!-- /*<style type="stylus">
   @import './stylus/main'
</style>*/ -->
