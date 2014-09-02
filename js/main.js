//setting variables
var setTimer;
var bodyTag = document.getElementsByTagName("body")[0];
var bgImageText = prompt("Enter the bg image url or hit 'Enter' for a random one!", "");
var storedBgs;

//set the bool for interval count
//if true, start counting
var ranInt = false;

if (bgImageText && bgImageText.length > 0) {
    var imgArr = localStorage.backgroundImg ? JSON.parse(localStorage.backgroundImg) : [];

    //push bg url into an array
    imgArr.push(bgImageText);

    //store array into local storage
    localStorage.backgroundImg = JSON.stringify(imgArr);

    //get json data and assigned it into an array
    storedBgs = JSON.parse(localStorage.backgroundImg);

    //set bg image to the body tag
    bodyTag.setAttribute("style", "background-image:url(" + bgImageText + ");background-size:cover;background-repeat:no-repeat;");

    ranInt = true;
} else {
    if (bgImageText !== null) {
        //get json data and assigned it into an array
        storedBgs = JSON.parse(localStorage.backgroundImg);

        //remove 'null' from array
        storedBgs.splice(storedBgs.indexOf(null), 2);

        //loop through the array
        for (var i = 0; i < storedBgs.length; i++) {

            //randomized bg images
            var randomItem = storedBgs[Math.floor(Math.random() * storedBgs.length)];

            //show random bg
            bodyTag.setAttribute("style", "background-image:url(" + randomItem + ");background-size:cover;background-repeat:no-repeat;");
        }
        ranInt = true;
    }

}

//show a random image every 5 mins
if (ranInt) {
    if (setTimer) {
        clearInterval(setTimer);
        setTimer = null;
    }
    setTimer = setInterval(function () {
        //randomized bg images
        var randomItem = storedBgs[Math.floor(Math.random() * storedBgs.length)];
        //show random bg
        bodyTag.setAttribute("style", "background-image:url(" + randomItem + ");background-size:cover;background-repeat:no-repeat;");
    }, 300000);
}