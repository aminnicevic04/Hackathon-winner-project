export enum SignupType {
  Instructor = "instructor",
  Student = "student",
}
export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface SubmitProps {
  register: (values: RegisterData, type: SignupType) => void;
}
