<template>
	<div>
		<center>
			<h3>Boards Page</h3><br>
		<v-layout row-sm child-flex-sm>
				<div v-for="board in boards" :key='board.id'>
					<router-link :to="{name:'SingleBoard',params:{id:board.id}}">
						  <v-card dark class="primary ma-1" style="cursor:pointer" >
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
			this.fetchBoardsData();
		},

		methods: {
			fetchBoardsData() {
				axios.get(baseApiUrl+'boards?api_token=' + token)
				.then(response => {
					console.log(response);
				 this.boards = response.data.boards;
				});
			}
		}

	}

</script>