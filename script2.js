const characters = {
  "Rocket Raccoon": {
    info: "A genetically enhanced raccoon with cybernetic implants. He's a brilliant mechanic, tech expert, and weapons specialist.",
    movies: [
      { title: "Gaurdians of galaxy vol 1", link: "https://www.youtube.com/embed/d96cjJhvlMA" }
      
    ]
  },
  "Groot": {
    info: "A tree-like humanoid who can grow, regenerate, and only says “I am Groot.”.",
    movies: [
      { title: "I am Groot season 1", link: "https://www.youtube.com/embed/D7eFpRf4tac" },
      { title: "I am Groot season 2", link: "https://www.youtube.com/embed/1k8H2CywVqg" },
    ]
  },
  "Star-Lord (Peter Quill)": {
    info: "A half-human, half-Celestial space adventurer abducted from Earth as a child. Leader of the Guardians.",
    movies: [
       { title: "Gaurdians of galaxy vol 2", link: "https://www.youtube.com/embed/dW1BIid8Osg" },
      
    ]
  },
  "Gamora": {
    info: "An orphan adopted by Thanos and trained to be an elite assassin. She rebels and joins the Guardians.",
    movies: [
       { title: "Gaurdians of galaxy vol 3", link: "https://www.youtube.com/embed/u3V5KDHRQvk" }]},

  " Drax the Destroyer": {
    info: "A warrior whose family was killed by Thanos. He seeks revenge and often takes things literally.",
    movies: [
      {title: "Avengers:Infinity war", link: "https://www.youtube.com/embed/6ZfuNTqbHE8" }
    ]
  },
  "Mantis": {
    info: "An empath with the ability to sense and alter emotions. Innocent, quirky, and powerful.",
    movies: [
      {  title: "Avengers: Endgame", link: "https://www.youtube.com/embed/TcMBFSGVi1c" }
    ]
  },
  };

// Render all movie cards
window.onload = () => {
  const movieGrid = document.getElementById("movieGrid");
  let allMovies = [];
  Object.values(characters).forEach(char => allMovies.push(...char.movies));
  allMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <iframe src="${movie.link}" frameborder="0" allowfullscreen></iframe>
      <p>${movie.title}</p>`;
    movieGrid.appendChild(card);
  });

  // Create character buttons
  const charButtons = document.getElementById("characterButtons");
  Object.keys(characters).forEach(name => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.addEventListener("mouseenter", () => showCharacter(name));
    charButtons.appendChild(btn);
  });
};

function showCharacter(name) {
  const infoBox = document.getElementById("characterInfo");
  const movieBox = document.getElementById("characterMovies");
  const character = characters[name];

  infoBox.textContent = `${name}: ${character.info}`;
  movieBox.innerHTML = "";
  character.movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <iframe src="${movie.link}" frameborder="0" allowfullscreen></iframe>
      <p>${movie.title}</p>`;
    movieBox.appendChild(card);
  });
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
const images = [
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/guardians-of-the-galaxy2.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/04/guardians-galaxy-2-full-team-header.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT176OKTfw1TSCGxyRF778pPNvcUJsbauM8aDnRmiZ571iO3O89',
  'https://cosmicbook.news/images/2008-guardians-galaxy.jpg'
];

let index = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}, 1000); // every 1 seconds
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission
  alert("Thank you! Your message has been sent.");
  this.reset();
});



