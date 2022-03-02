import { GET_PERSONAL_DETAILS } from '../actions/Type';
import { ADD_PERSONAL_DETAILS } from '../actions/Type';
import { ADD_TO_ARRAY } from '../actions/Type';
const INITIAL_STATE = {
    FirstName:null,
    LastName:null,
    email:null,
    Phone:null,
    projects:[],
    skills:[],
    trainings:[],

};
const a = (state = INITIAL_STATE, action) =>  {
    let arr=[]
    switch (action.type) {
        case ADD_PERSONAL_DETAILS:
            
      		return {...state, 
                [action.payload.key]:action.payload.value,
                };
        case ADD_TO_ARRAY:
            var b=action.payload.key
            arr = addToCartHelper(state.b, action.payload.value);
            return {
                ...state,
                b:arr
            }        
        case GET_PERSONAL_DETAILS:
            return state;      
        default:
            return state ;
    }
}

const addToCartHelper = (cartItems, newItem) => {
      return [...cartItems, { ...newItem }];
  };
export { a as default };