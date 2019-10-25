import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public environment = environment.name;

  constructor(private translateService: TranslateService) {
    // This language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('es');

    // The language to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('es');
  }

  public toggleLanguage() {
    this.translateService.currentLang === 'es' ? this.translateService.use('en') : this.translateService.use('es');
  }
}
