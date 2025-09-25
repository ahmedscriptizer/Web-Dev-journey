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

//   ===================================================================
const PromiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let success = true;
    if (success) {
      resolve("Succesful attempt");
    } else {
      reject("Attempt Failed");
    }
  }, 2000);
});

PromiseOne.then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.log(error);
});

// ========================================================================
//  Using Promise through Async Await

async function consumedPromiseOne() {
  try {
    let response = await PromiseOne;
    console.log(`Async: ${response}`);
  } catch (error) {
    console.log(error);
  }
}
consumedPromiseOne();

// ================  API REQUEST =========================================

/* async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(`User: ${data[0].name}`);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getUsers(); */

// .then .catch format

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    console.log(data[1].name);
  })
  .catch((error) => {
    console.log(error);
  });

//  =======================================================================
//                  Syntax for calling more than one promise

function fetchPostData() {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve("Post fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve("Comment fetched");
    }, 2000);
  });
}

async function Execute() {
  try {
    // const postData = await fetchPostData();
    // const CommentData = await fetchCommentData();

    const [postData, CommentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(CommentData);
  } catch (error) {
    console.log("Error", error);
  }
}
Execute();
