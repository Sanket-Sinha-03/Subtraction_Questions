import { enableProdMode, ɵɵpureFunction3 } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { gv } from './app/app.component';
import { nq } from './app/app.component';
import { problem_1 } from './function1';
import { problem_2 } from './function2';
import { problem_3 } from './function3';
import { problem_4 } from './function4';
import { problem_5 } from './function5';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


