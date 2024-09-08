import React, { useState, useEffect } from "react";

const InstallPWAButton = () => {
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    if (window.deferredPrompt) {
      setIsInstallable(true);
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      setIsInstallable(true); 
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt(); 
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        
        window.deferredPrompt = null;
        setIsInstallable(false); 
      });
    }
  };

  if (!isInstallable) {
    return null;
  }

  return (
    <div className="position-absolute w-100 d-flex justify-content-end">
      <button
        onClick={handleInstallClick}
        style={{
          textAlign: "left",
          display: "flex",
          justifyContent: "end",
          margin: "1px 10px",
          padding: "5px 10px",
          backgroundColor: "transparent",
          color: "#354E57",
          border: "1px solid #354E57",
          borderRadius: "5px",
        }}
      >
        Install App
      </button>
    </div>
  );
};

export default InstallPWAButton;
