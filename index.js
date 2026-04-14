function combineUsers(...args) {
  // Initialize the return object
  const combinedObject = {
    users: []
  };

  // Loop through args and merge arrays using spread operator
  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  // Get today's date in M/D/YYYY format
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();
  
  combinedObject.merge_date = `${month}/${day}/${year}`;

  // Return the object
  return combinedObject;
}

module.exports = { combineUsers };