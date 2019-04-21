import { Credential } from './credential';

export class SignupRequest {

  constructor(public userName: string,
              public firstName: string,
              public lastName: string,
              public birthDate: string,
              public credentials: Credential) {}
}
