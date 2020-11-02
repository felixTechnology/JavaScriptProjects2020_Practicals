/*We need the following
 * 1. Ending date
 * 2. current date
 * 3. subtract to find how many days,mins,hours,and seconds
 * */

/*
* days
* hours
* mins
* seconds
* */

 const daysEl = document.getElementById('days');/*12*/
 const  hoursEl = document.getElementById('hours');/*13*/
 const  minsEl = document.getElementById('mins');/*14*/
 const  secondsEl = document.getElementById('seconds');/*15*/

const newYears = '1 Jan 2021';/*1*/

/*Have your function countdown*/

function countdown() {
    const newYearsDate = new Date(newYears); /*3.passing the string declared into the instance object Date*/
    const currentDate = new Date; /*2. current date*/

    const totalSeconds = (newYearsDate - currentDate) /1000; /*7*/
    /*const days = (seconds /3600/24)*/
    const days = Math.floor(totalSeconds / 3600 /24);/*8. */

    const hours = Math.floor(totalSeconds / 3600 ) % 24;/*9*/

    const minutes = Math.floor(totalSeconds / 60) % 60;/*10*/

    const  seconds = Math.floor(totalSeconds )% 60;/*11*/


    daysEl.innerHTML =days;
    hoursEl.innerHTML =hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML =seconds;




    //console.log(days, hours,minutes,seconds); /*4.logging in browser to check output..this will give us in millisecond 5100606000*/

}
countdown();/*5*/
setInterval(countdown, 1000); /*6.This will call JS function/method to call the countdown every second */

