export class UserSignUpDTO {
  // Define properties for user sign-up data
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.email = email;
    this.password = password;
  }
}
