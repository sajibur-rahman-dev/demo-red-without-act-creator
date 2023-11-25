/* eslint-disable @typescript-eslint/no-explicit-any */
export type ErrorResponse = any;

export interface ReduxRequest<T> {
  [key: string]: any;

  isGetLoading: boolean;

  getError: ErrorResponse;

  getSuccess: boolean;

  getData: T;
}
