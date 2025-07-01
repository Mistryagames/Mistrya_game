// مرجع لقاعدة البيانات
const db = firebase.database();

// توليد رمز جلسة عشوائي (4 أحرف/أرقام)
function makeSessionId() {
  return Math.random().toString(36).substr(2, 4).toUpperCase();
}

// إنشاء جلسة جديدة
function createSession() {
  const sessionId = makeSessionId();
  db.ref("sessions/" + sessionId).set({ createdAt: Date.now() })
    .then(() => {
      document.querySelector(".container").innerHTML = `
        <h2>رمز الجلسة: ${sessionId}</h2>
        <p>شاركي هذا الرمز مع لاعبين آخرين للانضمام.</p>
      `;
    })
    .catch(err => alert("خطأ بإنشاء الجلسة: " + err.message));
}

// الانضمام إلى جلسة موجودة
function joinSession() {
  const code = document.getElementById("sessionCode").value.trim().toUpperCase();
  if (!code) return alert("أدخل رمز الجلسة");
  db.ref("sessions/" + code).get()
    .then(snapshot => {
      if (snapshot.exists()) {
        document.querySelector(".container").innerHTML = `
          <h2>انضممتِ إلى الجلسة ${code}</h2>
          <p>انتظار اللاعبين الآخرين…</p>
        `;
        // لاحقًا: نضيف هنا الاستماع للتغييرات في الجلسة
      } else {
        alert("رمز الجلسة غير صحيح!");
      }
    })
    .catch(err => alert("خطأ بالانضمام: " + err.message));
}
