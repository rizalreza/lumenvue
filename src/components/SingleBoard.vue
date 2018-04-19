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

        mounted() {
            let token = localStorage.getItem('token');
            if (!token) {
                this.$router.push('/login')
            };
            // axios.get('http://localhost:8000/boards?api_token=' + token)
            //     .then(response => {
            //         console.log(response);
            //      this.boards = response.data.boards;
            //     });
        }

    }

</script>