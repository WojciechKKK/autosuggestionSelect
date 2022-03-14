const toggleUniversityStatus = (apiList, universityName) => {
  return apiList.map(university => {
    if(university.name === universityName){
      return ({...university, isChecked: !university.isChecked})
    } else {
      return university
    }
  });
};

export default toggleUniversityStatus;