//Adding an image changer -->  how to use JavaScript and DOM API features to alternate the display of one of two images. This change will happen as a user clicks the displayed image.

const myImage=document.querySelector("img");

myImage.onclick = () => {
    const mySrc=myImage.getAttribute("src");
    if (mySrc === "images/photo1.jpeg"){
        myImage.setAttribute("src","images/photo2.jpg");
    }
    else{
        myImage.setAttribute("src","images/photo1.jpeg")
    }
};

/* This is what happened. 
You stored a reference to your <img> element in myImage.
Next, you made its onclick event handler property equal to a function with no name (an "anonymous" function). 
So every time this element is clicked:
--The code retrieves the value of the image's src attribute.
--The code uses a conditional to check if the src value is equal to the path of the original image:
  -If it is, the code changes the src value to the path of the second image, forcing the other image to be loaded inside the <img> element.
  -If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.*/

//ADDING PERSONALIZED WELCOME MESSAGE
//Added <button>Change user</button> in HTML page above script element

let myButton=document.querySelector("button");  // Creating a myButton variable for <button> element
let myHeading=document.querySelector("h1");   // Creating a myHeading variable for <h1> element

//Code for setting a personalized greeting

function setUserName() {
    const myName=prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }
    else{
    localStorage.setItem("name",myName);
    myHeading.textContent= `Hi ${myName},this is my first JavaScript program`;
    }
}


//The setUserName() function contains a prompt() function, which displays a dialog box, similar to alert().
//This prompt() function does more than alert(), asking the user to enter data, and storing it in a variable after the user clicks OK. In this case, we are asking the user to enter a name.
/* Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later.
We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name. */
//Finally, we set the textContent of the heading to a string, plus the user's newly stored name.

if(!localStorage.getItem("name")){
    setUserName();
}
else
{
    const storedName=localStorage.getItem("name");
    myHeading.textContent= `Hi ${storedName}, look at my first JavaScript program`;
}

//This first line of this block uses the negation operator (logical NOT, represented by the !) to check whether the name data exists. If not, the setUserName() function runs to create it.
/* If it exists (that is, the user set a user name during a previous visit), we retrieve the stored name using getItem() and 
set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().*/

myButton.onclick = () =>{
    setUserName();
};
//This is a onclick event handler, which when clicked, runs the setUserName() function.

//When the dialog appears to enter the name, if you click on cancel, then in the place of name it shows null, because when you cancel the prompt, the value is set as null
//and if you just click okay in the dialog box without entering the name, it displays Hi, this is my first JavaScript program
//To avoid these problems, you could check that the user hasn't entered a blank name. Update your setUserName() function to this:

/* function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

--In human language, this means: If myName has no value, run setUserName() again from the start. If it does have a value (if the above statement is not true), 
then store the value in localStorage and set it as the heading's text.
*/