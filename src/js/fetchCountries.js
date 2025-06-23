export function countries() {
  const input = document.querySelector(".input-js");
  input.addEventListener("input", onInputClick);
  const COUNTRIES = "https://restcountries.com/v3.1/all?fields=name";
  function onInputClick() {
    fetch(COUNTRIES)
      .then((value, event) => {
        value = event.target.value;
        console.log(value);
        const COUNTRY = `https://restcountries.com/v3.1/name/${value}`;
        console.log(COUNTRY);
        // console.log(value);
      })
      .catch(console.log(`Error`));
  }
}
