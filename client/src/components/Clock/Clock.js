import React from "react";
import "./Clock.css";
import { useState } from "react";

import Seconds from "./Seconds/Seconds";

export default function Clock() {
  const [seconds, setSeconds] = useState("0" + 0);
  var year = new Date().getFullYear();

  let birthdays = [
    {
      year: year,
      name: "Tara",
      date: `${year}-01-19T00:00:00`,
    },
    {
      year: year,
      name: "Dusan(Avala)",
      date: `${year}-02-27T00:00:00`,
    },
    {
      year: year,
      name: "Natalija",
      date: `${year}03-29T00:00:00`,
    },
    {
      year: year,
      name: "Vladan",
      date: `${year}-04-10T00:00:00`,
    },
    {
      year: year,
      name: "Jana",
      date: `${year}-08-01T00:00:00`,
    },
    {
      year: year,
      name: "Filip",
      date: `${year}-08-20T00:00:00`,
    },
    {
      year: year,
      name: "Nixa",
      date: `${year}-09-02T00:00:00`,
    },
    {
      year: year,
      name: "Alex",
      date: `${year}-10-12T00:00:00`,
    },
    {
      year: year,
      name: "Tonic",
      date: `${year}-10-21T00:00:00`,
    },
    {
      year: year,
      name: "Flora",
      date: `${year}-11-28T00:00:00`,
    },
    {
      year: year,
      name: "Dimi",
      date: `${year}-12-04T00:00:00`,
    },
    {
      year: year,
      name: "Dusan(Souly) and Toza",
      date: `${year}-12-12T00:00:00`,
    },
  ];

  let dataObject = {
    name: "",
    newDate: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  };

  var counter = 0;
  //IF COUNTER IS EQUALS TO NUMBER OF BIRTHDAYS, THAT MEANS
  //THERE ARE NO BIRTHDAYS LEFT THIS YEAR.
  //IN THAT CASE WE NEED TO CHANGE CURRENT YEAR SO THE PROGRAM
  //CAN CHECK NEXT BIRTHDAY IN THE BEGGINING OF THE NEXT YEAR.
  function getBirthday(array) {
    loopDates(array);
    if (counter === array.length) {
      year++;
      let newArray = changeYear([...array]);
      loopDates(newArray);
    }
  }
  getBirthday(birthdays);

  //THIS CHECKS IF BIRTHAY HAS PASSED, IF YES, IT ADDS 1 TO COUNTER
  //IF NOT, IT MEANS THAT BIRTHDAY IS NEXT UP.
  function loopDates(dateArray) {
    var today = new Date();
    for (let i = 0; i < dateArray.length; i++) {
      var checkDate = new Date(dateArray[i].date);
      var choosenName = dateArray[i].name;
      if (checkDate > today) {
        dataObject.newDate = checkDate;
        dataObject.name = choosenName;
        break;
      } else {
        counter++;
      }
    }
  }

  //THIS FUNCTION MAKES NEW ARRAY WITH ALL DATES WITH NEW YEAR.
  function changeYear(oldArray) {
    for (let i = 0; i < oldArray.length; i++) {
      var newDate = year + oldArray[i].date.slice(-15);
      oldArray[i].date = newDate;
      oldArray[i].year = year;
    }
    return oldArray;
  }

  var end = new Date(dataObject.newDate);
  //   var units = ["day", "hour", "minute", "second"];

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var timer;

  //   let prevDate = [0, 0, 0, 0];

  function showRemaining() {
    var now = new Date();
    var distance = end - now;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector("h1").innerHTML = "Visit our site";
      return;
    }

    var days = Math.floor(distance / day);
    var hours = Math.floor((distance % day) / hour);
    var minutes = Math.floor((distance % hour) / minute);
    var seconds = Math.floor((distance % minute) / second);

    addZero([days, hours, minutes, seconds]);
  }

  function addZero(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 10) {
        array[i] = "0" + array[i];
      }
    }

    dataObject.days = array[0];
    dataObject.hours = array[1];
    dataObject.minutes = array[2];
    setSeconds(array[3]);
  }

  timer = setInterval(showRemaining, 1000);

  //   function updateDisplay(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] !== prevDate[i]) {
  //       animate(units[i], prevDate[i], array[i]);
  //     } else {
  //       document.querySelector(`#${units[i]} .top-front span`).innerHTML =
  //         array[i];
  //       document.querySelector(`#${units[i]} .bottom-front span`).innerHTML =
  //         array[i];
  //       document.querySelector(`#${units[i]} .top-back span`).innerHTML =
  //         array[i];
  //       document.querySelector(`#${units[i]} .bottom-back span`).innerHTML =
  //         array[i];
  //     }
  //   }
  // prevDate = array;
  //   }

  //   function animate(unit, prev, value) {
  //     document.querySelector(`#${unit} .top-front span`).innerHTML = prev;
  //     document.querySelector(`#${unit} .bottom-front span`).innerHTML = prev;
  //     document.querySelector(`#${unit} .top-back span`).innerHTML = value;
  //     document.querySelector(`#${unit} .bottom-back span`).innerHTML = value;

  //     var topFront = document.querySelector(`#${unit} .top-front`);
  //     topFront.classList.add("flipped-top");
  //     var bottomBack = document.querySelector(`#${unit} .bottom-back`);
  //     bottomBack.classList.add("flipped-bottom");

  //     bottomBack.addEventListener("transitionend", () => {
  //       topFront.classList.remove("flipped-top");
  //       bottomBack.classList.remove("flipped-bottom");
  //       document.querySelector(`#${unit} .top-front span`).innerHTML = value;
  //       document.querySelector(`#${unit} .bottom-front span`).innerHTML = value;
  //     });
  //   }

  //Generate data
  //   const dataScroll = document.querySelector(".data-scroll");
  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];

  //   const generateData = () => {
  //     let htmlString = "";

  //     for (let i = 0; i < birthdays.length; i++) {
  //       let month = parseInt(birthdays[i].date[5] + birthdays[i].date[6]);
  //       let day = birthdays[i].date[8] + birthdays[i].date[9];

  //       htmlString += `<div class="row">
  //     <p class="name">${birthdays[i].name}</p>
  //     <div class="menu-date">
  //     <p class="menu-month">${months[month - 1]}</p>
  //     <p class="menu-day">${day}</p>
  //     </div>
  //   </div>`;
  //     }
  //     dataScroll.innerHTML = htmlString;

  //     // const currentDate = new Date().toString().split(" ");
  //     // const today = (document.querySelector(
  //     //   ".date-number"
  //     // ).innerHTML = `${currentDate[2]} ${currentDate[1]} ${currentDate[3]}`);
  //   };
  //   generateData();

  return (
    <div>
      <h1>It's {dataObject.name}'s birthday soon</h1>
      <div className="timer">
        <div className="timer-part">
          <div className="outer" id="day">
            <div className="top-front">
              <span className="number">00</span>
            </div>
            <div className="top-back">
              <span className="number">00</span>
            </div>
            <div className="bottom-front">
              <span className="number">00</span>
            </div>
            <div className="bottom-back">
              <span className="number">00</span>
            </div>
          </div>
          <p className="label">days</p>
        </div>
        <div className="timer-part">
          <div className="outer" id="hour">
            <div className="top-front">
              <span className="number">00</span>
            </div>
            <div className="top-back">
              <span className="number">00</span>
            </div>
            <div className="bottom-front">
              <span className="number">00</span>
            </div>
            <div className="bottom-back">
              <span className="number">00</span>
            </div>
          </div>
          <p className="label">hours</p>
        </div>
        <div className="timer-part">
          <div className="outer" id="minute">
            <div className="top-front">
              <span className="number">00</span>
            </div>
            <div className="top-back">
              <span className="number">00</span>
            </div>
            <div className="bottom-front">
              <span className="number">00</span>
            </div>
            <div className="bottom-back">
              <span className="number">00</span>
            </div>
          </div>
          <p className="label">minutes</p>
        </div>
        <Seconds seconds={seconds} />
      </div>
    </div>
  );
}
