import moment from 'moment';

export const formatDuration = duration => {
  const newDuration = duration.split('d');
  const hoursAmountFromDays = 24 * +newDuration[0];
  const hours = moment.duration(newDuration[1]).asHours();
  const result = +hours + +hoursAmountFromDays;
  return moment
    .utc(moment.duration(result, 'hours').asMilliseconds())
    .format('HH:mm');
};

export default class FormatDate {
  constructor(date1, date2) {
    this.date1 = date1;
    this.date2 = date2;
  }

  formatFullDate = () => {
    if (!this.date1) {
      return null;
    }
    return moment(this.date1).format('MM/DD/YYYY HH:mm');
  };

  secondsToHHmm = () => {
    const duration = moment.duration(this.date1, 'seconds');
    return moment
      .utc(moment.duration(duration.asSeconds(), 'seconds').asMilliseconds())
      .format('HH:mm');
  };

  calculateDuration = () => {
    if (!this.date1 && this.date2) {
      return null;
    }
    const end = moment(this.date1);
    const start = moment(this.date2);
    const difference = moment.duration(end.diff(start));
    return moment
      .utc(moment.duration(difference.asMinutes(), 'minutes').asMilliseconds())
      .format('HH:mm');
  };
}
