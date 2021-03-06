import {TestBed, async} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {TemplateFeatureFormModule} from '@spmka/template/feature-form';
import {
  SharedUtilI18nModule,
  AbstractTranslationService,
  AbstractTranslationDataService
} from '@spmka/shared/util-i18n';
import {TranslationService, TranslationDataService} from '@spmka/template/util-i18n';
import {TemplateFeatureLocaleSwitchModule} from '@spmka/template/feature-locale-switch';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        TemplateFeatureFormModule,
        TemplateFeatureLocaleSwitchModule,
        SharedUtilI18nModule
      ],
      providers: [
        {
          provide: AbstractTranslationService,
          useExisting: TranslationService
        },
        {
          provide: AbstractTranslationDataService,
          useExisting: TranslationDataService
        }
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title Template Application', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Template Application');
  });
});
