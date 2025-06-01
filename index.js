// Declares a variable named currentQRUrl to store the generated QR code image URL
// Initially, it's an empty string, meaning no QR code has been generated yet.
let currentQRUrl = "";

// Adds a click event listener to the Generate button.
// When clicked, it runs the function to generate a QR code.
document.getElementById("generate-btn").addEventListener("click", function () {
  // Gets the value the user typed in the text input field.
  // .trim() removes any leading or trailing whitespace.
  const text = document.getElementById("text-input").value.trim();

  // If the input is empty, it shows an alert and stops the function using return
  if (!text) {
    alert("Please enter some text or a URL.");
    return;
  }

  // Constructs the URL for a QR Code using the free API at qrserver.com
  currentQRUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    text
  )}`;

  // Insert QR code image
  // Inserts an <img> tag into the #qr-code container with the generated QR image URL
  document.getElementById("qr-code").innerHTML = `
        <img id="qr-image" src="${currentQRUrl}" alt="QR Code">
      `;

  // Makes the Download button visible (if it was hidden initially with CSS).
  document.getElementById("download-btn").style.display = "inline-block";
});

// Adds a click event listener to the Download button
// This is an async function because it fetches image data from the internet
document
  .getElementById("download-btn")
  .addEventListener("click", async function () {
    // If no QR code URL was generated, it shows an alert and stops the function.
    if (!currentQRUrl) {
      alert("Please generate a QR Code first before downloading");
      return;
    }

    try {
      // fetch(currentQRUrl) downloads the QR image data from the API.
      // .blob() converts the response to a binary blob (a raw file object).
      const response = await fetch(currentQRUrl);
      const blob = await response.blob();

      // Creates a temporary URL for the downloaded image using the blob.
      const blobUrl = URL.createObjectURL(blob);

      // Dynamically creates an invisible <a> link and simulates a click on it to trigger the download.
      const link = document.createElement("a");
      link.href = blobUrl;
      // The image is saved as "qr-code.png".
      link.download = "qr-code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up memory
      // Frees up memory by removing the temporary blob URL once the download is complete.
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      // If something goes wrong during fetch or download, it alerts the user and logs the error.
      alert("Failed to download QR Code. Please try again.");
      console.error(error);
    }
  });
