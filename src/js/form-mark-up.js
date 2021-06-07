import formTemplate from "../templates/form.hbs";
const bodyEl = document.querySelector("body");

bodyEl.insertAdjacentHTML("afterbegin", formTemplate());
