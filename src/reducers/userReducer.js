const initialState = {
    isLogin: false,
    loginError: false,
    userObj: {},
};

export const userReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "LOG_IN": {
           if  (action.payload.isLogin) {
               console.log("User login");
               return {
                   ...state, isLogin: true, loginError: false, userObj: action.payload.user,
               };
           }
           else {
               return {
                   ...state, isLogin: false, loginError: true, userObj: state.userObj,
               };
           }
        }
    }
    return state;
}