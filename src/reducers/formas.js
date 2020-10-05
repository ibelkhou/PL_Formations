const formas = (state = { formas: [
                                    {id: "1", name:"Test 1", desc:"desc 1"},
                                    {id: "2", name:"Test 2", desc:"desc 2"}
                                  ]
                        },
                 action) => {
        switch (action.type) {
          case 'SAUVEGARDER_FORMA':
            const idEexists = state.formas.some(f => (f.id === action.id));
            if (idEexists) {
              return {formas: state.formas.filter(forma => {
                  if (forma.id === action.id) {
                    forma.name = action.name;
                    forma.desc = action.desc;
                  }
                  return forma;
              })}
            } else {
              return {formas: [
                ...state.formas,
                {
                  id: action.id,
                  name: action.name,
                  desc: action.desc,
                }
              ]}
            }
          case 'REMOVE_FORMA':
            return {formas: state.formas.filter(forma => {
              return forma.id !== action.id
            })}
          default:
            return state
        }
  }
  
  export default formas;