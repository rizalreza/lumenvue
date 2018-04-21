export default{

	methods: {

		fetchBoardsData() {
      axios.get(baseApiUrl+'boards?api_token=' + token)
        .then(response => {
        this.boards = response.data.boards; 
        });
      }

	}
} 