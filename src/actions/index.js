let nextFormationId = 0
export const addForma = (text, desc) => ({
  type: 'ADD_FORMA',
  id: nextFormationId++,
  text,
  desc
})

export const displayForma = id => ({
  type: 'DISPLAY_FORMA',
  id
})

export const removeForma = id => ({
  type: 'REMOVE_FORMA',
  id
})

export const sauvegarderForma = (id, text, desc) => ({
  type: 'SAUVEGARDER_FORMA',
  id,
  text,
  desc
})
