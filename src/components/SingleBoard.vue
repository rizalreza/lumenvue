<template>
    <div>
        <center>
            <h3>Board</h3><br>
            <v-layout row-sm child-flex-sm>
                <h2>{{$route.params.id}}</h2>
            </v-layout>
        </center>
    </div>

</template>

<script>

    export default {

        data() {
            return {
                // boards: ''
            }
        },

        created (){
            // this.fetchBoardsData();
        },
        mounted() {
            let token = localStorage.getItem('token');
            if (!token) {
                this.$router.push('/login')
            };
        }

    }

</script>