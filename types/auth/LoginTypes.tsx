export enum LoginType {
  Instructor = "instructor",
  Student = "student",
}
export interface LoginData {
  email: string;
  password: string;
}

export interface LoginProps {
  login: (values: LoginData, type: LoginType) => void;
}
