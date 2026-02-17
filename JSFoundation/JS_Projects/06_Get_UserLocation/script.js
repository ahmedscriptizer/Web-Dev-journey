document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("container");
  let p = document.createElement("p");
  const button = document.getElementById("get-location-button");

  button.addEventListener("click", () => {
    p.innerText = "Getting location...";
    div.appendChild(p);

    let cityLable = document.createElement("b");
    let tempLabel = document.createElement("b");
    cityLable.innerText = "City: ";
    tempLabel.innerText = "temperature: ";
    async function getWeather(long, lat) {
      let promise = await fetch(
        `http://localhost:3000/weather?lat=${lat}&long=${long}`,
      );
      return await promise.json();
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        let result = await getWeather(
          position.coords.longitude,
          position.coords.latitude,
        );
        p.innerText = "";
        p.append(
          cityLable,
          result.location.name,
          " - ",
          tempLabel,
          result.current.temp_c,
          "°C",
        );
        // div.appendChild(p);
      },
      (error) => {
        console.log("error" + error);
      },
    );
  });
});
