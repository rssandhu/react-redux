const initialstate = {
	counter : 0
}


const reducer =(state = initialstate , action) => {

	if(action.type === 'INCREMENT'){
		return {
			counter : state.counter + 1 
		}
	}
	if(action.type === 'Decrement'){
		return {
			counter : state.counter - 1 
		}
	}
	if(action.type === 'Add5'){
		return {
			counter : state.counter + 5 
		}
	}
	if(action.type === 'Sub5'){
		return {
			counter : state.counter - 5 
		}
	}

	return state;
}




export default reducer;