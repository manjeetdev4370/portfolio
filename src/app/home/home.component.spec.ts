import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';  // Correct import

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]  // Declare the component here
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);  // Create the component
    component = fixture.componentInstance;  // Assign the instance
    fixture.detectChanges();  // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Check if component is created successfully
  });
});
