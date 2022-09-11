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
  newDate: null,
};
export let name = "";

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

//THIS FUNCTION MAKES NEW ARRAY WITH ALL DATES WITH NEW YEAR.
function changeYear(oldArray) {
  for (let i in oldArray) {
    var newDate = year + oldArray[i].date.slice(-15);
    oldArray[i].date = newDate;
    oldArray[i].year = year;
  }
  return oldArray;
}

//THIS CHECKS IF BIRTHAY HAS PASSED, IF YES, IT ADDS 1 TO COUNTER
//IF NOT, IT MEANS THAT BIRTHDAY IS NEXT UP.
function loopDates(dateArray) {
  var today = new Date();
  for (let i = 0; i < dateArray.length; i++) {
    var checkDate = new Date(dateArray[i].date);
    var choosenName = dateArray[i].name;
    if (checkDate > today) {
      dataObject.newDate = checkDate;
      name = choosenName;
      break;
    } else {
      counter++;
    }
  }
}

var end = new Date(dataObject.newDate);

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

export function showRemaining() {
  console.log("fired");
  var now = new Date();
  var distance = end - now;

  var days = Math.floor(distance / day);
  var hours = Math.floor((distance % day) / hour);
  var minutes = Math.floor((distance % hour) / minute);
  var seconds = Math.floor((distance % minute) / second);

  let timeArr = [days, hours, minutes, seconds];

  for (let i in timeArr) {
    if (timeArr[i] < 10) {
      timeArr[i] = "0" + timeArr[i];
    }
  }
  return timeArr;
}
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
