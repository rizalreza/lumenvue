
<template>
  
<!--   <div @click="editMode=false; updateListId=null"> -->
  <div> 
    <center><h2>{{board.name}}</h2></center><br>

      <v-container grid-list-md fluid> 
          <v-layout row wrap>
            <v-flex md3 v-for="list in lists" v-bind:key="list.id">
              <v-card  class="grey lighten-2">
                 <v-toolbar class="green white--text" dark dense>
                    <v-toolbar-title>{{list.name}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                 </v-toolbar>
              <board-card :list="list"> </board-card>


              </v-card>
            </v-flex>

            <v-flex md3>
              <v-card>
                <v-card-title class="white lighten-1">
                  <v-text-field v-model="listName" label="List name" v-if="editMode" @keyup.enter="storeList"></v-text-field> 
                    <v-btn flat small class="primary" @click="editMode=true" v-if="!editMode">Add list</v-btn>                  
                </v-card-title>
              </v-card>
            </v-flex>


            </v-layout>
      </v-container>
  </div>

</template>

<script>
import BoardCard from '@/components/BoardCard'

  export default {
    data() {
      return {
         boards:'',
         board:'',
         lists:'', 
         cards:'',
         boardId:'',
         listName:'',
         editMode:false
        }
      },

      components: {
        'board-card':BoardCard
      },

    created() {
        this.boardId = this.$route.params.id;
        this.fetchBoardsData();
    },

    beforeRouteUpdate (to,from,next){
      this.boardId = to.params.id;
      this.fetchBoardsData();
      next();
    },

    methods: { 
      getLists(){
        this.boards.map((board)=>{
          if(board.id == this.boardId){
            this.board = board;
            return this.lists = board.lists ;
          }

        });
      },
      storeList(){
        this.editMode=false;
        axios.post("/boards/"+this.boardId+"/list",{name:this.listName})
        .then(response=> {
          // console.log(response);
          let newList = response.data.list;
          this.lists.push(newList);
          this.listName="";
        });
        // alert("Success");
      },

      fetchBoardsData() {
        axios.get('boards')
          .then(response => {
            // console.log(response);
          this.boards = response.data.boards;
          this.getLists(); 
          });
        }
    }

}
</script>