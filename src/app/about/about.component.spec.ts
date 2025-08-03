import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component'; // ✅ Correct import

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent] // ✅ Correct declaration
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // ✅ Basic test: component renders
  });
});
