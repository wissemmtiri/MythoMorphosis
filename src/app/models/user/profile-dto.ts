export class Profile {
    firstname: string;
    lastname: string;
    height: number;
    weight: number;
    bio:string;
    location:string;
  
    constructor(firstname: string, lastname: string, height: number, weight: number, bio:string, location:string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.height = height;
      this.weight = weight;
      this.bio = bio;
      this.location=location;
    }
  }
  