document.querySelector(".btn").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

// ________________________________________________
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "01.jpg") {
    myImage.setAttribute("src", "02.jpg");
  } else if (mySrc === "02.jpg"){
    myImage.setAttribute("src", "03.jpg");
  } else {
    myImage.setAttribute("src", "01.jpg");
  }
};

