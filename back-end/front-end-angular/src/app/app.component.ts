import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Imported Malaria Monitor';
}
/*
onMapReady(map: Map): void {
    setTimeout(() => {
      map.invalidateSize();
    });
}*/
