import "./style.css";
const cartArt1 = document.querySelector("cartArt1");

const Artcontent = [
  {
    imgSrc: "pic01.jpg",
    title: "un super titre",
    text: "lorem ipsum...",
  },
];

for (let i = 0; i < Artcontent.length; i++) {
  const a = Artcontent[i];
  for (let index = 0; index < a.length; index++) {
    console.log(a.imgSrc);
  }
}

// cartArt1.innerHTML = `title = ${Artcontent.title}`;

