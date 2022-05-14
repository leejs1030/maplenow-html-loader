const bootstrap = () => {
  const date = document.querySelector("#date input");
  const maxDate = document.createAttribute("data-max-date");
  const now = new Date();
  maxDate.value = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
  date.attributes.setNamedItem(maxDate);
  const value = document.createAttribute("value");
  value.value = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
  date.attributes.setNamedItem(value);
  Metro.utils.addLocale({
    "ko-KR": {
      calendar: {
        months: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
        ],
        days: ["일", "월", "화", "수", "목", "금", "토"],
        time: {
          days: "요일",
          hours: "시",
          minutes: "분",
          seconds: "초",
        },
      },
    },
  });
};

bootstrap();
