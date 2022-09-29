export const getErrorMessage = (error: any) => {
  return String(error?.response?.data?.error_msg ?? error?.response?.data?.detail ?? 'Something went wrong');
}