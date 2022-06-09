// let paragraph = document.getElementById('paragraph');

// console.log(paragraph);// <== <p id="paragraph">What is your name?</p>

// let h2Tag = document.createElement('h2');
// h2Tag.innerHTML = "Elephant";
// let parent = document.getElementsByTagName('body')[0];
// parent.appendChild(h2Tag);
// console.log(h2Tag);// <== <h2></h2>

// let parent = document.getElementById("content");
// let title = document.getElementById('title')

// parent.removeChild(title);

// let contentDiv = document.getElementById('content');
// contentDiv.innerHTML = "";// clears the whole element

// let button = document.getElementById("add-item-button");
// // let button2 = document.getElementById("add-item-button2");
// const buttonsClick = () => console.log("something");

// button.addEventListener("click", buttonsClick);

// input = document.getElementsByTagName('input')[0];
// console.log(input.value);//=> ""

const changeSrc = (src) => {
  console.log("object");
  const sourceOne =
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg";
  const sourceTwo =
    "https://dictionary.cambridge.org/es/images/thumb/cat_noun_001_02368.jpg";

  const img = document.getElementsByTagName("img")[0];
  console.log(img);
  if (src === 1) {
    img.src = sourceOne;
  } else if (src === 2) {
    img.src = sourceTwo;
  }
};

// getElementById + innerHTML
// console.log("JS connected"); // <== just a quick check up to make sure js doc is connected properly

// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById"
// let theCatDiv = document.getElementById("cat");

// console.log(theCatDiv); // <== what can you see in browser's console

// // TO ADD TEXT TO DOM USE "innerHTML"
// theCatDiv.innerHTML = "I'm a cat";

// // set the HTML content of "otherElement" to "I'm a cat"
// const otherElement = document.getElementById('other-element')
// otherElement.innerHTML = theCatDiv.innerHTML;

// console.log(otherElement)

// //element.style
// theCatDiv.style.backgroundColor = "red";
// theCatDiv.style.border          = "2px green solid";
// theCatDiv.style.fontSize        = "50px";
// theCatDiv.style.marginTop       = "30px";
// theCatDiv.style.paddingBottom   = "30px";

// //getElementsByClasName()
// let test = document.getElementById('test')
// let insideTest = test.getElementsByClassName('testchild');

// console.log(insideTest); // <== HTMLCollection(3) [div.mouse, div.mouse, div.mouse]

// //Iterate over an HTML Collection
// let miceArray = [...mice];
// console.log(miceArray);// <== [div.mouse, div.mouse, div.mouse]

// //Accessing element by tag name
// let divs = document.getElementsByTagName('div');
// console.log(divs);// <== [div#cat, div.mouse, div.mouse, div.mouse]

// //querySelector()
// let firstMouse = document.querySelector('.mouse');
// let firstDiv = document.querySelector('div');

// console.log(firstMouse, firstDiv);

// console.log(firstMouse);// <== <div class="mouse"></div>
// console.log(firstDiv);// <== <div id="cat" style="background-color: red; border: 2px solid green; font-size: 50px; margin-top: 30px; padding-bottom: 30px;">I'm a cat</div>

// //querySelectorAll()
// let allDivs = document.querySelectorAll(".mouse, #cat, h1");
// console.log(allDivs);
// // <== NodeList(4) [div#cat, div.mouse, div.mouse, div.mouse]

// //Getting and setting the class name
// let mouse1 = document.querySelector(".mouse");
// console.log(mouse1.className);// <== mouse
// mouse1.className = "not-mouse"
// let el = document.getElementById('item');

// if (el.className === 'active'){
//   el.className = 'inactive';
// } else {
//   el.className = 'active';
// }
