import { post } from './ApiHandler';

export const googleAuthLogin = async idToken => {
  try {
    return await post('/auth/google/login', { token: idToken });
  } catch (error) {
    throw error;
  }
};

export const requestOtp = async contactNumber => {
  try {
    return await post('/auth/mobile/otp/request', { contactNumber });
  } catch (error) {
    throw error;
  }
};

export const validateOtp = async (contactNumber, otp) => {
  try {
    return await post('/auth/mobile/otp/login', { contactNumber: contactNumber, otp: otp });
  } catch (error) {
    throw error;
  }
};
