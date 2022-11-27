const initial = {
      user: { userName: "",
              password: ""},
      registration: {names: "",
                     lastNames: "",
                     email: "",
                     phoneNumber: "",
                     userName: "",
                     password: ""},        
      proc: false,
      success: false,  
      loginFetchData: [{}]    
};

const ACTIONS = {
    LOGIN: 'datos-user-login',
    PROC: 'animacion-procesando-compra',
    REGISTRATION:  'registration',
    SUCCESS: 'success',
    LOGINFETCHEDDATA:'login-fetched-data'
};




const reducer = (state, action) => {
      
      switch(action.type) {
              case ACTIONS.LOGIN:
                return {...state, user:{...state.user, [action.payload.key]: action.payload.value }}
              case ACTIONS.REGISTRATION:
                return {...state, registration:{...state.registration, [action.payload.key]: action.payload.value}}  
              case ACTIONS.PROC:
                return {...state, proc: true}
              case ACTIONS.SUCCESS:
                  return {...state, success: true}  
              case ACTIONS.LOGINFETCHEDDATA:
                  return {...state, loginFetchData: action.payload}    
                
                
                default: return {...state}





      };

};

export {initial, ACTIONS, reducer}