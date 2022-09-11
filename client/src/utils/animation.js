let prevDate = {
  second: 0,
  minute: 0,
  hour: 0,
  day: 0,
};

export function updateDisplay(value, unit) {
  if (value !== prevDate) {
    animate(prevDate[unit], value, unit);
  } else {
    document.querySelector(`#${unit} .top-front span`).innerHTML = value;
    document.querySelector(`#${unit} .bottom-front span`).innerHTML = value;
    document.querySelector(`#${unit} .top-back span`).innerHTML = value;
    document.querySelector(`#${unit} .bottom-back span`).innerHTML = value;
  }

  prevDate[unit] = value;
}

export function animate(prev, value, unit) {
  document.querySelector(`#${unit} .top-front span`).innerHTML = prev;
  document.querySelector(`#${unit} .bottom-front span`).innerHTML = prev;
  document.querySelector(`#${unit} .top-back span`).innerHTML = value;
  document.querySelector(`#${unit} .bottom-back span`).innerHTML = value;

  var topFront = document.querySelector(`#${unit} .top-front`);
  var bottomBack = document.querySelector(`#${unit} .bottom-back`);
  topFront.classList.add("flipped-top");
  bottomBack.classList.add("flipped-bottom");

  bottomBack.addEventListener("transitionend", () => {
    topFront.classList.remove("flipped-top");
    bottomBack.classList.remove("flipped-bottom");
    document.querySelector(`#${unit} .top-front span`).innerHTML = value;
    document.querySelector(`#${unit} .bottom-front span`).innerHTML = value;
  });
}
