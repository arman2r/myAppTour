import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadingDocumentsPage } from './uploading-documents.page';

describe('UploadingDocumentsPage', () => {
  let component: UploadingDocumentsPage;
  let fixture: ComponentFixture<UploadingDocumentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadingDocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
