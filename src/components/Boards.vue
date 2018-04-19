<template>
    <div>
        <center>
            <h3>Boards Page</h3><br>
            <v-layout row-sm child-flex-sm>
                <div v-for="board in boards">
                    <router-link :to="{path:'/boards',params:{id:board.id}}">
                          <v-card width="430" dark class="primary ma-1" style="cursor:pointer" >
                                <v-card-text>{{board.name}}</v-card-text>
                          </v-card>
                    </router-link>

                </div>
            </v-layout>
        </center>
    </div>

</template>

<script>

    export default {

        data() {
            return {
                boards: ''
            }
        },

        mounted() {
            let token = localStorage.getItem('token');
            axios.get('http://localhost:8000/boards?api_token=' + token)
                .then(response => {
                    console.log(response);
                 this.boards = response.data.boards;
                });
        }

    }

</script>