/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(menuArray){

  const menu = document.createElement('div');
  menu.classList.add('menu');
  console.log(menu)

  const ul = document.createElement('ul');

  menu.appendChild(ul);

  
  for(i=0;i<menuArray.length;i++){
    const li= document.createElement('li');
    li.textContent= menuArray[i];
    ul.appendChild(li);
    
  }
  
  // menuButton = document.querySelector('.menu-button');
  // let count = 1;
  // menuButton.addEventListener('click', (e) => {
  
  // //Stretch Sliding menu
  // count++;
  // console.log(count);
  // if (!(count%2)){
  //    TweenMax.from(".menu", 3, {x:-300, opacity:0, scale:1});
  //   // TweenMax.to(menu, .2, {x: "0px"})
  //    menu.classList.toggle('menu--open');
  // }
  // else {
  //  TweenMax.to(".menu", 3, {x:'-400px', opacity:0, scale:1});
  // // TweenMax.to(menu, .2, {x: "-400px"})
  // menu.classList.toggle('menu--close');
  // }
   
  
  
// })

  return menu;
}
const header = document.querySelector('.header');
const menu= createMenu(menuItems);
header.appendChild(menu);

menuButton = document.querySelector('.menu-button');
  let count = 1;
  menuButton.addEventListener('click', (e) => {
  
  //Stretch Sliding menu
  count++;
  console.log(count);
  if (!(count%2)){
    
     TweenMax.to(menu, 0.8, {x: "0px"})
     menu.classList.toggle('menu--open');
  }
  else {
   
  
  TweenMax.to(menu, 0.8, {x: "-400px"})
  menu.classList.toggle('menu--close');
  }
   
})





