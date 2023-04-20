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
      document.querySelector("#profiles").innerHTML = `<p>name: ${
        responseJson.fullname
      }</p>
      <p>age: ${responseJson.age}</p>
      <p>occupation: ${responseJson.occupation}</p>`;
    });
}

document
  .querySelector("#profile-form")
  .addEventListener("submit", submitProfile);
