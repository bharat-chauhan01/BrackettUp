import { constant } from '../apis/constant';
import { format, isToday, isTomorrow, isYesterday, parseISO } from 'date-fns';

export const capitalizeFirstLetter = string => {
  return string.replace(/\b\w/g, char => char.toUpperCase());
};

export class BackendUnreachableError extends Error {
  constructor() {
    super(constant.error.backendUnreachableErrorMessage);
    this.name = 'BackendUnreachable';
  }
}

export class InvalidMobileNumberError extends Error {
  constructor() {
    super(constant.error.invalidMobileNumber);
    this.name = 'InvalidMobileNumber';
  }
}

export const transformDateByReferenceDayAndDDMMM = dateString => {
  const date = parseISO(dateString);

  if (isToday(date)) {
    return 'Today' + ', ' + format(date, 'dd MMM');
  } else if (isTomorrow(date)) {
    return 'Tomorrow' + ', ' + format(date, 'dd MMM');
  } else {
    return format(date, 'EEE, dd MMM');
  }
};

export const generateTwoWeeksDates = () => {
  const datesArray = [];
  const today = new Date();
  const options = { weekday: 'short', day: 'numeric' }; // Format options for the display key

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Key: formatted as "Day, Date" (e.g., "Wed, 4")
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Value: formatted as "yyyy-mm-dd"
    const actualDate = date.toISOString().split('T')[0]; // Keep only the "yyyy-mm-dd" part

    // Push the object with both formatted and actual date into the array
    datesArray.push({ formattedDate, actualDate });
  }

  return datesArray;
};
