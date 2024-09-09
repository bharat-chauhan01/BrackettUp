import { post, get } from './ApiHandler';

export const fetchAccountData = async () => {
  try {
    const response = await get(`/account`);
    return response.data;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return accountData;
    }
    throw error;
  }
};
let accountData = { ...accountMockData };
export const saveAccountData = async data => {
  try {
    const response = await post(`/account`, data);
    return response;
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      accountData = { ...accountData, ...data };
      return accountData;
    }
    throw error;
  }
};

export const requestPhoneOtp = async phone => {
  try {
    return await post('/mobile/otp/request', { phone });
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return {};
    }
    throw error;
  }
};

export const requestEmailOtp = async email => {
  try {
    return await post('/email/otp/request', { email });
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return {};
    }
    throw error;
  }
};

export const validatePhoneOtp = async (oldPhone, newPhone, otp) => {
  try {
    await post('/mobile/otp/validate', { oldPhone, newPhone, otp });
  } catch (error) {
    if (otp != '0000') {
      throw new Error('Please Enter 0000 for validation');
    }
    if (error instanceof BackendUnreachableError) {
      return 'Success';
    }
    throw error;
  }
};

export const validateEmailOtp = async (oldEmail, newEmail, otp) => {
  try {
    await post('/email/otp/validate', { oldEmail, newEmail, otp });
  } catch (error) {
    if (otp != '0000') {
      throw new Error('Please Enter 0000 for validation');
    }
    if (error instanceof BackendUnreachableError) {
      return 'Success';
    }
    throw error;
  }
};
