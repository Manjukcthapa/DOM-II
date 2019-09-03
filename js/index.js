// Your code goes here

//load
window.addEventListener('load', event => {
    alert(`Welcome!`)
});




// wheel
window.addEventListener('wheel', event => {
    let navItems = document.querySelector('a');
    navItems.style.color = `blue`;
    navItems.style.background = `red`;
    navItems.style.fontSize = `240px`;
});


//resize
window.addEventListener('resize', event => {
    let navItems = document.querySelector('a');
    navItems.style.color = `blue`;
    navItems.style.background = `pink`;
    navItems.style.fontSize = `25px`;
});

//   dblclick
const navItems = document.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('dblclick', _ => {
        item.style.color = `white`;
        item.style.background = `red`;
        item.style.fontSize = `25px`;
    });

    item.addEventListener('click', event => {
        event.preventDefault();
    });
});


// drag
const funBusBanner = document.querySelector(".intro > img");
funBusBanner.addEventListener('drag', (event) => event.target.style.transform = 'scale(1.5)');

const firstParagraph = document.querySelector("p");
firstParagraph.addEventListener('focus', (event) => event.target.style.background = 'yellow');



// mouseover
const allExpeditionsTitle = document.querySelectorAll('.btn');
const paraimg = document.querySelectorAll("destination");
allExpeditionsTitle.forEach(node => {
    node.addEventListener('mousemove', function (event) {
        event.target.style.color = 'purple';
        event.stopPropagation();
    })
})


//scroll

window.addEventListener(
    "scroll",
    function() {
      const mainNavig = document.querySelector(".main-navigation");
      mainNavig.style.background = "red";

    },
    true
  );
  
  function mySelectFunction() {
    document.getElementById("myText").select();
  }

  //when resizing, fun bus img has border radius change
const funBusImg = document.querySelector(".intro img")
window.addEventListener("resize", function(e) {
    funBusImg.style.borderRadius = "48%";
})

//change text when copying text 
const introHeading = document.querySelector(".intro h2")
introHeading.addEventListener("copy", function(e) {
    introHeading.innerText = "Don't copy me!"
})

// //add spin animation to bottom image
// const destinationImg = document.querySelector(".content-destination img")
// window.addEventListener("scroll", function(e) {
//     TweenMax.to(destinationImg, 3, {
//         rotationY: 360
//     });
// });


// select
footer = document.querySelector('.footer');
//  right click on the footer will change its color 
footer.addEventListener('contextmenu', function () {
    event.target.style.color = 'dodgerblue';
})