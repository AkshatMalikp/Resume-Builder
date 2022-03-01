import { GET_PERSONAL_DETAILS } from '../actions/Type';
import { ADD_PERSONAL_DETAILS } from '../actions/Type';
const INITIAL_STATE = {
    FirstName:null,
    LastName:null,
    email:null,
    Phone:null,
    projects:[],
    skills:[],

};
const a = (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
        case ADD_PERSONAL_DETAILS:
      		return {...state, 
                [action.payload.key]:action.payload.value,
                };
        case GET_PERSONAL_DETAILS:
            return state;      
        default:
            return state ;
    }
}
export { a as default };