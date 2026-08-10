// Study Log - tracks focused study sessions in the browser
const sessions = [];

function addSession(subject, minutes) {
  const cleanSubject = subject.trim();
  const parsedMinutes = Number(minutes);
  const error = document.getElementById("error");
  if (cleanSubject === "" || !Number.isFinite(parsedMinutes) || parsedMinutes <= 0) {
    error.textContent = "Enter a subject and a positive number of minutes.";
    return;
  }
  error.textContent = "";
  sessions.push({ subject: cleanSubject, minutes: parsedMinutes });
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
  const hours = Math.floor(total / 60);
  const remainder = total % 60;
  const label = hours > 0 ? hours + " hr " + remainder + " min" : remainder + " min";
  document.getElementById("total").textContent = "Total: " + label;

}


document.getElementById("session-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const subject = document.getElementById("subject").value;
  const minutes = document.getElementById("minutes").value;
  addSession(subject, minutes);
  event.target.reset();
});
