<template>

    <div>
        <center>
            <h3>You are logged out</h3>
        </center>
    </div>

</template>

<script>

    export default {

        created() {
            let token = localStorage.getItem('token');
            if (!token) {
                return false;
            }
            axios.get('http://localhost:8000/logout?api_token=' + token)
                .then(response => {
                    localStorage.removeItem('token');
                    Event.$emit('logout'); 

                });
        }

    }

</script>