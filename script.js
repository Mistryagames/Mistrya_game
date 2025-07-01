function startGame() {
  document.querySelector(".container").innerHTML = `
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

function nextScene() {
  document.querySelector(".container").innerHTML = `
    <h2 style="direction: rtl;">الفصل 1: التحقيق يبدأ</h2>
    <p style="direction: rtl;">
      وصلتِ إلى غرفة النبيذ القديمة حيثُ وجد الجدّ <strong>فيتوريو</strong> ملقى على الأرض،
      وكل من العائلة واقف حوله بوجوه متباينة بين الصدمة والخوف.
    </p>
    <p style="direction: rtl;">
      من تريدين أن تحققي معه أولاً؟
    </p>
    <div style="display: flex; flex-direction: column; gap: 10px; max-width: 400px; margin: auto; direction: rtl;">
      <button onclick="interrogate('Marco')">ماركو (الابن)</button>
      <button onclick="interrogate('Elisa')">إليسا (الزوجة)</button>
      <button onclick="interrogate('Beatrice')">بياتريس (الابنة)</button>
      <button onclick="interrogate('Grazia')">جرازيا (العمة)</button>
      <button onclick="interrogate('Riccardo')">ريكاردو (الخاطب)</button>
    </div>
  `;
}

function interrogate(who) {
  let text = '';
  if (who === 'Marco') {
    text = `
      <h2 style="direction: rtl;">تحقيق مع ماركو</h2>
      <p style="direction: rtl;">
        ماركو يبدو مرتبكاً. قال إنه كان يراجع قائمة الضيوف عندما سمع الصرخة.
        لكنه لم يرَ أحداً يدخل أو يخرج من غرفة النبيذ.
      </p>
      <button onclick="nextScene()">عودة للتحقيق</button>
    `;
  }
  else if (who === 'Elisa') {
    text = `
      <h2 style="direction: rtl;">تحقيق مع إليسا</h2>
      <p style="direction: rtl;">
        إليسا تُمسك بكوب نبيذ بيد متعبة. أخبرتني أنها كانت تفحص أنواع النبيذ في القاعة الكبرى
        ولم تسمع خطوات قبل الصرخة.
      </p>
      <button onclick="nextScene()">عودة للتحقيق</button>
    `;
  }
  else if (who === 'Beatrice') {
    text = `
      <h2 style="direction: rtl;">تحقيق مع بياتريس</h2>
      <p style="direction: rtl;">
        بياتريس نظرت إلي وخاطبتني بصوت مرتعش: "لم أكن في الداخل، كنت أرسم في جناحي..."
      </p>
      <button onclick="nextScene()">عودة للتحقيق</button>
    `;
  }
  else if (who === 'Grazia') {
    text = `
      <h2 style="direction: rtl;">تحقيق مع جرازيا</h2>
      <p style="direction: rtl;">
        جرازيا عبّرت عن قلقها: "الطاقة هنا مظلمة. رأيت علامة في التاروت تشير إلى نهاية..."
      </p>
      <button onclick="nextScene()">عودة للتحقيق</button>
    `;
  }
  else if (who === 'Riccardo') {
    text = `
      <h2 style="direction: rtl;">تحقيق مع ريكاردو</h2>
      <p style="direction: rtl;">
        ريكاردو نظر إليّ ببرود: "خرجت لأتنفس قليلاً قبل الاحتفال… وجدت الكوب مكسورًا عند الباب."
      </p>
      <button onclick="nextScene()">عودة للتحقيق</button>
    `;
  }
  document.querySelector(".container").innerHTML = text;
}
