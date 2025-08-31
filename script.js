// Highlight active sidebar item
document.querySelectorAll('.sidebar button').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.sidebar button').forEach(btn => btn.classList.remove('active'));
    item.classList.add('active');
  });
});

// Alerts Button Click
const alertsBtn = document.getElementById("alertsBtn");
if (alertsBtn) {
  alertsBtn.addEventListener("click", function () {
    alert("Navigating to Alerts Panel...");
    // Future: showPanel("alertsPanel");
  });
}

// Settings Button Click
const settingsBtn = document.getElementById("settingsBtn");
if (settingsBtn) {
  settingsBtn.addEventListener("click", function () {
    alert("Opening Settings...");
    // Future: showPanel("settingsPanel");
  });
}
