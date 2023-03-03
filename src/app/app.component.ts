import { Component } from '@angular/core';
import { LoadingService } from './Services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skill-Manager';
  loading$ = this.loadingService.loading$;
  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }

 }


