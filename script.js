// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
        displayDifferentImage();
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#FF1616', '#FF914D', '#FFDE59', '#7ED957', '#5271FF', '#8C52FF', '#7F00FF'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'fish-groove.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'slidepic1 (1).gif'; // Assuming the cat-heart image is named "cat-heart.gif"
   
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container

        var SupImage = new Image();
        SupImage.src =  'wowo.gif';
        SupImage.aly = 'wow';
        SupImage.onload = function()
        {
            imageContainer.appendChild(SupImage);
        }
        
       
        var textParagraph = document.createElement('p');
        // Set the text content
        textParagraph.textContent = 'I Luv You Pookie Wookie';
        
        imageContainer.appendChild(textParagraph);
        document.getElementById('options').style.display = 'none';
    };
}

function changeFont(element , p)
{
    element.style.fontSize = p;
    

}

function displayDifferentImage() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the different image
    var differentImage = new Image();
    // Set the source (file path) for the different image
    differentImage.src = 'Cat-Stare.gif'; // Replace 'different-image.gif' with the actual file name
    
    // Set alternative text for the image (for accessibility)
    differentImage.alt = 'Different Image';
    // When the different image is fully loaded, add it to the image container
    differentImage.onload = function() {
        imageContainer.appendChild(differentImage);
        // Hide the options container
        document.getElementById('question').style.display = 'none';
    };
   
}

// Display the cat.gif initially
displayCat();
