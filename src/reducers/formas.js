const formas = (state = { formas: [
                  {id: "1", name:"Test 1", desc:"desc 1"},
                  {id: "2", name:"Test 2", desc:"desc 2"}
                ]}, action) => {
        switch (action.type) {
          case 'ADD_FORMA':
            return {formas: [
              ...state.formas,
              {
                id: action.id,
                name: action.text,
                desc: action.desc,
              }
            ]}
          case 'REMOVE_FORMA':
            return {formas: state.formas.filter(forma => {
              return forma.id !== action.id
            })}
          default:
            return state
        }
  }
  
  export default formas;