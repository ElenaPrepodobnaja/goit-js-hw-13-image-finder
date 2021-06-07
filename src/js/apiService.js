const API_URL = "https://pixabay.com/api/";
const API_KEY = "18944189-177b692c9d9a1e8dfd1f135d6";
const MAIN_SEARCH_SETTINGS = "?image_type=photo&orientation=horizontal&";

export default class ApiImagesService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  async fetchImages() {
    const url = `${API_URL}${MAIN_SEARCH_SETTINGS}q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return await fetch(url).then((response) => {
      this.incrementPage();
      return response.json();
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
