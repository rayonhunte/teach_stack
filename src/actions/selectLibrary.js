const  selectLibrary = (id) =>{
  return {
    type: 'SELECT_LIBRARY',
    id
  }
}

export { selectLibrary };