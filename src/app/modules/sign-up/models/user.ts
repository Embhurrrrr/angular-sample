export interface User {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  username: string;
  mobileNum: number;
  birthDate: Date;
  email: string;
  interests: string[];
  password: string;
  confirmPassword: string;
}
