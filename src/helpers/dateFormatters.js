import moment from 'moment';

export const formatDuration = duration => {
  const newDuration = duration.split('d');
  const hoursAmountFromDays = 24 * +newDuration[0];
  const hours = moment.duration(newDuration[1]).asHours();
  return (+hours + +hoursAmountFromDays).toFixed(1);
};

export default class FormatDate {
  constructor(date) {
    this.date = date;
  }
  formatFullDate = () => {
    return moment(this.date).format('MM/DD/YYYY HH:mm');
  };
}
