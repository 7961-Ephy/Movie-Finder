async function fetchMovie() {
  try {
    //   Getting the elements from html
    let movieName = document.getElementById("movie-name").value;
    // formatInput(movieName);
    let movie = document.getElementById("title");
    let rating = document.getElementById("rating");
    let movieImg = document.getElementById("movie-img");
    let rated = document.getElementById("rated");
    let year = document.getElementById("year");
    let runtime = document.getElementById("runtime");
    let plot = document.getElementById("plot");
    let cast = document.getElementById("cast");

    //   Url and Key Variables
    const key = "dbf96212";
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    //   Fetching the API
    const response = await fetch(url);

    //   Checking the status of the response fetched
    if (!response.ok) {
      throw new error("Failed to fetch movie!");
    }

    //   Convert the data into a JSON string
    const data = await response.json();

    //   Parsing the data to update our UI
    movieImg.src = data.Poster;
    movie.innerHTML = data.Title;
    rating.innerHTML = data.Ratings[0].Value;
    rated.innerHTML = data.Rated;
    year.innerHTML = data.Year;
    runtime.innerHTML = data.Runtime;
    plot.innerHTML = data.Plot;
    cast.innerHTML = data.Actors;

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

let search = document.getElementById("search-btn");
search.addEventListener("click", () => {
  let updatedUI = document.getElementById("result");
  updatedUI.style.display = "block";
  fetchMovie();
});

// // Format the Input into a Form that the API accepts
// function formatInput(input) {
//   // Trim any leading or trailing whitespace
//   input = input.trim();

//   // Split the input into words
//   let words = input.split(/\s+/);

//   // Format Each Word
//   let formattedWords = words.map((word, index) => {
//     // Capitalize the first letter of each word
//     return word.charAt(0).toUppercase() + word.slice(1).toLowerCase();
//   });
//   // Join the words together
//   return formattedWords.join(" ");
// }
