// Hamburger Menu
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  links.classList.toggle('open');
  btn.classList.toggle('open');
}
function closeMenu() {
  const links = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  if(links) links.classList.remove('open');
  if(btn) btn.classList.remove('open');
}
document.addEventListener('click', function(e) {
  const links = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  if(links && btn && !links.contains(e.target) && !btn.contains(e.target)) {
    closeMenu();
  }
});

// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Active nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove("active"));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => observer.observe(sec));

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 100);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// Contact Modal
function openContact() {
  document.getElementById('contactModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeContact() {
  document.getElementById('contactModal').classList.remove('open');
  document.body.style.overflow = '';
}
// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeContact();
});

// Achievement Modal Data
const achievements = [
  {
    icon: "🥈",
    label: "Competition Award",
    title: "Campus Coders League — 2nd Prize",
    img: "assets/ach1.png",
    desc: "Won 2nd place in the Campus Coders League (CCL) at KIOT — a 12-hour intensive coding competition focused on programming challenges and problem-solving. Demonstrated strong programming skills, analytical thinking, and effective teamwork in a competitive environment."
  },
  {
    icon: "🏆",
    label: "International Conference 2025",
    title: "Best Paper Award",
    img: "assets/ach2.png",
    desc: "Presented research on RAG-based AI for judicial decision support at an International Conference in 2025. The paper explored how Retrieval-Augmented Generation can assist in legal judgements and received the Best Paper Award from the conference committee."
  },
  {
    icon: "🌟",
    label: "KIOT Achievers Award 2025–26",
    title: "KIOT Achievers Award — 2nd Place CCL",
    img: "assets/ach3.png",
    desc: "I am delighted to share that I secured 2nd Place in the CCL 12 Hours Coding Challenge and received the KIOT Achievers Award 2025–26 from Knowledge Institute of Technology, Salem. This competition tested problem-solving skills, analytical thinking, and the ability to work efficiently under time constraints. Competing for 12 continuous hours was both challenging and rewarding. I am grateful to my mentors and faculty members for their continuous support and encouragement. Looking forward to achieving more milestones ahead!"
  }
];

function openAch(index) {
  const a = achievements[index];
  document.getElementById('achModalIcon').textContent = a.icon;
  document.getElementById('achModalLabel').textContent = a.label;
  document.getElementById('achModalTitle').innerHTML = a.title;

  if(a.img) document.getElementById('achModalImg').innerHTML = `<img src="${a.img}" alt="Achievement" style="width:100%;height:100%;object-fit:cover;border-radius:4px;"/>`;  
  document.getElementById('achModalDesc').textContent = a.desc;
  document.getElementById('achModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAch() {
  document.getElementById('achModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Experience Modal
const experiences = [
  {
    label: "Certificate of Internship",
    title: "Java Full Stack Development Intern",
    sub: "Dev Technology Solutions · 18.12.2024 to 02.01.2025",
    img: "assets/cert_java_fullstack.jpg"
  },
  {
    label: "Certificate of Completion",
    title: "Data Science Intern",
    sub: "Codsoft · 20/06/2025 to 20/07/2025",
    img: "assets/cert_datascience.png"
  }
];

function openExp(index) {
  const e = experiences[index];
  document.getElementById('expModalLabel').textContent = e.label;
  document.getElementById('expModalTitle').textContent = e.title;
  document.getElementById('expModalSub').textContent = e.sub;
  document.getElementById('expModalImg').innerHTML = `<img src="${e.img}" alt="Certificate" style="width:100%;height:100%;object-fit:contain;border-radius:4px;"/>`;
  document.getElementById('expModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeExp() {
  document.getElementById('expModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Cert Modal
function openCert() {
  document.getElementById('certImgsGrid').innerHTML = `
    <img src="assets/cyb_java.png" alt="Java Certificate"/>
    <img src="assets/cyb_python.png" alt="Python Certificate"/>
    <img src="assets/cyb_cpp.png" alt="C++ Certificate"/>
  `;
  document.getElementById('certModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCert() {
  document.getElementById('certModal').classList.remove('open');
  document.body.style.overflow = '';
}

// NPTEL Industry 4.0 Modal
function openNptel1() {
  showImgModal("NPTEL Certification", "Introduction to Industry 4.0 and Industrial Internet of Things", "assets/nptel_iot.png");
}

function showImgModal(label, title, img) {
  // reuse certModal
  document.getElementById('certImgsGrid').innerHTML = `<img src="${img}" alt="Certificate" style="width:100%;grid-column:1/-1;"/>`;
  document.querySelector('#certModal .modal-label').textContent = label;
  document.querySelector('#certModal .modal-title').innerHTML = title;
  document.getElementById('certModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openNptel2() {
  showImgModal("NPTEL Certification", "Business Intelligence &amp; Analytics", "assets/nptel_bi.png");
}

// Send Message (mailto)
function sendMsg() {
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg = document.getElementById('cMsg').value.trim();
  if(!name || !email || !msg) {
    alert('Please fill in all fields!');
    return;
  }
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
  window.location.href = `mailto:vramya28112005@gmail.com?subject=${subject}&body=${body}`;
}
