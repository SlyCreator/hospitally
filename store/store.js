export const initial = {
  user : null
}

export const reducer = (state,{type,payload})=>{
  console.log(state)
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