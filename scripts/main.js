let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "imgs/OIP.jpg") {
        myImage.setAttribute("src", "imgs/test.png");
    } else {
        myImage.setAttribute("src", "imgs/OIP.jpg");
    }
};

let myButton = document.querySelector("button");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Hello, " + myName;
    }

}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello, " + storedName;
}
myButton.onclick = () => {
    setUserName();
};
