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
