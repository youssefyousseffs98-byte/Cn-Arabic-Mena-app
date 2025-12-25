const data = {
  arabic: [
    { time: "06:00", title: "غامبول" },
    { time: "07:00", title: "وقت المغامرة" },
    { time: "08:00", title: "We Baby Bears" },
    { time: "09:00", title: "الجاسوسات" }
  ],
  mena: [
    { time: "06:00", title: "Gumball" },
    { time: "07:00", title: "Jellystone!" },
    { time: "08:00", title: "Grizzy and the Lemmings" },
    { time: "09:00", title: "Regular Show" }
  ]
};

const schedule = document.getElementById("schedule");
const select = document.getElementById("channelSelect");

function loadSchedule(channel) {
  schedule.innerHTML = "";
  data[channel].forEach(p => {
    schedule.innerHTML += `
      <div class="program">
        <span class="time">${p.time}</span>
        <span>${p.title}</span>
      </div>
    `;
  });
}

select.addEventListener("change", e => loadSchedule(e.target.value));
loadSchedule("arabic");