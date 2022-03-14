const compareUserListWithChoosen = (userList, setUniversitiesCheckedStatus) => {
  return userList
  .map(university => {
    if(setUniversitiesCheckedStatus.map(({name}) => name).includes(university.name)){
      return setUniversitiesCheckedStatus.filter(({name}) => name === university.name)[0]
    } else {
      return university
    }
  })
  .filter(({isChecked}) => isChecked)
};

export default compareUserListWithChoosen;