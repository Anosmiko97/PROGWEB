import { getBreedDetails} from './ui.js';

const breedId = new URLSearchParams(window.location.search).get('id');
window.addEventListener('DOMContentLoaded', () => getBreedDetails(breedId));

document.getElementById('returnMainPage').addEventListener('click', () => {
    window.close();
    window.history.back();
})

window.addEventListener('DOMContentLoaded', () => loadBreeds(currentPage));