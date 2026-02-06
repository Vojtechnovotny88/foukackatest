const prices = {
  area: 350,
  walkway: 380,
  decking: 580,
};

const formatCzk = (value) =>
  new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 }).format(value);

const areaInput = document.getElementById("area");
const walkwayInput = document.getElementById("walkway");
const deckingInput = document.getElementById("decking");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const noteInput = document.getElementById("note");

const resArea = document.getElementById("res-area");
const resWalkway = document.getElementById("res-walkway");
const resDecking = document.getElementById("res-decking");
const resTotal = document.getElementById("res-total");

const updateCalc = () => {
  const area = Number(areaInput.value || 0);
  const walkway = Number(walkwayInput.value || 0);
  const decking = Number(deckingInput.value || 0);

  const areaCost = area * prices.area;
  const walkwayCost = walkway * prices.walkway;
  const deckingCost = decking * prices.decking;
  const total = areaCost + walkwayCost + deckingCost;

  resArea.textContent = formatCzk(areaCost);
  resWalkway.textContent = formatCzk(walkwayCost);
  resDecking.textContent = formatCzk(deckingCost);
  resTotal.textContent = formatCzk(total);
  calcTotalField.value = formatCzk(total);
};

[areaInput, walkwayInput, deckingInput].forEach((input) => {
  input.addEventListener("input", updateCalc);
});

updateCalc();

const form = document.getElementById("calc-form");
const calcTotalField = document.getElementById("calc_total");
const updateHiddenTotal = () => {
  const area = Number(areaInput.value || 0);
  const walkway = Number(walkwayInput.value || 0);
  const decking = Number(deckingInput.value || 0);
  const total = area * prices.area + walkway * prices.walkway + decking * prices.decking;
  calcTotalField.value = formatCzk(total);
};

form.addEventListener("submit", () => {
  updateHiddenTotal();
});

const heating = document.getElementById("heating");
const heatingVal = document.getElementById("heating-val");
const savingsVal = document.getElementById("savings-val");

const updateSavings = () => {
  const value = Number(heating.value);
  const low = Math.round(value * 0.15);
  const high = Math.round(value * 0.3);
  heatingVal.textContent = formatCzk(value);
  savingsVal.textContent = `${formatCzk(low)} – ${formatCzk(high)}`;
};

heating.addEventListener("input", updateSavings);
updateSavings();

const endDate = new Date("2026-03-15T23:59:59");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");

const updateCountdown = () => {
  const now = new Date();
  const diff = endDate - now;
  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    return;
  }
  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
};

updateCountdown();
setInterval(updateCountdown, 60000);

const gallery = document.getElementById("gallery");
const galleryImages = [
  "WhatsApp Image 2026-01-09 at 07.37.19.jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.19 (1).jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.20.jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.21.jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.21 (1).jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.22.jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.22 (1).jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.23.jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.23 (1).jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.24.jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.24 (1).jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.24 (2).jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.25.jpeg",
  "WhatsApp Image 2026-01-09 at 07.37.25 (1).jpeg",
];

galleryImages.forEach((name) => {
  const img = document.createElement("img");
  img.src = encodeURI(`assets/realizace/${name}`);
  img.alt = "Ukázka realizace foukané izolace";
  gallery.appendChild(img);
});
