
// ========== AI ==========
async function askAI(){

  const input = document.getElementById("aiInput").value;
  const out = document.getElementById("aiOut");

  out.innerHTML = "⏳ جاري التفكير...";

  const res = await fetch("/api", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({question: input})
  });

  const data = await res.json();

  out.innerHTML = data.answer;
}

// ========== بنك أسئلة ==========
const questions = [
  {q:"حل: x² + 5x + 6 = 0", a:"x = -2 أو -3"},
  {q:"بسط: 3/4 + 2/5", a:"23/20"},
  {q:"مشتقة x²", a:"2x"}
];

function loadBank(){
  const bank = document.getElementById("bank");

  questions.forEach((item,i)=>{
    bank.innerHTML += `
      <div class="question">
        <p>${item.q}</p>
        <button onclick="alert('${item.a}')">عرض الحل</button>
      </div>
    `;
  });
}

loadBank();

// ========== Quiz ==========
function startQuiz(){

  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  questions.forEach((q,i)=>{
    quiz.innerHTML += `
      <div class="question">
        <p>${q.q}</p>
        <input id="q${i}" placeholder="إجابتك">
      </div>
    `;
  });

  quiz.innerHTML += `<button onclick="check()">تصحيح</button>`;
}

function check(){

  let score = 0;

  questions.forEach((q,i)=>{
    let val = document.getElementById("q"+i).value;
    if(val.trim() !== "") score++;
  });

  document.getElementById("score").innerText =
    "نتيجتك: " + score + "/" + questions.length;
}
