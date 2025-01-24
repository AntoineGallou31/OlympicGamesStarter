import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DetailPageComponent } from "./detail-page.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DetailPageComponent", () => {

  let fixture: ComponentFixture<DetailPageComponent>;
  let component: DetailPageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DetailPageComponent]
    });

    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
