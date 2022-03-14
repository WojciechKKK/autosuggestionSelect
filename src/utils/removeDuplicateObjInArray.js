import objHasProperlyKey from "./objHasProperlyKey";

const removeDuplicateObjInArray = (array1, array2) => {
  const final = [];

  if(!objHasProperlyKey(array1) || !objHasProperlyKey(array2)){
    console.error('Failed with remove duplication')
    return final
  }

  [...array1, ...array2].forEach(obj => {
    if(!(final.map(({name}) => name).includes(obj.name))){
      final.push(obj)
    }
  })
  return final;
}

export default removeDuplicateObjInArray