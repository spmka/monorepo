
    import { async, TestBed } from '@angular/core/testing';
    import { SharedUiBaseModule } from './shared-ui-base.module';
    
    describe('SharedUiBaseModule', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ SharedUiBaseModule ]
        })
        .compileComponents();
      }));
    
      it('should create', () => {
        expect(SharedUiBaseModule).toBeDefined();
      });
    });
          