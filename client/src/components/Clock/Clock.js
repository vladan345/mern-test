import React from "react";
import "./Clock.css";
import { useState, useEffect } from "react";

import Unit from "./Unit/Unit";

import { getDate, finalArray } from "../../utils/getDate";

export default function Clock() {
  const [seconds, setSeconds] = useState("0" + 0);
  const [minutes, setMinutes] = useState("0" + 0);
  const [hours, setHours] = useState("0" + 0);
  const [days, setDays] = useState("0" + 0);
  console.log(finalArray);
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
    <div className="Clock">
      {/* <h1>It's {dataObject.name}'s birthday soon</h1> */}
      <div className="timer">
        <Unit unit="day" unitValue={days} />
        <Unit unit="hour" unitValue={hours} />
        <Unit unit="minute" unitValue={minutes} />
        <Unit unit="second" unitValue={seconds} />
      </div>
    </div>
  );
}
