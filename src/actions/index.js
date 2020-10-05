let nextFormationId = 3

export const removeForma = id => ({
  type: 'REMOVE_FORMA',
  id
})

export const sauvegarderForma = (id, name, desc) => ({
  type: 'SAUVEGARDER_FORMA',
  id: id ? id : nextFormationId++,
  name,
  desc
})
