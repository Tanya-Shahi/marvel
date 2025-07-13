const characters = {
  "Iron Man": {
    info: "Tony Stark, a billionaire genius in a high-tech suit.",
    movies: [
      { title: "Iron Man", link: "https://www.youtube.com/embed/8ugaeA-nMTc" },
      { title: "Avengers: Endgame", link: "https://www.youtube.com/embed/TcMBFSGVi1c" }
    ]
  },
  "Thor": {
    info: "God of Thunder and prince of Asgard.",
    movies: [
      { title: "Thor: Ragnarok", link: "https://www.youtube.com/embed/ue80QwXMRHg" },
    ]
  },
  "Spider-Man": {
    info: "Peter Parker, a teenager with spider-like abilities.",
    movies: [
      { title: "Spider-Man: No Way Home", link: "https://www.youtube.com/embed/JfVOs4VSpmA" },
      { title: "Avengers: Infinity War", link: "https://www.youtube.com/embed/6ZfuNTqbHE8" }
    ]
  },
  "Black Widow": {
    info: "Born in Russia, Natasha was trained as a spy, martial artist, and sniper in the Red Room, a top-secret Soviet training program.",
    movies: [
      { title: "Black Widow", link: "https://www.youtube.com/embed/ybji16u608U"}]},

  "Captain America": {
    info: "Steves Grant Rogers, a frail but determined young man who volunteered for the U.S. Army during World War II. Rejected due to his physical condition, he was selected for the Super Soldier Program.",
    movies: [
      { title: "Captain America:The First Avenger(2011)", link: "https://www.youtube.com/embed/qi5UTD7kEr0"},
      { title: "Captain America:Brave New World", link: "https://www.youtube.com/embed/1pHDWnXmK7Y" },
      { title: "Captain America:Civil War", link:"https://www.youtube.com/embed/dKrVegVI0Us"}
    ]
  },
  "Scarlet Witch": {
    info: "Wanda and her twin brother Pietro Maximoff (Quicksilver) were originally orphans who volunteered for Hydra's experiments, gaining powers from the Mind Stone.",
    movies: [
      { title: "Scarlet Witch", link: "https://www.youtube.com/embed/U4PykHiG6Rw" },
      { title: "Avengers:The age of Ultron", link: "https://www.youtube.com/embed/ZeIa7xGDq8c" }
    ]
  },
  "Doctor Strange":{
    info: "A brilliant neurosurgeon who loses the use of his hands in an accident.Trains in mystic arts at Kamar-Taj and becomes a powerful sorcerer.",
    movies:[
      {title:"Doctor strange",link:"https://www.youtube.com/embed/Lt-U_t2pUHI"}]
    }};

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
  'https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a364ee04-6380-4393-a551-2199250f57bf/dbtspza-04318586-4f6e-4363-b1b9-b9f285b1d475.jpg/v1/fill/w_1024,h_626,q_75,strp/the_avengers___wallpaper_by_daviddv1202_dbtspza-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI2IiwicGF0aCI6IlwvZlwvYTM2NGVlMDQtNjM4MC00MzkzLWE1NTEtMjE5OTI1MGY1N2JmXC9kYnRzcHphLTA0MzE4NTg2LTRmNmUtNDM2My1iMWI5LWI5ZjI4NWIxZDQ3NS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D1AUjxXBzPIp_-Wq458tK5qIbcHjfuIW0C7sBpyYNx4',
  'https://m.media-amazon.com/images/I/71QcIKHlf4L.jpg',
  'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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



