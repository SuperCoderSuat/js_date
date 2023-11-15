// ****************************************
//             JS Date lvl 1.1
// ****************************************
console.log("%c JS Date lvl 1.1", "color:green");

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

// ****************************************
//             JS Date lvl 1.3
// ****************************************
console.log("%c JS Date lvl 1.3", "color:green");

const date5 = new Date();

date5.setFullYear(2222);
date5.setMonth(9);
date5.setDate(23);

console.log(date5);

const date6 = new Date();

date6.setFullYear(2123);
date6.setMonth(1);
date6.setDate(24);

console.log(date6);

const date7 = new Date();

date7.setFullYear(2123);
date7.setMonth(2);
date7.setDate(24);

console.log(date7);

const date8 = new Date();
date8.setDate(date8.getDate() + 30);

console.log(date8);

// ****************************************
//             JS Date lvl 1.5
// ****************************************
console.log("%c JS Date lvl 1.5", "color:green");

const getMonthName = (dateString) => {

    const months = [

        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"

    ];

    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    return months[monthIndex];

}

const heute = new Date();
const monatsname = getMonthName(heute);

console.log(`Der aktuelle Monat ist: ${monatsname}`);
console.log(getMonthName("2001-03-04")); 
console.log(getMonthName("2019-12-24"));
console.log(getMonthName("1410-07-15"));

// ****************************************
//             JS Date lvl 1.6
// ****************************************
console.log("%c JS Date lvl 1.6", "color:green");

const getAMPM = (time) => {

    const period = time.getHours() < 12 ? 'AM' : 'PM';
    return period;

}

const date9 = new Date(1999, 10, 5, 15);
const date10 = new Date();
const date11 = new Date(2019, 12, 3, 12);
const date12 = new Date(2000, 1, 1, 11);

console.log(getAMPM(date9));
console.log(getAMPM(date10));
console.log(getAMPM(date11));
console.log(getAMPM(date12));

// ****************************************
//             JS Date lvl 1.7
// ****************************************
console.log("%c JS Date lvl 1.7", "color:green");

const checkWeekend = (date) => {

    const dayOfWeek = date.getDay();

    // 0 steht für Sonntag, 6 steht für Samstag
    if (dayOfWeek === 0 || dayOfWeek === 6) {

        return "Weekend";

    } else {

        return "Arbeitstag";

    }

}

const date13 = new Date(2019, 11, 15);
const date14 = new Date(2001, 1, 16);
const date15 = new Date(2020, 1, 1);
const date16 = new Date(2020, 1, 29);

console.log(checkWeekend(date13));
console.log(checkWeekend(date14));
console.log(checkWeekend(date15));
console.log(checkWeekend(date16));

// ****************************************
//             JS Date lvl 1.10
// ****************************************
console.log("%c JS Date lvl 1.10", "color:green");

const displayCurrentDate = () => {

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Monate beginnen bei 0, daher +1
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`; // oder `${day}/${month}/${year}`

    document.body.querySelector('#currentDate').textContent = formattedDate;

}

displayCurrentDate();




