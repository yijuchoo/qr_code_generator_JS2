# 🚀 QR Code Generator

A simple and stylish web application to generate QR codes from any text or URL using the [goqr.me](https://goqr.me/api/) API. Users can generate and download the QR code as a PNG image.

![QR Code Generator Screenshot](https://github.com/yijuchoo/qr_code_generator_JS2/blob/main/preview.png) <!-- Replace with your screenshot file if available -->

---

## 🛠 Features

- 🔤 Convert any text or URL into a QR Code
- ⚡ Instant QR code generation using a free public API
- ⬇️ Download QR code as PNG
- 📱 Fully responsive and minimal design

---

## 📁 Project Structure

qr-code-generator/
- │
- ├── index.html # Main HTML file
- ├── style.css # Styling for the app
- └── index.js # JavaScript logic for QR generation & download

---

## 📺 Demo

Watch the video walkthrough on YouTube:  
👉 [https://www.youtube.com/watch?v=IbHMSGKzDaA](https://www.youtube.com/watch?v=IbHMSGKzDaA) Right-click → “Open in new tab”


---

## 🧩 How It Works

### HTML (`index.html`)
- Provides a text input, Generate button, Download button, and a container to display the QR code.

### CSS (`style.css`)
- Modern UI with gradient background, card-style container, styled inputs and buttons, and QR display.

### JavaScript (`index.js`)
- Generates a QR code using:
- https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=YOUR_TEXT
- Displays the QR as an image.
- Allows download of the QR code using `fetch()` and a dynamic `<a>` link.

---

## ▶️ How to Use

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Enter any text or URL into the input field.
4. Click **Generate QR Code**.
5. Click **Download QR Code** to save the image.

---

## 📦 Dependencies

- ✅ No libraries or frameworks required.
- Uses a public API: [QRServer API](https://goqr.me/api/)
