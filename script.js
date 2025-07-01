function startGame() {
  document.querySelector(".container").innerHTML = `
    <h2>Villa Baldini - The Beginning</h2>
    <p><em>Tuscany, Italy – Autumn 2023</em></p>
    <p>In the heart of the Italian countryside, Villa Baldini stands tall among the crimson vines.</p>
    <p>The Baldini family was preparing to celebrate 60 years since the first bottle of wine produced by the late patriarch, <strong>Vittorio Baldini</strong>.</p>
    <p>The house was busy, yet tense:</p>
    <ul style="text-align: left; max-width: 500px; margin: auto;">
      <li>Marco was reviewing the guest list.</li>
      <li>Elisa rechecked the wine selection.</li>
      <li>Beatrice hid in her room, painting.</li>
      <li>Aunt Grazia murmured to her tarot deck.</li>
    </ul>
    <p>And then... a scream pierced the calm air.</p>
    <p><strong>“The grandfather... he's not breathing!”</strong></p>
    <button onclick="nextScene()">Continue</button>
  `;
}

function nextScene() {
  // Placeholder للمرحلة الجاية – نضيف التحقيق هنا
  document.querySelector(".container").innerHTML = `
    <h2>Chapter 1: The Body in the Winery</h2>
    <p>The family rushes to the old winery chamber. Vittorio lies still, with a broken wine glass beside him, and a crimson stain creeping across his white shirt.</p>
    <p>Someone in this house... wanted him dead.</p>
    <p>But who?</p>
    <p><em>To be continued...</em></p>
  `;
}
