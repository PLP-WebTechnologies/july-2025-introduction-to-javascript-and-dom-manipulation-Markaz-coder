// 🚀 Assignment Script

// -----------------------------
// Part 1: Basics (Variables + Conditionals)
let userAge;
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  userAge = document.getElementById("ageInput").value;

  if (userAge >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult!";
  } else {
    document.getElementById("ageResult").textContent = "❌ You are underage!";
  }
});

// -----------------------------
// Part 2: Functions
function calculateTotal(a, b) {
  return a + b;
}

function formatString(str) {
  return str.toUpperCase();
}

document.getElementById("totalBtn").addEventListener("click", () => {
  const total = calculateTotal(5, 10);
  document.getElementById("totalResult").textContent = 
    "The total is: " + formatString(total.toString());
});

// -----------------------------
// Part 3: Loops
document.getElementById("loopBtn").addEventListener("click", () => {
  const list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }
});

// -----------------------------
// Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("domText").classList.toggle("highlight");
});
