import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testet';
  langArray: string[] = ['sv', 'en'];

  constructor(
    public translate: TranslateService
  ) {
    translate.use('sv');
  }

  changeLang(event: any) {
    this.translate.use(event.target.value);
    // Förslagsvis så sparas det här valet till localStorage
  }

  test() {
    const result = [1, 2].filter(x => x > 1);
  }
}
