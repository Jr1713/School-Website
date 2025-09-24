// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  if(name && email && message) {
    document.getElementById('formMessage').textContent = "Thank you, " + name + "! Your message has been sent.";
    this.reset();
  } else {
    document.getElementById('formMessage').textContent = "Please fill all fields.";
  }
});

// Hero Enroll Button
document.querySelector('.hero .btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Thank you for enrolling at Greenfield School! We will contact you soon.");
});

// Courses Modal
const courses = {
  science: {
    title: "Science",
    desc: "Explore physics, chemistry, and biology with hands-on experiments and real-world applications.",
    teacher: "Mr. Albert Newton",
    duration: "6 months"
  },
  math: {
    title: "Mathematics",
    desc: "Develop problem-solving skills and analytical thinking through interactive learning.",
    teacher: "Ms. Ada Lovelace",
    duration: "5 months"
  },
  arts: {
    title: "Arts",
    desc: "Encourage creativity in painting, music, theater, and other visual and performing arts.",
    teacher: "Mr. Pablo Picasso",
    duration: "4 months"
  }
};

const modal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTeacher = document.getElementById("modalTeacher");
const modalDuration = document.getElementById("modalDuration");
const closeBtn = document.querySelector(".close");

// Open modal on course card click
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const courseKey = card.dataset.course;
    const course = courses[courseKey];

    modalTitle.textContent = course.title;
    modalDesc.textContent = course.desc;
    modalTeacher.textContent = course.teacher;
    modalDuration.textContent = course.duration;

    modal.style.display = "block";
  });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = event => {
  if(event.target == modal) modal.style.display = "none";
}

// Modal Enroll Button
document.getElementById('enrollBtn').addEventListener('click', function() {
    alert("You have successfully enrolled in this course! Our team will contact you shortly.");
    modal.style.display = "none";
});
