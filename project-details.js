// Get project identifier from URL
const urlParams = new URLSearchParams(window.location.search);
const projectKey = urlParams.get("project");

// Project details database
const projects = {
  "tanzu-creation": {
    title: "Tanzu's Creation",
    tagline: "A vibrant fashion brand built from scratch for Facebook selling.",
    liveDemo: "https://www.facebook.com/tanzim26190",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "JSON"],
    about: `Tanzu's Creation is my personal online fashion store running on Facebook. I built its frontend using HTML, CSS, and JavaScript. Product data is managed with JSON, and MySQL is used for backend planning.`,
    features: [
      "Responsive and colorful product gallery",
      "Category-based product filtering using JSON",
      "Interactive cart UI (planned)",
      "Backend structure using MySQL",
      "Connected with Facebook Page for order processing"
    ],
    challenges: [
      "Designing a unique shopping UI without frameworks",
      "Managing mock product data with JSON",
      "Manual responsiveness setup for mobile and desktop"
    ],
    mediaSrc: "Tanzucreation.JPG"
  },

  "tanzu-desktop-app": {
    title: "Tanzu Desktop App",
    tagline: "A JavaFX-based desktop application connected to MySQL.",
    liveDemo: "https://github.com/Jarin-Tanzim", 
    technologies: ["Java", "JavaFX", "MySQL", "FXML"],
    about: `Tanzu Desktop App is a standalone desktop program built with JavaFX for smooth GUI handling. It features database connectivity and dynamic UI interactions using FXML.`,
    features: [
      "Desktop-based UI using JavaFX",
      "Database CRUD operations with MySQL",
      "FXML-based component separation",
      "Form validations and user feedback"
    ],
    challenges: [
      "Integrating MySQL with local desktop app",
      "Organizing controllers and FXML files",
      "Error handling for user inputs"
    ],
    mediaSrc: "JavaFx.JPG"
  },

  "tales-of-tanzu": {
    title: "Tales of Tanzu",
    tagline: "A creative storytelling brand combining content, design, and editing.",
    liveDemo: "https://www.facebook.com/talesoftanzu",
    technologies: ["Meta Suite", "Canva", "Video Editing"],
    about: `Tales of Tanzu is my creative outlet on Facebook, where I share engaging stories and motivational content. I use Canva and Meta Suite for visual design and video editing tools to produce reels and stories.`,
    features: [
      "Short-form video storytelling",
      "Visually engaging Canva-based designs",
      "Audience engagement via Meta Suite",
      "Content calendar planning",
      "Consistent brand identity"
    ],
    challenges: [
      "Creating regular, engaging content",
      "Balancing educational and entertaining tone",
      "Designing posts that fit Meta’s optimal layout"
    ],
    mediaSrc: "contentcreator.jpg"
  }
};

// If project not found
if (!projects[projectKey]) {
  document.querySelector(".project-detail-container").innerHTML = `
    <h1 style="text-align:center; margin-top: 100px;">Project not found 😕</h1>
    <p style="text-align:center;">Please return to <a href="index.html#projects">Projects</a> and try again.</p>
  `;
} else {
  const data = projects[projectKey];

  document.getElementById("project-title").textContent = data.title;
  document.getElementById("project-tagline").textContent = data.tagline;

  // Set live demo button
  const liveDemoLink = document.getElementById("live-demo-link");
  if (data.liveDemo) {
    liveDemoLink.href = data.liveDemo;
    liveDemoLink.style.display = "inline-flex";
  }

  // Set technologies
  const techList = document.getElementById("technologies-list");
  techList.innerHTML = "";
  data.technologies.forEach(tech => {
    const li = document.createElement("li");
    li.textContent = tech;
    techList.appendChild(li);
  });

  // Set about
  document.getElementById("project-about").innerHTML = `<p>${data.about}</p>`;

  // Set features
  const featuresList = document.getElementById("key-features-list");
  featuresList.innerHTML = "";
  data.features.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    featuresList.appendChild(li);
  });

  // Set challenges
  const challengesList = document.getElementById("challenges-solutions-list");
  challengesList.innerHTML = "";
  data.challenges.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    challengesList.appendChild(li);
  });

  // Set project media
  const mediaEl = document.getElementById("project-main-media");
  mediaEl.src = data.mediaSrc;
}
