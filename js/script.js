const contentContainer = document.getElementById("contentContainer");
const currentURL = window.location.href;

// Function to load content from a file and set it as innerHTML
async function loadContentFromFile(filePath) {
  try {
    const baseURL = new URL("/", window.location.origin);
    const response = await fetch(new URL(`page/${filePath}`, baseURL));
    // const response = await fetch(`/page/${filePath}`);

    const content = await response.text();
    contentContainer.innerHTML = content;
  } catch (error) {
    contentContainer.innerHTML = "<h2>Error</h2><p>Failed to load content.</p>";
  }
}

// Function to load different content based on the URL
function loadContent(url) {
  if (url.includes("/rick")) {
    loadContentFromFile("rick.html");
  } else {
    loadContentFromFile("home.html");
  }
}

// Call the function with the current URL
loadContent(currentURL);
