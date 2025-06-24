export function countries() {
  const input = document.querySelector(".input-js");
  const container = document.querySelector(".container");
  const capital = document.querySelector(".capital");
  const population = document.querySelector(".population");
  const flag = document.querySelector(".flag");

  input.addEventListener("input", _.debounce(onInputClick, 500));

  const COUNTRIES = "https://restcountries.com/v3.1/all?fields=name";
  function onInputClick(event) {
    fetch(COUNTRIES)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        data.forEach((country) => {
          const countryName = country.name.common;
          const valueInput = event.target.value;

          valueInput.split("").join(" ");

          console.log(valueInput.split("").join(" "));

          if (countryName.toLowerCase().includes(valueInput.toLowerCase())) {
            data.find((c) => {
              countryName.includes(valueInput);
            });
            const p = document.createElement("p");
            p.innerHTML = countryName;
            container.appendChild(p);
          }
        });
      })
      .catch(() => {
        console.log("Error");
      });
  }
}
