const images = ["dog.jpeg", "cat.jpeg"];
const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${randomImg}`;
bgImage.id = "background-image";
document.body.appendChild(bgImage);

if (randomImg === "dog.jpeg") {
  document.body.classList.add("dog-theme");
} else if (randomImg === "cat.jpeg") {
  document.body.classList.add("cat-theme");
}
