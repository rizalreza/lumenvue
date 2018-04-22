
<template>
  
  <div @click="editMode=false; updateList=null">

    <center><h2>{{board.name}}</h2></center><br>

      <v-container grid-list-md fluid> 
          <v-layout row wrap>
            <v-flex md3 v-for="list in lists" v-bind:key="list.id">
              <v-card  class="grey lighten-2">
                 <v-toolbar class="green white--text" dark dense>
                    <v-text-field v-model="listName" label="List name" v-if="updateListId==list.id" @keyup.enter="updateList"></v-text-field> 
                    <v-toolbar-title @click.stop="updateListId=list.id" v-else>{{list.name}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        
                      <v-menu offset-y>
                        <v-btn icon slot="activator">
                          <v-icon>more_vert</v-icon>
                        </v-btn>

                        <v-list>
                          <v-list-tile @click.stop="deleteList(list.id)">
                            Delete
                          </v-list-tile>
                        </v-list>
                      </v-menu>

                 </v-toolbar>
              <board-card :list="list"> </board-card>


              </v-card> 
            </v-flex>

            <v-flex md3>
              <v-card>
                <v-card-title class="white lighten-1">
                  <v-text-field @click.stop v-model="listName" label="List name" v-if="editMode" @keyup.enter="storeList"></v-text-field> 
                    <v-btn flat small class="primary" @click.stop="editMode=true" v-else>Add list</v-btn>                  
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
         editMode:false,
         updateListId:'',
         deleteListId:''
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
      },

      updateList(){
        axios.put("/boards/"+this.boardId+"/list/"+this.updateListId,{name:this.listName})
        .then(response=> {
          console.log(response);
          this.updateListId = null;
          this.listName="";
          this.fetchBoardsData();

        });
      },

      deleteList(listId){
        axios.delete("/boards/"+this.boardId+"/list/"+listId)
        .then(response=> {
          console.log(response);
          this.fetchBoardsData();
        });
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