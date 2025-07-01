console.log('script.js loaded');

// مرجع لقاعدة البيانات
const db = firebase.database();

// دالة توليد 4 أحرف/أرقام عشوائية
function makeSessionId() {
  return Math.random().toString(36).substr(2, 4).toUpperCase();
}

// إنشاء جلسة جديدة
function createSession() {
  const sessionId = makeSessionId();
  // اكتب الجلسة في Realtime Database
  db.ref('sessions/' + sessionId).set({ createdAt: Date.now() })
    .then(() => {
      // عرض رمز الجلسة للاعب المضيف
      document.querySelector('.container').innerHTML = `
        <h2>رمز الجلسة: ${sessionId}</h2>
        <p>شاركي هذا الرمز مع الآخرين للانضمام.</p>
      `;
    })
    .catch(err => {
      alert('خطأ أثناء إنشاء الجلسة: ' + err.message);
    });
}

// انضمام إلى جلسة موجودة
function joinSession() {
  const input = document.getElementById('sessionCode');
  const code = input.value.trim().toUpperCase();
  if (!code) {
    return alert('الرجاء إدخال رمز الجلسة');
  }

  // تحقق من وجود الجلسة في الـ DB
  db.ref('sessions/' + code).get()
    .then(snapshot => {
      if (snapshot.exists()) {
        // عرض شاشة الانضمام
        document.querySelector('.container').innerHTML = `
          <h2>انضممتِ للجلسة ${code}</h2>
          <p>انتظار اللاعبين الآخرين…</p>
        `;
      } else {
        alert('رمز الجلسة غير موجود أو غير صحيح');
      }
    })
    .catch(err => {
      alert('خطأ أثناء الانضمام: ' + err.message);
    });
}
