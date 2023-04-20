function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector("#name-field").value,
    age: document.querySelector("#age-field").value,
    occupation: document.querySelector("#occupation-field").value
  };

  fetch("/api/profile", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      document
        .querySelector("#profiles")
        .insertAdjacentHTML(
          "beforeend",
          `<li>${responseJson.fullname} the ${responseJson.occupation} is ${
            responseJson.age
          } years old.</li>`
        );
    });
}

document
  .querySelector("#profile-form")
  .addEventListener("submit", submitProfile);
