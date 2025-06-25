export function countries() {
  const input = document.querySelector(".input-js");
  const container = document.querySelector(".container");

  input.addEventListener("input", onInputClick);

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
        container.innerHTML = "";
        const valueInput = event.target.value.trim().toLowerCase();
        if (valueInput === "") return;

        data.forEach((country) => {
          const countryName = country.name.common;
          const p = document.createElement("p");
          if (countryName.toLowerCase().includes(valueInput)) {
            p.innerHTML = countryName;
            container.appendChild(p);
          }
        });

        const matches = Array.from(container.children);

        if (matches.length > 10) {
          alert.classList.add("active");
          alert.classList.remove("hidden");
          container.classList.add("hidden");
        } else if (matches.length >= 2 && matches.length <= 10) {
          alert.classList.remove("active");
          alert.classList.add("hidden");
          container.classList.remove("hidden");
          container.classList.add("active");
        } else {
          alert.classList.remove("active");
          alert.classList.add("hidden");
          container.classList.remove("active");
        }
      })

      .catch(() => {
        console.log("Error");
      });
  }
}
