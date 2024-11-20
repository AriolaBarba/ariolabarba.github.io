// Smooth scroll for navigation links
// document.querySelectorAll('nav a').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetSection = document.querySelector(this.getAttribute('href'));
//       targetSection.scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });


const textArray = [
  "I love combining design and < code > to bring ideas to life."


  // "I love combining ",
  // "<span class='design'>design</span>",
  // " and ",
  // "<span class='code'>code</span>",
  // " to bring ideas to life."
];

const typingTextElement = document.getElementById("typing-text");
let wordIndex = 0;      // Current word index in the textArray
let charIndex = 0;      // Current character index within the word
const typingSpeed = 100; // Speed in milliseconds per character

function typeEffect() {
  if (wordIndex < textArray.length) {
      const currentWord = textArray[wordIndex];

      // Add only characters up to the current index
      typingTextElement.innerHTML =
          textArray.slice(0, wordIndex).join("") + // Fully typed words
          currentWord.slice(0, charIndex + 1);    // Current word up to charIndex

      charIndex++;

      if (charIndex < currentWord.length) {
          // Continue typing the current word
          setTimeout(typeEffect, typingSpeed);
      } else {
          // Move to the next word
          wordIndex++;
          charIndex = 0;
          setTimeout(typeEffect, typingSpeed); // Start typing the next word
      }
  }
}

// Start typing when the page loads
window.onload = typeEffect;




// hover word effect

const hoverWords = document.querySelectorAll('.hover-word'); // All words
const popupVideo = document.getElementById('popup-video');   // Video element
const videoDisplay = document.querySelector('.video-display'); // Video container
const hoverContainer = document.querySelector('.hover-container'); // Container for the words

hoverWords.forEach(word => {
  word.addEventListener('mouseenter', () => {
    const videoSrc = word.getAttribute('data-video'); // Get the video source
    popupVideo.src = videoSrc;                       // Set the video source
    videoDisplay.style.display = 'block';            // Show the video
    popupVideo.play();                               // Play the video

    // Center the video relative to the hover-container
    const containerBounds = hoverContainer.getBoundingClientRect(); // Get position and dimensions
    const containerCenter = containerBounds.top + containerBounds.height / 2; // Calculate center
    videoDisplay.style.top = `${containerCenter}px`; // Set video to align with the center
    videoDisplay.style.transform = "translateY(-50%)"; // Adjust for exact centering
  });

  word.addEventListener('mouseleave', () => {
    videoDisplay.style.display = 'none'; // Hide the video
    popupVideo.pause();                  // Pause the video
    popupVideo.src = "";                 // Clear the video source
  });
});
