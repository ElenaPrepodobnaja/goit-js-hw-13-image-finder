export default function getRefs() {
  return {
    gallery: document.querySelector(".gallery"),
    form: document.querySelector("#search-form"),
    loadMoreBtn: document.querySelector(".gallery__load-btn"),
    sentinel: document.querySelector(".sentinel"),
  };
}
