import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { UserService } from '../user-service/user-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  let user = userService.getUser();

    if (user && user !== null) {
        return true; 
    } 

    console.log("Authguard fails!")
    return router.parseUrl('/login'); 
};