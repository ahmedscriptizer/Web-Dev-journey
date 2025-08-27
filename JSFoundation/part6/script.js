// challenge # 1
document
  .getElementById("change-text-btn")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("text-paragraph");
    paragraph.innerText =
      "Ahmed Ameer is CEO of biggest sofware indusry in Pakistan";
  });

// challenge # 2

function addhighlight(index) {
  let cities = document.querySelectorAll("#city-list li");

  cities.forEach((city) => {
    city.style.color = "";
    city.style.fontWeight = "";
  });

  cities[index].style.color = "yellow";
  cities[index].style.fontWeight = "bold";
}

document
  .getElementById("highlight-city-btn")
  .addEventListener("click", function () {
    addhighlight(2);
  });

// Example # 3

document
  .getElementById("change-order-btn")
  .addEventListener("click", function () {
    document.getElementById("order-text").innerText = "Order: Espresso";
  });

// Example # 4

function additem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${item}`));
  document.querySelector("#shopping-list").appendChild(li);

  // we can also do by this
  /* li.innerText = `${item}`;
  document.getElementById("shopping-list").appendChild(li); */
}

document.getElementById("add-item-btn").addEventListener("click", function () {
  additem("chocolate");
});

// Example # 5

function removeItem(item) {
  const task = document.querySelectorAll("#task-list li");
  task[0].remove();
}

document
  .getElementById("remove-task-btn")
  .addEventListener("click", function () {
    removeItem(0);
  });

// example # 6
document.getElementById("click-me-btn").addEventListener("click", function () {
  alert("Hi Ahmed ");
});

// Example # 7
document.getElementById("tea-list").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("clicked on " + event.target.textContent);
  }
});

// Example # 8  ** form handling vvv.IMP EXERCISE

document
  .getElementById("feedackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feed = document.getElementById("feedback").value;
    document.getElementById("feedbackDisplay").textContent = `${feed}`;
  });

// Example # 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully Loaded";
});

// Example # 10

/* document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let text = document.getElementById("descriptionText");
    if (text.style.backgroundColor === "yellow") {
      text.style.backgroundColor = "";
      text.style.color = "";
    } else {
      text.style.backgroundColor = "yellow";
      text.style.color = "black";
    }
  });
 */

// Example # 10.2     DONE e.g-10 by using classList

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let text = document.getElementById("descriptionText");
    text.classList.toggle("highlight");
  });
