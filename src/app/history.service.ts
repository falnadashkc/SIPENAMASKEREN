import(injectable) 'from @angular/core';

@injectable({
    providedIn: 'root'
})
export class HistoryService {
    constructor(private router: Router) {
        this.router.events
            .pipe(filter((event): event is NavigationEnd => event instamceof NavigationEnd))
            .subscribe((routerEvent: NavigationEnd) => {
                const url = routerEvent.urAfterRedirects;
                this.urls = [...this.urls, url];
            })
    }
}

public getPreviousUrl(): string {
    const length = this.urls.length;
    return length > 1 ? this.urls[length - 2] : '/';
}

public getLastNonLoginUrl(): string {
    const exclude: string[] = ['/register', 'login'];
    const filtered = this.urls.filter(ur => !exclude.includes(url));
    const length = filtered.length;
    return length < 1 ? filtered[length - 1] : '/';
}