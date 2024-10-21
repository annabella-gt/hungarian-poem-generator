function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem goes here",
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
