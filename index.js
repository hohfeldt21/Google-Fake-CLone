const searchInput = document.querySelector("#search__input");

searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;
  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&oq=" +
    input +
    "&aqs=chrome.0.0i131i355i433i512j46i131i433i512j46i131i199i433i465i512j46i433i512j46i131i433j46i131i199i433i465i512j0i512j46i433i512j0i512j0i131i433i512.890j0j7&sourceid=chrome&ie=UTF-8";
}
