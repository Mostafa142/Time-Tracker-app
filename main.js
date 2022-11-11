const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

window.addEventListener("load", (e) => {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((value, index) => {
        const title = value.title;
        const current = value.timeframes.daily.current;
        const previous = value.timeframes.daily.previous;

        const titleElement = document.getElementById(`title-${index}`);
        const currentHoursElements = document.getElementById(
          `current-${index}`
        );

        titleElement.innerText = title;
        currentHoursElements.innerText = current.toString() + " hrs";

        const spanNode = document.createElement("span");
        spanNode.id = `span-${index}`;
        const textNode = document.createTextNode(
          "Yesterday -" + previous.toString() + "hrs"
        );
        spanNode.appendChild(textNode);
        currentHoursElements.parentNode.insertBefore(
          spanNode,
          currentHoursElements.nextSibling
        );
      });
    });
});

daily.addEventListener("click", function () {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((value, index) => {
        const title = value.title;
        const current = value.timeframes.daily.current;
        const previous = value.timeframes.daily.previous;

        const titleElement = document.getElementById(`title-${index}`);
        const currentHoursElements = document.getElementById(
          `current-${index}`
        );

        titleElement.innerText = title;
        currentHoursElements.innerText = current.toString() + " hrs";

        const oldSpan = document.getElementById(`span-${index}`);
        const textNode = "Yesterday -" + previous.toString() + "hrs";
        oldSpan.innerText = textNode;
      });
    });
});

weekly.addEventListener("click", function () {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((value, index) => {
        const title = value.title;
        const current = value.timeframes.weekly.current;
        const previous = value.timeframes.weekly.previous;

        const titleElement = document.getElementById(`title-${index}`);
        const currentHoursElements = document.getElementById(
          `current-${index}`
        );

        titleElement.innerText = title;
        currentHoursElements.innerText = current.toString() + " hrs";

        const oldSpan = document.getElementById(`span-${index}`);
        const textNode = "Last Week -" + previous.toString() + "hrs";
        oldSpan.innerText = textNode;
      });
    });
});

monthly.addEventListener("click", function () {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((value, index) => {
        const title = value.title;
        const current = value.timeframes.monthly.current;
        const previous = value.timeframes.monthly.previous;

        const titleElement = document.getElementById(`title-${index}`);
        const currentHoursElements = document.getElementById(
          `current-${index}`
        );

        titleElement.innerText = title;
        currentHoursElements.innerText = current.toString() + " hrs";

        const oldSpan = document.getElementById(`span-${index}`);
        const textNode = "Last Month -" + previous.toString() + "hrs";
        oldSpan.innerText = textNode;
      });
    });
});
