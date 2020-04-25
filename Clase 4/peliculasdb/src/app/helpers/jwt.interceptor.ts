import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpResponse, HttpErrorResponse, HttpRequest }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }

    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDc0ZWZkMjM4MWRiZTNiMzVhOGE2YzRlODZlNjUwMSIsInN1YiI6IjVlOWIyNDcwZWI3OWMyMDAyNzViNmViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iV6TztnkqMvfsyDLgnLqUiEqASuDE-ZYNknaHcKaGmg';
        req = req.clone({
            setHeaders: {
                Authorization: `${token}`
            }
        });

        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //console.log(event);
                } 
            }, (err:any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate(['/auth']);
                    }
                }
            })
        );
    }

}
