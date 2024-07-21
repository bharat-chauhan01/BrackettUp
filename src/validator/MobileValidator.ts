import { InvalidMobileNumberError } from '../utils/utils';

export const validateMobileNumber = (mobileNumber: string, countryCode: string = '+91') => {
  if (mobileNumber.length != 10) {
    throw new InvalidMobileNumberError();
  }
};
