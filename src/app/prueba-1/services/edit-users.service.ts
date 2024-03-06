import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class EditUsersService {
  infoUser = signal<User | undefined>(undefined);

  newUser(user: User) {
    this.infoUser.set(user);
  }

  addInformation(user: Partial<User>) {
    this.infoUser.update((state) => {
      if (state) {
        return {
          ...state,
          ...user,
        };
      }
      return undefined;
    });
    }
}
