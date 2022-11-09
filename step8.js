
let arr = [1,2,3,4,5,'r','r'];
  const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
  const duplicates = findDuplicates(arr);
  console.log(duplicates.length === 0?false:true);
  
