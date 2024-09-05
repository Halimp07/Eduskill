import React, { useEffect } from "react";

const BotsonicIcon = () => {
  useEffect(() => {
    const scriptId = "botsonic-script";

    // Check if the script is already loaded
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://widget.botsonic.com/CDN/botsonic.min.js";
      script.async = true;
      script.onload = () => {
        // Ensure Botsonic is defined and then initialize
        if (window.Botsonic) {
          window.Botsonic("init", {
            serviceBaseUrl: "https://api-azure.botsonic.ai",
            token: "5d2e24cc-33ca-479f-bcc6-9b9d45ae1f22", // Use your actual token here
          });
        } else {
          console.error(
            "Botsonic is not defined. Make sure the script is loaded correctly."
          );
        }
      };
      document.body.appendChild(script);
    }

    // Cleanup if necessary
    return () => {
      // Optionally remove script if needed
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component does not render anything visible
};

export default BotsonicIcon;
