
function showMessage() {
    var messages = [
        "🎉 Congratulations! You just interacted with my first JavaScript function!",
        "✨ Welcome to my web development journey! Thanks for clicking!",
        "🚀 This is just the beginning of my coding adventure!",
        "💻 JavaScript makes websites interactive and fun!",
        "🌟 Every expert was once a beginner. Thanks for being part of my journey!"
    ];
    
    
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
    
   
    var button = document.querySelector('.interactive-btn');
    if (button.innerHTML === "Click Me for a Surprise!") {
        button.innerHTML = "Click Again for Another Message!";
        button.style.backgroundColor = "#27ae60";
    }
}


function displayDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    console.log("Page loaded at: " + dateTimeString);
}


function addDynamicContent() {
    var container = document.querySelector('.container');
    var dynamicSection = document.createElement('div');
    dynamicSection.innerHTML = `
        <h2>🚀 Dynamic Content Added!</h2>
        <p>This section was added dynamically using JavaScript! It demonstrates DOM manipulation.</p>
        <p><strong>Page loaded at:</strong> ${new Date().toLocaleString()}</p>
    `;
    dynamicSection.style.marginTop = '30px';
    dynamicSection.style.padding = '20px';
    dynamicSection.style.backgroundColor = '#e8f5e8';
    dynamicSection.style.borderRadius = '8px';
    dynamicSection.style.border = '2px solid #27ae60';
    
    container.appendChild(dynamicSection);
}


window.onload = function() {

    setTimeout(function() {
        console.log("Welcome to my first webpage! Check out the interactive button below.");
        displayDateTime();
    }, 2000);
    
   
    setTimeout(addDynamicContent, 3000);
    
    
    var clickCount = 0;
    var originalButtonFunction = window.showMessage;
    
    window.showMessage = function() {
        clickCount++;
        console.log("Button clicked " + clickCount + " times");
        originalButtonFunction();
    };
};

function highlightElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
        element.style.transition = 'all 0.3s ease';
        element.style.backgroundColor = '#fff3cd';
        element.style.transform = 'scale(1.02)';
        
        setTimeout(function() {
            element.style.backgroundColor = '';
            element.style.transform = '';
        }, 1000);
    }
}


console.log("🎯 Task 1: Modular Web Development");
console.log("✅ HTML structure loaded");
console.log("✅ CSS styles applied");
console.log("✅ JavaScript functionality initialized");
console.log("📝 This demonstrates separation of concerns in web development!");