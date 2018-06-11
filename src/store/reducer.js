const initialstate = {
	counter : 0
}


const reducer =(state = initialstate , action) => {

	if(action.type === 'INCREMENT'){
		return {
			counter : state.counter + action.val
		}
	}
	if(action.type === 'Decrement'){
		return {
			counter : state.counter - action.val 
		}
	}
	if(action.type === 'Add5'){
		return {
			counter : state.counter + action.val 
		}
	}
	if(action.type === 'Sub5'){
		return {
			counter : state.counter - action.val
		}
	}

	return state;
}




export default reducer;