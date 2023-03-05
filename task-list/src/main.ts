import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/* Check the user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
const link: any = document.querySelector("#toggleTheme");
link.href = "/assets/dark-style.css";
}*/