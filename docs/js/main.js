// Antonio's Barbershop — shared front-end behavior (v1, no backend yet)

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNavLink();
  wireMobileNav();
  wireQuestionModal();
  wireBookingCalendar();
});

// Highlight the nav link matching the current page.
function highlightActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) link.classList.add("active");
  });
}

// Toggle the mobile nav menu.
function wireMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
  });
}

// "Have a Question?" modal, available on every page.
function wireQuestionModal() {
  const overlay = document.getElementById("question-modal");
  if (!overlay) return;
  const openers = document.querySelectorAll("[data-open-question]");
  const closers = overlay.querySelectorAll("[data-close-question]");

  openers.forEach((btn) =>
    btn.addEventListener("click", () => overlay.classList.add("open"))
  );
  closers.forEach((btn) =>
    btn.addEventListener("click", () => overlay.classList.remove("open"))
  );
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("open");
  });
}

// Mock booking calendar: lets a visitor pick a day + time slot.
// There is no backend yet, so this just previews availability — see the
// gcal-note on the page for what's planned once Google Calendar is wired up.
function wireBookingCalendar() {
  const grid = document.querySelector(".calendar-grid");
  const slotGrid = document.querySelector(".slot-grid");
  if (!grid || !slotGrid) return;

  const summary = document.querySelector(".booking-summary");
  let selectedDay = null;
  let selectedSlot = null;

  grid.querySelectorAll(".day-cell.available").forEach((cell) => {
    cell.addEventListener("click", () => {
      grid.querySelectorAll(".day-cell").forEach((c) => c.classList.remove("selected"));
      cell.classList.add("selected");
      selectedDay = cell.dataset.label;
      updateSummary();
    });
  });

  slotGrid.querySelectorAll(".slot:not(.taken)").forEach((slot) => {
    slot.addEventListener("click", () => {
      slotGrid.querySelectorAll(".slot").forEach((s) => s.classList.remove("selected"));
      slot.classList.add("selected");
      selectedSlot = slot.textContent.trim();
      updateSummary();
    });
  });

  function updateSummary() {
    if (!summary) return;
    if (selectedDay && selectedSlot) {
      summary.innerHTML = `You picked <strong>${selectedDay} at ${selectedSlot}</strong>. Message the shop to lock it in.`;
    } else {
      summary.innerHTML = "Pick a day and a time to see it summarized here.";
    }
  }
}
