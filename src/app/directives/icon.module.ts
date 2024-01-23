import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconDirective } from "./icon.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [IconDirective],
  exports: [IconDirective],
  providers: [DatePipe]
})
export class IconShared {}
