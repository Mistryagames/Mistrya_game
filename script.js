// تأكد من تحميل الملف
console.log('✅ script.js loaded');

// مرجع لقاعدة البيانات
const db = firebase.database();

// دالة لإنشاء رمز جلسة عشوائي (4 أحرف/أرقام)
function makeSessionId() {
  return Math.random().toString(36).substr(2, 4).toUpperCase();
}

// إنشاء جلسة جديدة وكتابة الرمز في Realtime Database
function createSession() {
  const sessionId = makeSessionId();
  db.ref('sessions/' + sessionId).set({ createdAt: Date.now() })
    .then(() => {
      document.querySelector('.container').innerHTML = `
        <h2>رمز الجلسة: ${sessionId}</h2>
        <p>شاركي هذا الرمز مع الآخرين للانضمام.</p>
      `;
    })
    .catch(err => {
      alert('خطأ أثناء إنشاء الجلسة: ' + err.message);
    });
}

// الانضمام إلى جلسة موجودة عبر الكود المدخل
function joinSession() {
  const input = document.getElementById('sessionCode');
  const code = input.value.trim().toUpperCase();
  if (!code) {
    return alert('الرجاء إدخال رمز الجلسة');
  }

  db.ref('sessions/' + code).get()
    .then(snapshot => {
      if (snapshot.exists()) {
        document.querySelector('.container').innerHTML = `
          <h2>انضممتِ إلى الجلسة ${code}</h2>
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
