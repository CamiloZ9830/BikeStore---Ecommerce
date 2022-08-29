const initialValues = {
    buyer:{ name: "",
    phonenumber: "",
    email: ""},
     success: false,
     orderId: "",
     proc: false
};
const ACTIONS = {
  FORMDATA : 'datos-comprador',
  PAGESUCCESS: 'pagina-success',
  ORDERID: 'orden-id',
  PROC: 'procesando-compra'
};


const reducer = (state, action) => {
  
  switch (action.type) {
      case ACTIONS.FORMDATA:
          return {...state, buyer:{...state.buyer, [action.payload.key]: action.payload.value} };
      case ACTIONS.PAGESUCCESS:
          return {...state, success: true};
      case ACTIONS.ORDERID:
          return {...state, orderId: action.payload};
      case ACTIONS.PROC: 
          return {...state, proc: true}           
       
      default: return {...state}      
      
};

};

export {initialValues, ACTIONS, reducer}


