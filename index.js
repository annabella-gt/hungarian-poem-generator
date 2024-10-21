function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "d089054a2630e64bfc08bbc6o4f01t65";
  let prompt = `User instructions: please generate a short poem in Hungarian about ${instructionInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem and seperate each line with a <br/>. Please don't include a title. Make sure to follow the user instructions. Sign it as 'SheCodes AI' at the bottom in <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
