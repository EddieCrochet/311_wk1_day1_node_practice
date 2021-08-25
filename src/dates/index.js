// import moment here; use this package in each function
import moment from 'moment';

const today = () => {
  // write code for dates.today
  return moment.format('dddd');
}

const calendar = () => {
  // write code for dates.calendar
  return moment.defaultFormat('MMMM Do YYYY');
}

const currentTime = () => {
  // write code for dates.currentTime
  return moment.format('h:mm:ss a');
}

module.exports = {
  today,
  calendar,
  currentTime
}