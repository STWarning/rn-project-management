import moment from 'moment';
import { convertToDateFormat } from './TimeUtils';

function generateHomeSubtitle() {
  const currentTimestamp = moment().unix();
  const subTitleFormat = 'dd MMM, yyyy';
  return convertToDateFormat(currentTimestamp, subTitleFormat);
}

export { generateHomeSubtitle };
