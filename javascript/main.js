const base = "https://ljs1030.github.io/maplenow-logs-html";
const regex = /.*\/[1-5]/;
const selection = document.getElementById("select-page");
const pos = $("#html-position");
const dateInput = $("#date input");
const minTime = 1652530199000; //서비스 시작 시점! 수정 필요.

bootstrap(new Date(minTime + 9 * 60 * 60 * 1000));

const loadHtml = ({ year, month, day, hour, page }) => {
  try {
    pos.load(
      `${base}/${year}/${month}/${day}/${hour}/${page}.html #body-div`,
      (r, s) =>
        s === "error"
          ? alert("알 수 없는 이유로 로그를 가져올 수 없습니다...")
          : ""
    );
  } catch (err) {
    console.log("you failed!");
  }
};

const validateDate = ({ year, month, day, hour }) => {
  const now = new Date();
  const selected = new Date(`${year}-${month}-${day}T${hour}:10:00`).getTime(); // utc 0 시간
  const maxTime = now.getTime(); // utc 0 시간
  const beforeYear = (() => {
    const x = new Date(now);
    x.setUTCFullYear(now.getUTCFullYear() - 1);
    return x.getTime();
  })();
  console.log(new Date(selected));
  console.log(new Date(maxTime));
  console.log(new Date(minTime));
  console.log(new Date(beforeYear));
  if (selected >= maxTime) {
    alert("아직 로그가 작성되지 않은 시점입니다!");
    return false;
  } else if (selected <= minTime) {
    alert("로깅 서비스 시작 전으로, 조회할 수 없는 데이터입니다!");
    return false;
  } else if (selected <= beforeYear) {
    alert("로그의 최대 보관 기한은 1년입니다!");
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
