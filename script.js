// احصل على مرجع لقاعدة البيانات
const db = firebase.database();

// دالة توليد كود عشوائي مكوّن من 4 أحرف/أرقام
function makeSessionId() {
  return Math.random().toString(36).substr(2, 4).toUpperCase();
}

// إنشاء جلسة جديدة
function createSession() {
  const sessionId = makeSessionId();
  // أنشئ node في DB باسم الجلسة
  db.ref("sessions/" + sessionId).set({
    createdAt: Date.now()
  }).then(() => {
    // عرض رمز الجلسة للمضيف
    document.querySelector(".container").innerHTML = `
      <h2>Session Code: ${sessionId}</h2>
      <p>شاركي هذا الرمز مع لاعبين آخرين للانضمام.</p>
    `;
  });
}

// الانضمام إلى جلسة موجودة
function joinSession() {
  const code = document.getElementById("sessionCode").value.trim().toUpperCase();
  // تحقّق من وجود الجلسة في DB
  db.ref("sessions/" + code).get().then(snapshot => {
    if (snapshot.exists()) {
      // نجح الانضمام
      document.querySelector(".container").innerHTML = `
        <h2>Joined session ${code}</h2>
        <p>انتظار اللاعبين الآخرين…</p>
      `;
      // هنا تبدأين تراقبين أي تغييرات في الجلسة
    } else {
      alert("رمز الجلسة غير صحيح!");
    }
  });
}
