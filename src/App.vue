<template>
  <v-app>
    <v-toolbar>
      <v-menu offset-y>
        <v-btn primary flat slot="activator">
          <v-icon left>developer_board</v-icon>Boards
        </v-btn>
        <v-list v-for="item in items" :key="item.title">
          <v-list-tile-title>
            &nbsp; &nbsp; {{ item.title}}
          </v-list-tile-title>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <router-link to="/register" tag="span">
          <v-btn flat>Register</v-btn>
        </router-link>
      </div>
    </v-toolbar>

    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { icon: 'bubble_chart', title: 'Inpire 1' },
          { icon: 'bubble_chart', title: 'Inpire 2' },
          { icon: 'bubble_chart', title: 'Inpire 3' },
          { icon: 'bubble_chart', title: 'Another Board' },
        ],
        title: 'Lumenvue'
      }
    },
    mounted() {
      // axios.get('localhost:8000/boasrds');
    }
  }
</script>

<!-- <style lang="stylus">
</style> -->