import { Credential } from './credential';

export class User {
  id: string;
  firstName: string;
  email?: string;
  credential?: Credential;
  familyMembers?: User[];
}
