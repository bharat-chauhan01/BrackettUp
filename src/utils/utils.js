import { constant } from '../apis/constant';

export const capitalizeFirstLetter = string => {
  return string.replace(/\b\w/g, char => char.toUpperCase());
};

export class BackendUnreachableError extends Error {
  constructor() {
    super(constant.error.backendUnreachableErrorMessage);
    this.name = 'BackendUnreachable';
  }
}
