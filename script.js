function startGame() {
  document.querySelector(".container").innerHTML = 
    <h2 style="direction: rtl;">فيلا بالديني - البداية</h2>
    <p style="direction: rtl;"><em>توسكانا، إيطاليا – خريف 2023</em></p>
    <p style="direction: rtl;">في قلب الريف الإيطالي، تقف فيلا بالديني شامخة بين كروم العنب القرمزية.</p>
    <p style="direction: rtl;">كانت عائلة بالديني تستعد للاحتفال بمرور 60 عامًا على أول زجاجة نبيذ أنتجها الجد الراحل <strong>فيتوريو بالديني</strong>.</p>
    <p style="direction: rtl;">كان المنزل مشغولًا، لكنه متوتر:</p>
    <ul style="text-align: right; max-width: 500px; margin: auto; direction: rtl;">
      <li>ماركو يراجع قائمة الضيوف.</li>
      <li>إليسا تتفقد أنواع النبيذ.</li>
      <li>بياتريس تنعزل في غرفتها، ترسم بصمت.</li>
      <li>العمة جرازيا تهمس لأوراق التاروت.</li>
    </ul>
    <p style="direction: rtl;">ثم... صرخة اخترقت سكون المساء.</p>
    <p style="direction: rtl;"><strong>“الجد... لا يتنفس!”</strong></p>
    <button onclick="nextScene()">Continue</button>
  `;
}
