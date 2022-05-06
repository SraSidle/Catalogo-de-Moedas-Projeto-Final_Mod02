const closeAlert = () => {
  const close = document.querySelector("#close-mess");
  const message = document.querySelector(".message");

  close.addEventListener("click", () => {
    message.style.display = "block";
  });

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
};

const viewDropdown = () => {
  const buttons = document.querySelectorAll(".dropdown-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const content = event.path[2].children[1];
      console.log(content);

      content.classList.toggle("active");

      if (content.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }

      content.addEventListener("mouseleave", () => {
        content.classList.remove("active");
        if (!content.classList.contains("active")) {
          content.style.display = "none";
        }
      });
    });
  });
};

viewDropdown();
closeAlert();
