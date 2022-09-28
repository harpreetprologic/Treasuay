export const getErrorMessage = (error: any) => {
  return String(error?.response?.data?.error_msg ?? 'Something went wrong');
}