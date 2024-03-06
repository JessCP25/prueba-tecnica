import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { EditUsersService } from '../services/edit-users.service';

export const isUserGuard: CanActivateFn = (route, state) => {
  const editUsersService = inject(EditUsersService);
  const router = inject(Router);


  if(editUsersService.infoUser() === undefined){
    router.navigate(['./']);
  }
  return true;
};
