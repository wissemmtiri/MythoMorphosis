import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const AuthGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if(!auth.isAuthenticated()) {
        router.navigate([''])
        return false
    }
    return true
}