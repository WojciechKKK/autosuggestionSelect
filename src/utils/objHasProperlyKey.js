const objHasProperlyKey = array => {
  if(!Array.isArray(array)){
    return false
  }
  return array.every(obj => obj.hasOwnProperty('name'))
};

export default objHasProperlyKey; 