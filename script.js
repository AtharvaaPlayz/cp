function updatePreview() {
  const name = document.getElementById("edit-name").value || "Your Name";
  const tagline = document.getElementById("edit-tagline").value || "Your Tagline";
  const profilePic = document.getElementById("edit-profile-pic").value || "https://via.placeholder.com/150";
  const aboutMe = document.getElementById("edit-about-me").value || "Tell us about yourself.";
  const skills = document.getElementById("edit-skills").value.split(',').map(skill => skill.trim()).filter(Boolean);
  const contactInfo = document.getElementById("edit-contact-info").value || "yourname@example.com";

  document.getElementById("preview-name").textContent = name;
  document.getElementById("preview-tagline").textContent = tagline;
  document.getElementById("preview-profile-pic").src = profilePic;
  document.getElementById("preview-about-me").textContent = aboutMe;

  const skillsContainer = document.getElementById("preview-skills-list");
  skillsContainer.innerHTML = skills.length ? skills.map(skill => `<span>${skill}</span>`).join('') : 'Your Skills';

  document.getElementById("preview-contact-info").textContent = contactInfo;
}

function generateCode() {
  const name = document.getElementById("edit-name").value || "Your Name";
  const tagline = document.getElementById("edit-tagline").value || "Your Tagline";
  const profilePic = document.getElementById("edit-profile-pic").value || "https://via.placeholder.com/150";
  const aboutMe = document.getElementById("edit-about-me").value || "Tell us about yourself.";
  const skills = document.getElementById("edit-skills").value.split(',').map(skill => skill.trim()).filter(Boolean);
  const contactInfo = document.getElementById("edit-contact-info").value || "yourname@example.com";

  const htmlCode = `
<!DOCTYPE html>
<html>
<head>
  <title>Your Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="portfolio-container">
    <div class="portfolio-header">
      <h1>${name}</h1>
      <p>${tagline}</p>
    </div>
    <div class="portfolio-profile">
      <img src="${profilePic}" alt="Profile">
    </div>
    <div class="portfolio-about">
      <h2>About Me</h2>
      <p>${aboutMe}</p>
    </div>
    <div class="portfolio-skills">
      <h2>Skills</h2>
      ${skills.map(skill => `<span>${skill}</span>`).join('')}
    </div>
    <div class="portfolio-contact">
      <h2>Contact Info</h2>
      <p>${contactInfo}</p>
    </div>
  </div>
</body>
</html>
  `;

  const cssCode = `
body {
  font-family: 'Arial', sans-serif;
  background: #0f0f0f;
  color: #fff;
}
.portfolio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.portfolio-header h1 {
  font-size: 2.5rem;
  color: #00ffd5;
}
.portfolio-header p {
  color: #00ffd5;
}
.portfolio-profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #00ffd5;
}
.portfolio-skills span {
  background: #00ffd5;
  color: #000;
  padding: 8px 20px;
  margin: 10px;
  border-radius: 15px;
}
  `;

  const jsCode = `
function updatePreview() {
  // Updates preview dynamically
}
  `;

  document.getElementById("html-output").value = htmlCode;
  document.getElementById("css-output").value = cssCode;
  document.getElementById("js-output").value = jsCode;
}
