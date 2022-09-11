export let finalArray = null;
export const getDate = () => {
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

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var timer;

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
  let finalArray;
  function addZero(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 10) {
        array[i] = "0" + array[i];
      }
    }
    finalArray = array;
    console.log(finalArray);
    //   setDays(array[0]);
    //   setHours(array[1]);
    //   setMinutes(array[2]);
    //   setSeconds(array[3]);
    // updateDisplay(array);
  }

  timer = setInterval(showRemaining, 1000);
};
getDate();
