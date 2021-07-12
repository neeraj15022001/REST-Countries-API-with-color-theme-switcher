export function getCountries() {
  return fetch("https://restcountries.eu/rest/v2/all", {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
