<template>
	<div>
		<center>
			<h3>Boards Page</h3><br>
		<v-layout row-sm child-flex-sm>
				<v-flex v-for="board in boards" :key='board.id'>
					<router-link :to="{name:'SingleBoard',params:{id:board.id}}">
						  <v-card dark class="primary ma-1" style="cursor:pointer" >
								<v-card-text>{{board.name}}</v-card-text>
						  </v-card>
					</router-link>

				 </v-flex>
			</v-layout>
		</center>
	</div>

</template>

<script>

import boardDataMixin from '../mixins/boardDataMixin'

	export default {

		data() {
			return {
				boards: ''
			} 
		},
  
		mounted() {
		this.fetchBoardsData();
		},

		mixins: [boardDataMixin],



	}

</script>