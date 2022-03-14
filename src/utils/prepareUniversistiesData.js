export const prepareUniversistiesData = (data, userList) => {
  if(!data.length){
    return []
  }
  return data
        .map(university => {
          if((userList.map(({name}) => name)).includes(university.name)){
            return ({...university, isChecked: true})
          } else {
            return ({...university, isChecked: false})
          }
  });
}