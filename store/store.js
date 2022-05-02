export const initialState = {
  user : null
}

export const reducer = (state,{type,payload})=>{
  switch (type) {
    case 'UPDATE-USER':{
      return {
        ...state,
        user:payload
      }
    }
    default:
      return state
  }

}
