// Study Log - tracks focused study sessions in the browser
const sessions = [];

function addSession(subject, minutes) {
  sessions.push({ subject: subject, minutes: Number(minutes) });
  renderList();
  renderTotal();
}

function renderList() {
  const list = document.getElementById("session-list");
  list.innerHTML = "";
  for (const session of sessions) {
    const item = document.createElement("li");
    item.textContent = session.subject + " - " + session.minutes + " min";
    list.appendChild(item);
  }
}

function renderTotal() {
  const total = sessions.reduce((sum, session) => sum + session.minutes, 0);
  document.getElementById("total").textContent = "Total: " + total + " min";
}

document.getElementById("session-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const subject = document.getElementById("subject").value;
  const minutes = document.getElementById("minutes").value;
  addSession(subject, minutes);
  event.target.reset();
});
