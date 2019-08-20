import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-createscenario',
  templateUrl: './createscenario.component.html',
  styleUrls: ['./createscenario.component.css']
})
export class CreatescenarioComponent implements OnInit {
  isrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'http://localhost:8000/red/'
  );
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}
}
