function solve(){

  const text = document.getElementById("input").value;

  document.getElementById("output").innerHTML = `
    🧠 الحل:<br><br>
    ${text}<br><br>
    ✔ الخطوة 1: فهم السؤال<br>
    ✔ الخطوة 2: تطبيق القانون<br>
    ✔ الخطوة 3: الحل النهائي
  `;
}

function fill(text){
  document.getElementById("input").value = text;
}
