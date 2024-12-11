// content.js
document.addEventListener("mouseover", function (event) {
  const targetElement = event.target;

  // Check if the target element is an <a> tag
  if (targetElement.tagName === "A") {
    if (targetElement.getAttribute("target") === "_blank") {
      // Show an alert if target="_blank" is found

      if (!document.getElementById("green-dot")) {
        const greenDot = document.createElement("div");
        greenDot.id = "green-dot";
        greenDot.style.position = "fixed";
        greenDot.style.top = "20px";
        greenDot.style.left = "20px";
        greenDot.style.width = "10px";
        greenDot.style.height = "10px";
        greenDot.style.borderRadius = "50%";
        greenDot.style.backgroundColor = "green";
        greenDot.style.zIndex = "99999999"; // Make sure it's above other content
        document.body.appendChild(greenDot);
      }
    } else {
      if (!document.getElementById("red-dot")) {
        const redDot = document.createElement("div");
        redDot.id = "red-dot";
        redDot.style.position = "fixed";
        redDot.style.top = "20px";
        redDot.style.left = "20px";
        redDot.style.width = "10px";
        redDot.style.height = "10px";
        redDot.style.borderRadius = "50%";
        redDot.style.backgroundColor = "red";
        redDot.style.zIndex = "99999999"; // Make sure it's above other content
        document.body.appendChild(redDot);
      }
    }
  }
});

document.addEventListener("mouseout", (event) => {
  const targetElement = event.target;
  // If the element was an <a> tag and had the target="_blank" attribute
  if (targetElement.tagName === "A") {
    // Reset the styles applied on mouseover
    const greenDot = document.getElementById("green-dot");
    const redDot = document.getElementById("red-dot");
    if (greenDot) {
      greenDot.remove();
    }
    if (redDot) {
      redDot.remove();
    }
  }
});
