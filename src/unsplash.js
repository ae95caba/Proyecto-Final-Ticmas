async function getImage(nameToQuery, elementId) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const key = "01kP0ZqGfKRNHZNQJY9w1jqAffuQIZqkZAG6w1bsMsU";
  const url = `https://api.unsplash.com/search/photos?query=${nameToQuery}&client_id=${key}`;
  const response = await fetch(url, {
    mode: "cors",
  });
  const obj = await response.json();

  const resultsLength = obj.results.length;

  const imgUrl = obj.results[getRandomInt(0, resultsLength - 1)].urls.full;

  const listaDeTareas = document.getElementById(elementId);
  listaDeTareas.src = `${imgUrl}`;
}

export default getImage;
