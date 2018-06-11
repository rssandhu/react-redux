const initialstate = {
	counter : 0
}


const reducer =(state = initialstate , action) => {

	switch(action.type){    //reducer with switch case

		case 'INCREMENT' :
			return {
				counter : state.counter + action.val
			}
		case 'Decrement':
			return {
				counter : state.counter - action.val 
			}
		case 'Add5':
			return {
				counter : state.counter + action.val 
			}
		case 'Sub5':
			return {
				counter : state.counter - action.val
			}

		default : 
			return state;

	}


	// if(action.type === 'INCREMENT'){      //reducer with if conditions 
	// 	return {
	// 		counter : state.counter + action.val
	// 	}
	// }
	// if(action.type === 'Decrement'){
	// 	return {
	// 		counter : state.counter - action.val 
	// 	}
	// }
	// if(action.type === 'Add5'){
	// 	return {
	// 		counter : state.counter + action.val 
	// 	}
	// }
	// if(action.type === 'Sub5'){
	// 	return {
	// 		counter : state.counter - action.val
	// 	}
	// }

	// return state;
}




export default reducer;