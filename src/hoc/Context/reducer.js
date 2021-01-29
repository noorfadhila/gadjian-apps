let users = localStorage.getItem("listUsers")
  ? JSON.parse(localStorage.getItem("listUsers")).username
  : "";

export const initialState = {
  userList: "" | users,
  loading: false,
  errorMessage: null
};
 
export const UserReducer = (initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case "REQUEST_GET_USER":
        return {
            ...initialState,
            loading: true
        };
        case "GET_USER_SUCCESS":
        return {
            ...initialState,
            userList: action.payload,
            loading: false
        };
    
        case "GET_USER_ERROR":
        return {
            ...initialState,
            loading: false,
            errorMessage: action.error
        };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};