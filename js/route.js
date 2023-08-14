const appContainer = document.getElementById("app");

// Function to load and display content from a template file
async function loadTemplate(filePath) {
  try {
    const response = await fetch(filePath);
    const content = await response.text();
    appContainer.innerHTML = content;
  } catch (error) {
    appContainer.innerHTML = "<h2>Error</h2><p>Failed to load content.</p>";
  }
}

// Function to handle routing
function handleRoute() {
  const path = window.location.pathname;

  switch (path) {
    // case "/":
    //   loadTemplate("page/home.html");
    //   break;
    case "project/rick":
      loadTemplate("rick.html");
      break;
    default:
      loadTemplate("home.html");
      break;
  }
}

// Initial route handling
handleRoute();

// Listen for popstate events to handle back/forward navigation
window.addEventListener("popstate", handleRoute);
