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
  }  else {
    return format(date, 'dd MMM, yyyy');
  }
};
