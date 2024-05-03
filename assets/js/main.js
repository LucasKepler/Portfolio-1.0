/* Scroll Header */
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* Active Link */
const navlink = document.querySelectorAll(".nav-link");

function activeLink() {
  navlink.forEach((a) => a.classList.remove("active-link"));
  this.classList.add("active-link");
}

navlink.forEach((a) => a.addEventListener("click", activeLink));

/* Active About */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tabs");
    });

    target.classList.add("active-tabs");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tabs");
    });

    tab.classList.add("active-tabs");
  });
});

/* Active Work */
const linkWork = document.querySelectorAll(".cattegory-btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/* Mixitup Filter */
var mixerProjects = mixitup(".projects-container", {
  selectors: {
    target: ".project-item",
  },
  animation: {
    duration: 300,
  },
});

/* Contact Form */

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //check if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    contactMessage.textContent = "Write all the input fields";
  } else {
    // serviceID - templateID - #form - publickey
    emailjs
      .sendForm(
        "service_b9ijoij",
        "template_7trvroo",
        "#contact-form",
        "_6oom9HfcGiOkLrBe"
      )
      .then(
        () => {
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent ✔️";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("Oops! Something went WRONG...", error);
        }
      );

    contactName.value = "";
    contactEmail.value = "";
    Message.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
