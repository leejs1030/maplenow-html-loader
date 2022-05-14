bootstrap();
const base = "https://ljs1030.github.io/maplenow-logs-html";
const regex = /.*\/[1-5]/;
const selection = document.getElementById("select-page");
const pos = $("#html-position");
const dateInput = $("#date input");

const loadHtml = ({ year, month, day, hour, page }) => {
  try {
    pos.load(`${base}/${year}/${month}/${day}/${hour}/${page}.html`, (r, s) =>
      s === "error"
        ? pos.html(
            "<h1>해당 시점으로부터 로그를 불러오는 데에 실패하였습니다.</h1>"
          )
        : ""
    );
  } catch (err) {
    console.log("you failed!");
  }
};

const validateDate = ({ year, month, day, hour }) => {
  // let changedMonth = (parseInt(month) + 1).toString();
  // if (changedMonth.length === 1) changedMonth = `0${changedMonth}`;
  const maxTime = new Date(`${year}-${month}-${day}T${hour}:10:00`);
  const now = new Date();
  maxTime.setMinutes(maxTime.getMinutes() + now.getTimezoneOffset());
  console.log(maxTime.toISOString());
  console.log(now.toISOString());
  if (now <= maxTime) {
    pos.html(
      "<h1>아직 로그가 만들어지지 않은 시점입니다! 나중에 다시 시도해 주세요!</h1>"
    );
    return false;
  }
  return true;
};

selection.addEventListener("click", (e) => {
  const page = e.target.id;
  const [year, month, day] = dateInput.val().split("/");
  console.log(year);
  console.log(dateInput.val().split("/"));
  const hour = $("#time > select").val();
  if (regex.test(page) && validateDate({ year, month, day, hour })) {
    loadHtml({ year, month, day, hour, page });
  }
});
