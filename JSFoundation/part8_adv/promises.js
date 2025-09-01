function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched Successfully ");
      } else {
        reject("Error Fetching Data ");
      }
    }, 2000);
  });
}
fetchData()
  .then((data) => {
    console.log(data);
    return "checking .then chaining";
  })
  .then((message) => {
    console.log(message);
    return "Its mean I can use .then as much as I can :)";
  })
  .then((message) => console.log(message))
  .catch((error) => {
    console.log(error);
  });
