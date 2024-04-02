export type SysResponse<T> = {
  content: T;
  errors?: string[];
  warnings?: string[];
};
