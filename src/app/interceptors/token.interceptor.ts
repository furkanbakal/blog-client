import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('accessToken');

        let newRequest: HttpRequest<any>;
        if(req.url !== "http://localhost:3000/auth/login") {
            newRequest = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${token}`)
            });
        } else {
            newRequest = req.clone();
        }
        return next.handle(newRequest);
    }

}