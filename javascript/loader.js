const base = "https://ljs1030.github.io/maplenow-logs-html";
const loader = ({ year, month, date, hour, pageType, pageName }) => {
  $("#html-position").load(
    `${base}/${year}/${month}/${date}/${hour}/${pageType}/${pageName}.html #body-div`
  );
};

const regex = /.*\/[1-5]/;
const selection = document.getElementById("selection");
selection.addEventListener("click", (e) => {
  const page = e.target.id;
  if (regex.test(page)) console.log(page);
});
