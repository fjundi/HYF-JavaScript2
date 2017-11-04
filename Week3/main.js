

// Step 1

// lets see if I correctly linked my html to my css file:
// if you now open your index.html in the browser and open the console you should see: hellooooo, someone there?
console.log('hellooooo, someone there?')


// Step 2
// cool seems to work, did you check as well???


// Step 3
// now we need a button.
// Let's add it in our HTML, since it should always be there (it does not have to appear or disappear at a certain point). -> go to your index.html file for the next step!


// Step 5

// so now we have a button that we don't know if it is being clicked, that sucks.
// in javascript you can do element = document.getElementById(id);
// MDN says that: it returns a reference to the element by its ID; the ID is a string which can be used to uniquely identify the element, found in the HTML id attribute.
// cool seems like something we can use.
// let's create a variable that references to the button id

let x = document.getElementById("button")
// lets console log it and see what x is at this point
console.log(x)

// next we want to add an eventlistener that registers if we click the button
// the first argument is the EVENT we want to register, the second the function we would like to call once this happens.

x.addEventListener("click", onClick)


// Please create your input field in your HTML, not with JS
// let inputField = document.createElement('input');
// inputField.setAttribute("value", "");
// document.body.appendChild(inputField);


// get all repo's :

let allReposUrl = 'https://api.github.com/orgs/HackYourFuture/repos';
console.log(allReposUrl);

// the one you add some stuff to
const urlQuery = 'https://api.github.com/repos/HackYourFuture/';

//for example: https://api.github.com/repos/HackYourFuture/CommandLine



function onClick() {

    console.log("you click me!!!!");
    let y = document.getElementById("input").value;
    console.log(y);

    let url = urlQuery + y;
    console.log(url);

    let newReq = new XMLHttpRequest;
    newReq.open("GET", url, true);
    newReq.send();

     newReq.onreadystatechange = function () {
        if (newReq.readyState === 4 && newReq.status === 200) {
            let rawData = newReq.responseText;

            let parsed = JSON.parse(rawData);

            //            for (let key of parsed)
                            let info = JSON.stringify(parsed);

            //            return info;

            document.getElementById("display").innerHTML =
                info;
            //                         return (rawData);
            //              let resultDiv = document.createElement('div');
            //              document.body.appendChild(resultDiv);
            //              resultDiv.innerHTML = url;
        }
    }

    //    console.log(rawData);
}
