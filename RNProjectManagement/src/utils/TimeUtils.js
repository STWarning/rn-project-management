import moment from 'moment';

function convertToDateFormat(timestamp, dateFormat) {
  return moment(timestamp).format(dateFormat);
}

export {
  convertToDateFormat,
}