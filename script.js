const data = {
  arabic: {
    Sunday: [
      { time: "06:00", title: "غامبول", image:"images/gumball.png", description:"غامبول هو ولد أزرق يعيش مغامرات مضحكة مع عائلته وأصدقائه في مدينة غامبولتون."},
      { time: "07:00", title: "وقت المغامرة", image:"images/adventure_time.png", description:"مغامرات فتى يدعى فين والكلب المتحول جيك في أرض أُو."},
      { time: "08:00", title: "We Baby Bears", image:"images/we_baby_bears.png", description:"الدببة الصغيرة تبحث عن بيت جديد وتجارب ممتعة."}
    ],
    Monday: [
      { time: "06:00", title: "الجاسوسات", image:"images/totally_spies.png", description:"ثلاث فتيات جاسوسات يقمن بمهمات سرية حول العالم."}
    ]
    // أضف باقي الأيام والبرامج بنفس الطريقة
  },
  mena: {
    Sunday: [
      { time: "06:00", title: "Gumball", image:"images/gumball.png", description:"Gumball is a blue cat who has funny adventures with his family and friends in Elmore."},
      { time: "07:00", title: "Jellystone!", image:"images/jellystone.png", description:"Yogi Bear and friends' funny adventures in Jellystone Park."}
    ]
    // أضف باقي الأيام والبرامج
  }
};

const schedule = document.getElementById("schedule");
const channelSelect = document.getElementById("channelSelect");
const daySelect = document.getElementById("daySelect");
let currentPrograms = [];

function loadSchedule() {
  const channel = channelSelect.value;
  const day = daySelect.value;
  schedule.innerHTML = "";
  currentPrograms = data[channel][day] || [];
  currentPrograms.forEach(p => {
    schedule.innerHTML += `
      <div class="program" data-title="${p.title}">
        <span class="time">${p.time}</span>
        <span>${p.title}</span>
      </div>
    `;
  });
}

channelSelect.addEventListener("change", loadSchedule);
daySelect.addEventListener("change", loadSchedule);
loadSchedule();

// Popup
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupImage = document.getElementById("popupImage");
const popupDescription = document.getElementById("popupDescription");
const closePopup = document.getElementById("closePopup");

schedule.addEventListener("click", function(e){
  const programDiv = e.target.closest(".program");
  if(!programDiv) return;
  const title = programDiv.dataset.title;
  const program = currentPrograms.find(p => p.title === title);
  if(program){
    popupTitle.textContent = program.title;
    popupImage.src = program.image;
    popupDescription.textContent = program.description;
    popup.style.display = "block";
  }
});

closePopup.addEventListener("click", () => popup.style.display = "none");