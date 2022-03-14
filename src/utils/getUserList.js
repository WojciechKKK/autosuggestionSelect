const getuserList = (userList, universityName) => {
  if(!userList.length) {
    return []
  }
  return userList.filter(({name, isChecked}) => name !== universityName && isChecked)
};

export default getuserList;