import { ContactHttpService } from './contact-http.service';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
  ],
  declarations: [
    MenuComponent,
  ],
  providers: [
    // { provide: ContactService, useClass: ContactService },
    // ou en raccourci :
    // ContactService
    { provide: ContactService, useClass: ContactHttpService },
  ],
  exports: [
    MenuComponent,
  ]
})
export class CoreModule { }
