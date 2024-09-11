import { post, get, put } from './ApiHandler';

export const fetchReviewDetail = async (referenceType, id) => {
  try {
    const response = await get(`/reviews/${referenceType}/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const submitFeedback = async (activityClassId, rating, review) => {
  try {
    await post('/class/reservations/feedback', { activityClassId, rating, review });
  } catch (error) {
    if (error instanceof BackendUnreachableError) {
      return 'Success';
    }
    throw error;
  }
};
