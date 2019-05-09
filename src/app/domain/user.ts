export class User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email?: string;
  familyMembers?: User[];
}
