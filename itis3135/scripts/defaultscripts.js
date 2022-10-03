var date = new Date();
var pastFeedback = [];

window.onload = function()
{
    document.getElementById("date").innerHTML = "Today is " + date.toLocaleTimeString() + " on " + date.toDateString();

}

function displayWelcome()
{
    var name = document.getElementById("name").value;
    var mood = document.getElementById("mood").value;
    var message = "The ZG welcomes you, " + name + "." +  " We're glad you are doing " + mood + "!";
    alert(message);
}

function pricing()
{
    var service = prompt("Enter a service #: \n1. Web design\n2. Software development\n3. Game development\n4. Technical Assistance", 1);
    var hours = prompt("How many hours? (min 10)", 10);
    
    if(hours <= 10){
        hours = 10;
    }

    if(service == 1){
        alert("That will cost $" + (30 * hours) + ".");
    }else if(service == 2){
        alert("That will cost $" + (50 * hours) + ".");
    }else if(service == 3){
        alert("That will cost $" + (40 * hours) + ".");
    }else if(service == 4){
        alert("That will cost $" + (30 * hours) + ".");
    }else{
        alert("Didn't select a number 1-4! Try again.");
    }
} 

function ratings()
{
    var rating = prompt("Please rate our service 1-5! ", 5);
    if(rating >= 3 && rating <= 5){
        alert("Thanks for the positive review! To give feedback select the 'Feedback' button.");
    }else if(rating < 3 && rating >= 1){
        alert("Select the 'Feedback' button to let us know what we can fix.");
    }else{
        alert("Invalid input: Rating will not be logged.");
    }
}

function feedback()
{
    var feedback = prompt("Please give your honest feedback: ", "Feedback goes here");
    pastFeedback.push(feedback);
    alert("Thanks for the following feedback! We will thoroughly look through this. Feedback: " + "'" + feedback + "'")
}

function paymentMethod()
{
    var nameOnCard = prompt("Enter the name on your card: ", "Bob");
    var cardNum = prompt("Enter your card number: ", "1111 1111 1111 1111");
    var cvv = prompt("Enter your security code: ", "123");
    alert("Card has been added! \nName: " + nameOnCard + "\nNumber: " + cardNum + "\nCVV: " + cvv);
}

function pastReviews()
{
    var allReviews = "Reviews: \n";
    for(var i = 0; i < pastFeedback.length; i++){
        allReviews = allReviews + "\n\n" + (i + 1) + ". " + pastFeedback[i];
    }
    alert(allReviews);
}

function getShape()
{
    while(true){
        const polygons = ["Henagon", "Digon", "Trigon", "Tretragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Enneagon", "Decagon"];
        let input = prompt("The Zoomin Giraffe would like a number 1-10: ", 1);
        if(!validateEntry(input)){
            continue;
        }else{
            alert(polygons[Math.abs(Math.round(input)) - 1]);
            break;
        }
    }

}

function validateEntry(input)
{
    if(isNaN(input)){
        return false;
    }
    
    if(input < -10 || input > 10 || input == 0 || input == null)
    {
        return false;
    }
    
    return true;
    
}
