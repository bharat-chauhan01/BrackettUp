import { post, get, put } from './ApiHandler';

export const cancelReservation = async (classReservationId, cancellationReason) => {
  try {
    await put('/class/reservations/cancel', { classReservationId, cancellationReason });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const confirmResevation = async classId => {
  try {
    await post('/class/reservations/schedule', { classId });
  } catch (error) {
    throw error;
  }
};

export const fetchReservation = async () => {
  try {
    const response = await get(`/class/reservations/past`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchUpcomingPageActivities = async () => {
  try {
    const response = await get(`/class/reservations/upcoming`);
    return response;
  } catch (error) {
    throw error;
  }
};
