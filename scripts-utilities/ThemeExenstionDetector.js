/*Mabey should not use this website is still useable with this */

(function() {
  // Function to analyze style content for significant changes
  const analyzeStyleChanges = (currentContent, previousContent) => {
    const currentProperties = parseStyleContent(currentContent);
    const previousProperties = parseStyleContent(previousContent);
    return currentProperties.some(property => property.startsWith('color') || property.startsWith('background-color') || property.includes('--')) &&
          !previousProperties.every(property => property.startsWith('color') || property.startsWith('background-color') || property.includes('--'));
  };

  // Function to parse style content into an array of properties
  const parseStyleContent = (content) => {
    return content.split(';').reduce((acc, line) => {
      const [property, value] = line.split(':').map(part => part.trim());
      acc.push(`${property}: ${value}`);
      return acc;
    }, []);
  };

  // Function to handle mutations
  const handleMutation = () => {
    const styleElements = Array.from(document.querySelectorAll('style'));
    const linkElements = Array.from(document.querySelectorAll('link[type="text/css"]'));

    // Store previously added styles and links in memory instead of sessionStorage
    let previouslyAddedStyles = {};
    let previouslyInjectedLinks = {};

    // Initialize sessionStorage once outside the loop
    if (sessionStorage.getItem('previouslyAddedStyles')) {
      previouslyAddedStyles = JSON.parse(sessionStorage.getItem('previouslyAddedStyles'));
    }
    if (sessionStorage.getItem('previouslyInjectedLinks')) {
      previouslyInjectedLinks = JSON.parse(sessionStorage.getItem('previouslyInjectedLinks'));
    }

    // Check for newly added style elements
    for (let styleElement of styleElements) {
      if (!previouslyAddedStyles.hasOwnProperty(styleElement.id)) {
        const currentContent = styleElement.innerHTML.trim();
        if (analyzeStyleChanges(currentContent, '')) {
          alert('Please disable your current theme extension. Using it may negatively impact the visibility of the website. Instead, consider using our Website Theme Changer.');
          sessionStorage.setItem('alertShownForNewCss', 'true');
          break;
        }
        previouslyAddedStyles[styleElement.id] = currentContent;
      }
    }

    // Check for changes in existing style elements
    for (let id in previouslyAddedStyles) {
      const styleElement = document.getElementById(id);
      if (!styleElement || analyzeStyleChanges(styleElement.innerHTML.trim(), previouslyAddedStyles[id])) {
        alert('Please disable your current theme extension. Using it may negatively impact the visibility of the website. Instead, consider using our Website Theme Changer.');
        sessionStorage.setItem('alertShownForChangedCssOrVariables', 'true');
        break;
      }
    }

    // Check for newly added link elements
    for (let linkElement of linkElements) {
      if (!previouslyInjectedLinks.hasOwnProperty(linkElement.id)) {
        const currentHref = linkElement.getAttribute('href');
        if (currentHref && currentHref.includes('chrome-extension://')) {
          alert('Please disable your current theme extension. Using it may negatively impact the visibility of the website. Instead, consider using our Website Theme Changer.');
          sessionStorage.setItem('alertShownForDarkMode', 'true');
          break;
        }
        previouslyInjectedLinks[linkElement.id] = currentHref;
      }
    }

    // Update sessionStorage once after all checks
    sessionStorage.setItem('previouslyAddedStyles', JSON.stringify(previouslyAddedStyles));
    sessionStorage.setItem('previouslyInjectedLinks', JSON.stringify(previouslyInjectedLinks));
  };

  // Helper function to check if an alert has already been shown
  const hasAlertedForType = (type) => {
    return sessionStorage.getItem(`alertShownFor${type}`) === 'true';
  };

  // Wait for the DOM to be fully loaded
  if (document.readyState!== "loading") {
    handleMutation();
  } else {
    document.addEventListener("DOMContentLoaded", handleMutation);
  }

  // Clear the alert flags when the page is refreshed or reloaded
  window.addEventListener('pageshow', () => {
    sessionStorage.removeItem('alertShownForNewCss');
    sessionStorage.removeItem('alertShownForChangedCssOrVariables');
    sessionStorage.removeItem('alertShownForDarkMode');
    sessionStorage.setItem('previouslyAddedStyles', '{}');
    sessionStorage.setItem('previouslyInjectedLinks', '{}');
  });
})();