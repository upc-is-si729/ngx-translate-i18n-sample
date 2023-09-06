import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-translation-sample',
  templateUrl: './translation-sample.component.html',
  styleUrls: ['./translation-sample.component.css']
})
export class TranslationSampleComponent {
  @Input() fullName: string = "";
}
