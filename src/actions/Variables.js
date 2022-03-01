import { GET_PERSONAL_DETAILS } from "./Type";
import { ADD_PERSONAL_DETAILS } from "./Type";

export const add_personal_details = (key,value) => {
    return ({
      
      type:ADD_PERSONAL_DETAILS,
      payload:{key,value}
      
    });
}

export const get_personal_details = () => {
    return ({
      type:GET_PERSONAL_DETAILS,
      
      
    });
}

