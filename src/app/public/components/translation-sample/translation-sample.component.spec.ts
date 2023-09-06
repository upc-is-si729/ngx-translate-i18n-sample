import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationSampleComponent } from './translation-sample.component';

describe('TranslationSampleComponent', () => {
  let component: TranslationSampleComponent;
  let fixture: ComponentFixture<TranslationSampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslationSampleComponent]
    });
    fixture = TestBed.createComponent(TranslationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
