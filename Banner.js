(function() {
  // Create banner container
  var bannerDiv = document.createElement('div');
  bannerDiv.id = 'chatbot-banner';
  bannerDiv.className = 'chatbot-banner';
  bannerDiv.innerHTML = '<button class="close-banner-btn">&times;</button><p>Hi there 👋! If you have any questions, we are here to help.</p>';

  // Create style element for CSS
  var styleEl = document.createElement('style');
  styleEl.textContent = `
    .chatbot-banner {
      position: fixed;
      right: 36px;
      bottom: 110px;
      width: 250px;
      height: 40px;
      background-color: #ffffff;
      color: #000;
      padding: 10px;
      text-align: center;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9;
    }
    .close-banner-btn {
      position: absolute;
      top: 5px;
      right: 5px;
      background: none;
      border: none;
      color: #000;
      font-size: 24px;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
    }
    .chatbot-banner p {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      margin: 0;
      padding-right: 30px;
    }
    @media screen and (max-device-width: 767px) {
      .chatbot-banner {
        right: 10px;
        bottom: 50px;
        width: 250px;
        height: 80px;
      }
      .close-banner-btn {
        font-size: 18px;
      }
    }
  `;

  // Append style and banner div to the document
  document.head.appendChild(styleEl);
  document.body.appendChild(bannerDiv);

  // Load Poppins font from Google Fonts
  var linkEl = document.createElement('link');
  linkEl.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap';
  linkEl.rel = 'stylesheet';
  document.head.appendChild(linkEl);

  // Banner close function
  document.querySelector('.close-banner-btn').addEventListener('click', function() {
    document.getElementById('chatbot-banner').style.display = 'none';
  });
})();
