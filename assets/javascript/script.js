// Intersection observer for heading animations
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all heading elements
  const headings = document.querySelectorAll('.heading-title-one, .heading-title-two, .heading-subtitle');
  headings.forEach(heading => observer.observe(heading));

  // Event listeners for Artifact 1 hotspots
  const firstHotspot = document.getElementById('artifact-one-hotspot-one');
  const secondHotspot = document.getElementById('artifact-one-hotspot-two');
  const thirdHotspot = document.getElementById('artifact-one-hotspot-three');

  if (firstHotspot && secondHotspot && thirdHotspot) {
    firstHotspot.addEventListener('click', () => {
      document.getElementById('artifact-one-hotspot-one-info').style.display = 'block';
      document.getElementById('artifact-one-hotspot-two-info').style.display = 'none'; 
      document.getElementById('artifact-one-hotspot-three-info').style.display = 'none';
    });

    secondHotspot.addEventListener('click', () => {
      document.getElementById('artifact-one-hotspot-two-info').style.display = 'block';
      document.getElementById('artifact-one-hotspot-one-info').style.display = 'none';
      document.getElementById('artifact-one-hotspot-three-info').style.display = 'none';
    });

    thirdHotspot.addEventListener('click', () => {
      document.getElementById('artifact-one-hotspot-three-info').style.display = 'block';
      document.getElementById('artifact-one-hotspot-one-info').style.display = 'none';
      document.getElementById('artifact-one-hotspot-two-info').style.display = 'none';
    });

  } else {
    console.error('Hotspot elements not found');
  }

  // Event listeners for Artifact 2 hotspots
  const fourthHotspot = document.getElementById('artifact-two-hotspot-one');
  const fifthHotspot = document.getElementById('artifact-two-hotspot-two');
  const sixthHotspot = document.getElementById('artifact-two-hotspot-three');

  if (fourthHotspot && fifthHotspot && sixthHotspot) {
    fourthHotspot.addEventListener('click', () => {
      document.getElementById('artifact-two-hotspot-one-info').style.display = 'block';
      document.getElementById('artifact-two-hotspot-two-info').style.display = 'none';
      document.getElementById('artifact-two-hotspot-three-info').style.display = 'none';
    });

    fifthHotspot.addEventListener('click', () => {
      document.getElementById('artifact-two-hotspot-two-info').style.display = 'block';
      document.getElementById('artifact-two-hotspot-one-info').style.display = 'none';
      document.getElementById('artifact-two-hotspot-three-info').style.display = 'none';
    });

    sixthHotspot.addEventListener('click', () => {
      document.getElementById('artifact-two-hotspot-three-info').style.display = 'block';
      document.getElementById('artifact-two-hotspot-one-info').style.display = 'none';
      document.getElementById('artifact-two-hotspot-two-info').style.display = 'none';
    });

  } else {
    console.error('Hotspot elements not found');
  }

  // Event listeners for Artifact 3 hotspots
  const sevenHotspot = document.getElementById('artifact-three-hotspot-one');
  const eightHotspot = document.getElementById('artifact-three-hotspot-two');
  const nineHotspot = document.getElementById('artifact-three-hotspot-three');

  if (sevenHotspot && eightHotspot && nineHotspot) {
    sevenHotspot.addEventListener('click', () => {
      document.getElementById('artifact-three-hotspot-one-info').style.display = 'block';
      document.getElementById('artifact-three-hotspot-two-info').style.display = 'none';
      document.getElementById('artifact-three-hotspot-three-info').style.display = 'none';
    });

    eightHotspot.addEventListener('click', () => {
      document.getElementById('artifact-three-hotspot-two-info').style.display = 'block';
      document.getElementById('artifact-three-hotspot-one-info').style.display = 'none';
      document.getElementById('artifact-three-hotspot-three-info').style.display = 'none';
    });

    nineHotspot.addEventListener('click', () => {
      document.getElementById('artifact-three-hotspot-three-info').style.display = 'block';
      document.getElementById('artifact-three-hotspot-one-info').style.display = 'none';
      document.getElementById('artifact-three-hotspot-two-info').style.display = 'none';
    });

  } else {
    console.error('Hotspot elements not found');
  }
});

// Header Navigation & Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');
  let timeoutId;

  // Toggle 'show' class when hamburger menu is clicked
  hamburgerMenu.addEventListener('click', () => {
    console.log('Hamburger clicked'); // Debugging
    navLinks.classList.toggle('show');
  });

  // Handle mouse enter/leave for both elements
  hamburgerMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    navLinks.classList.add('show');
  });

  navLinks.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
  });

  hamburgerMenu.addEventListener('mouseleave', () => {
    handleMouseLeave();
  });

  navLinks.addEventListener('mouseleave', () => {
    handleMouseLeave();
  });

  function handleMouseLeave() {
    timeoutId = setTimeout(() => {
      if (!hamburgerMenu.matches(':hover') && !navLinks.matches(':hover')) {
        navLinks.classList.remove('show');
      }
    }, 300);
  }
});

// Hero Carousel Implementation
function initHeroCarousel() {
  const heroCarousel = document.querySelector('.hero-carousel');
  if (!heroCarousel) return;

  const heroImages = heroCarousel.querySelectorAll('.hero-image');
  const heroDots = heroCarousel.querySelectorAll('.hero-dot');
  let currentHeroIndex = 0;
  let heroInterval;

  function showHeroSlide(index) {
    // Hide all images first
    heroImages.forEach(image => {
      image.style.opacity = '0';
      image.style.zIndex = '0';
    });
    
    // Show selected image
    heroImages[index].style.opacity = '1';
    heroImages[index].style.zIndex = '1';
    
    // Update dots
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextHeroSlide() {
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    showHeroSlide(currentHeroIndex);
  }

  // Add click handlers to dots
  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentHeroIndex = index;
      showHeroSlide(currentHeroIndex);
      resetHeroInterval();
    });
  });

  function resetHeroInterval() {
    if (heroInterval) {
      clearInterval(heroInterval);
    }
    heroInterval = setInterval(nextHeroSlide, 3000);
  }

  // Initialize first slide and start interval
  showHeroSlide(0);
  resetHeroInterval();
}

// Initialize hero carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
});

// General Carousel Functionality
function initCarousel(carouselElement) {
  const slides = carouselElement.querySelectorAll('.carousel-image, .hero-image');
  const dots = carouselElement.querySelectorAll('.dot, .hero-dot');
  let currentSlide = 0;
  const interval = parseInt(carouselElement.dataset.interval) || 3000;

  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Start automatic slideshow
  setInterval(nextSlide, interval);
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', () => {
  // Initialize hero carousel
  const heroCarousel = document.querySelector('.hero-slides');
  if (heroCarousel) {
    initCarousel(heroCarousel);
  }

  // Initialize all content carousels
  const contentCarousels = document.querySelectorAll('.carousel-slides');
  contentCarousels.forEach(carousel => {
    initCarousel(carousel);
  });
});

// Tab System Implementation
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const isMobile = window.innerWidth <= 768;

  // Function to reset 3D model hotspot info
  function resetHotspotInfo() {
    // Reset Artifact 1 (Life) hotspot info
    const artifactOneHotspots = [
      'artifact-one-hotspot-one-info', 
      'artifact-one-hotspot-two-info', 
      'artifact-one-hotspot-three-info'
    ];
    artifactOneHotspots.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.style.display = 'none';
    });

    // Reset Artifact 2 (Presidency) hotspot info
    const artifactTwoHotspots = [
      'artifact-two-hotspot-one-info', 
      'artifact-two-hotspot-two-info', 
      'artifact-two-hotspot-three-info'
    ];
    artifactTwoHotspots.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.style.display = 'none';
    });

    // Reset Artifact 3 (Legacy) hotspot info
    const artifactThreeHotspots = [
      'artifact-three-hotspot-one-info', 
      'artifact-three-hotspot-two-info', 
      'artifact-three-hotspot-three-info'
    ];
    artifactThreeHotspots.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.style.display = 'none';
    });
  }

  // Set initial active tab
  tabButtons[0].classList.add('active');
  tabContents[0].classList.add('active');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      
      // Reset hotspot info before changing tabs
      resetHotspotInfo();
      
      // Mobile accordion behavior
      if (window.innerWidth <= 768) {
        if (button.classList.contains('active')) {
          button.classList.remove('active');
          document.getElementById(tabId).classList.remove('active');
        } else {
          // Close other tabs
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Open clicked tab
          button.classList.add('active');
          document.getElementById(tabId).classList.add('active');
        }
      } 
      // Desktop tab behavior
      else {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      }

      // Stop all audio players when switching tabs
      document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    });
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
      location.reload(); // Refresh page to switch between mobile/desktop layouts
    }
  });
});

// Navigation and Tab Integration
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('#nav-links a');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinksContainer = document.getElementById('nav-links');
  let timeoutId;

  // Hamburger Menu Functionality (Restored)
  hamburgerMenu.addEventListener('click', () => {
    console.log('Hamburger clicked'); // Debugging
    navLinksContainer.classList.toggle('show');
  });

  // Handle mouse enter/leave for hamburger menu
  hamburgerMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    navLinksContainer.classList.add('show');
  });

  navLinksContainer.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
  });

  hamburgerMenu.addEventListener('mouseleave', handleMouseLeave);
  navLinksContainer.addEventListener('mouseleave', handleMouseLeave);

  function handleMouseLeave() {
    timeoutId = setTimeout(() => {
      if (!hamburgerMenu.matches(':hover') && !navLinksContainer.matches(':hover')) {
        navLinksContainer.classList.remove('show');
      }
    }, 300);
  }

  // Function to stop all audio playback
  function stopAllAudio() {
    document.querySelectorAll('audio').forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  // Function to reset 3D model hotspot info
  function resetHotspotInfo() {
    // Reset Artifact 1 (Life) hotspot info
    const artifactOneHotspots = [
      'artifact-one-hotspot-one-info', 
      'artifact-one-hotspot-two-info', 
      'artifact-one-hotspot-three-info'
    ];
    artifactOneHotspots.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.style.display = 'none';
    });

    // Reset Artifact 2 (Presidency) hotspot info
    const artifactTwoHotspots = [
      'artifact-two-hotspot-one-info', 
      'artifact-two-hotspot-two-info', 
      'artifact-two-hotspot-three-info'
    ];
    artifactTwoHotspots.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.style.display = 'none';
    });

    // Reset Artifact 3 (Legacy) hotspot info
    const artifactThreeHotspots = [
      'artifact-three-hotspot-one-info', 
      'artifact-three-hotspot-two-info', 
      'artifact-three-hotspot-three-info'
    ];
    artifactThreeHotspots.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.style.display = 'none';
    });
  }

  // Function to activate tab and update styling
  function activateTab(tabId) {
    // Stop all audio playback
    stopAllAudio();

    // Reset hotspot info for all artifacts
    resetHotspotInfo();

    // Remove active class from all tabs and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => {
      content.style.display = 'none';
      content.classList.remove('active');
    });

    // For mobile: reset all tab headers background color
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.tab-header').forEach(header => {
        header.style.backgroundColor = '#0097b2';
        header.classList.remove('active');
      });

      // Set active tab header background color
      const activeHeader = document.querySelector(`.tab-header[data-tab="${tabId}"]`);
      if (activeHeader) {
        activeHeader.style.backgroundColor = '#017e94';
        activeHeader.classList.add('active');
      }
    }

    // Add active class to selected tab and show content
    const selectedTab = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    const selectedContent = document.getElementById(tabId);
    
    if (selectedTab && selectedContent) {
      selectedTab.classList.add('active');
      selectedContent.style.display = 'block';
      selectedContent.classList.add('active');
    }

    // Close hamburger menu
    navLinksContainer.classList.remove('show');
  }

  // Handle navigation link clicks (including hamburger menu)
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      
      // Scroll to tabs section
      document.getElementById('tabs-section').scrollIntoView({ behavior: 'smooth' });
      
      // Activate the corresponding tab
      activateTab(tabId);

      // For mobile: scroll to the active tab header
      if (window.innerWidth <= 768) {
        const activeHeader = document.querySelector(`.tab-header[data-tab="${tabId}"]`);
        if (activeHeader) {
          setTimeout(() => {
            activeHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    });
  });

  // Handle tab button clicks
  tabButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      
      // Scroll to tabs section
      document.getElementById('tabs-section').scrollIntoView({ behavior: 'smooth' });
      
      // Activate the corresponding tab
      activateTab(tabId);
    });
  });

  // Handle URL hash on page load
  if (window.location.hash) {
    const tabId = window.location.hash.substring(1);
    activateTab(tabId);
  } else {
    // Set default tab (About) if no hash
    activateTab('about');
  }
});

// Mobile Tab System Implementation
function initMobileTabs() {
  // Only run on mobile
  if (window.innerWidth > 768) return;

  // Prevent multiple initializations
  if (document.querySelector('.tab-header')) return;

  const tabContents = document.querySelectorAll('.tab-content');
  
  tabContents.forEach(content => {
    const tabId = content.id;
    const tabHeader = document.createElement('button');
    tabHeader.className = 'tab-header';
    tabHeader.textContent = tabId.charAt(0).toUpperCase() + tabId.slice(1);
    tabHeader.setAttribute('data-tab', tabId);
    
    // Function to reset hotspot info
    function resetHotspotInfo() {
      // Reset Artifact 1 (Life) hotspot info
      const artifactOneHotspots = [
        'artifact-one-hotspot-one-info', 
        'artifact-one-hotspot-two-info', 
        'artifact-one-hotspot-three-info'
      ];
      artifactOneHotspots.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = 'none';
      });

      // Reset Artifact 2 (Presidency) hotspot info
      const artifactTwoHotspots = [
        'artifact-two-hotspot-one-info', 
        'artifact-two-hotspot-two-info', 
        'artifact-two-hotspot-three-info'
      ];
      artifactTwoHotspots.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = 'none';
      });

      // Reset Artifact 3 (Legacy) hotspot info
      const artifactThreeHotspots = [
        'artifact-three-hotspot-one-info', 
        'artifact-three-hotspot-two-info', 
        'artifact-three-hotspot-three-info'
      ];
      artifactThreeHotspots.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = 'none';
      });
    }
    
    // Set default active state for About tab
    if (tabId === 'about') {
      tabHeader.classList.add('active');
      tabHeader.style.backgroundColor = '#017e94';
      content.classList.add('active');
      content.style.display = 'block';
    } else {
      tabHeader.style.backgroundColor = '#0097b2';
      content.style.display = 'none';
    }
    
    // Insert header before content
    content.parentNode.insertBefore(tabHeader, content);
    
    // Add click handler to header
    tabHeader.addEventListener('click', () => {
      // Reset hotspot info
      resetHotspotInfo();

      // Stop all audio playback
      document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      
      // Reset all tab headers and contents
      document.querySelectorAll('.tab-header').forEach(header => {
        header.classList.remove('active');
        header.style.backgroundColor = '#0097b2';
      });
      
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none';
      });
      
      // Activate clicked tab
      content.classList.add('active');
      content.style.display = 'block';
      tabHeader.classList.add('active');
      tabHeader.style.backgroundColor = '#017e94';
      
      // Scroll to the tab header with smooth behavior
      tabHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Modify resize event listener
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Remove existing headers
    document.querySelectorAll('.tab-header').forEach(header => header.remove());
    
    // Reinitialize tabs
    initMobileTabs();
  }, 250);
});

// Initialize on load
window.addEventListener('load', initMobileTabs);





// Quiz Data
const quizData = [
  {
    question: "What nickname was given to Abraham Lincoln for splitting rails?",
    options: ["The Rail-splitter", "The Flatboat Captain", "The Honest Lawyer", "The Great Speaker"],
    correct: 0,
  },
  {
    question: "What significant speech did Lincoln deliver at the dedication of a national cemetery?",
    options: ["The Emancipation Speech", "The Gettysburg Address", "The Union Speech", "The Freedom Proclamation"],
    correct: 1,
  },
  {
    question: "In which year was the Emancipation Proclamation issued?",
    options: ["1861", "1863", "1865", "1860"],
    correct: 1,
  },
  {
    question: "Which state was Abraham Lincoln born in?",
    options: ["Illinois", "Kentucky", "Indiana", "Ohio"],
    correct: 1,
  },
  {
    question: "What was Abraham Lincoln's profession before politics?",
    options: ["Lawyer", "Farmer", "Blacksmith", "Doctor"],
    correct: 0,
  },
  {
    question: "Which war took place during Lincoln's presidency?",
    options: ["World War I", "The Civil War", "The Mexican-American War", "The Revolutionary War"],
    correct: 1,
  },
  {
    question: "What did the 13th Amendment signed by Lincoln accomplish?",
    options: ["Ended slavery", "Granted women the right to vote", "Established income tax", "Limited presidential terms"],
    correct: 0,
  },
];

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const startBtn = document.getElementById("start-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

let currentQuestionIndex = 0;
let correctAnswers = 0;

// Functions
function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  // Update Progress Bar
  updateProgress();

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("quiz-button");
    button.classList.add("quiz-button");
    button.textContent = option;
    button.onclick = () => handleAnswer(index, button);
    optionsContainer.appendChild(button);
  });

  prevBtn.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
}

function handleAnswer(selectedIndex, button) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correct) {
    button.style.backgroundColor = "green";
    button.style.color = "white";
    correctAnswers++;

    setTimeout(() => {
      nextQuestion();
    }, 1000); // Wait 1 second before moving to the next question
  } else {
    button.style.backgroundColor = "#b20000"; 
    button.style.color = "white";

    setTimeout(() => {
      button.style.backgroundColor = ""; // Reset button color
      button.style.color = "";
    }, 1000); // Reset after 1 second to let the user try again
  }
}

function nextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    endQuiz();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function updateProgress() {
  const progressPercent = ((currentQuestionIndex + 1) / quizData.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

function endQuiz() {
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
}

function restartQuiz() {
  endScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  currentQuestionIndex = 0;
  correctAnswers = 0;
  progressBar.style.width = "0%";
}

// Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
restartBtn.addEventListener("click", restartQuiz);
