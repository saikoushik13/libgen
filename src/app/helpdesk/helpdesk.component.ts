import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-helpdesk',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpDeskComponent {
  helpdeskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.helpdeskForm = this.fb.group({
      name: ['', Validators.required],
      prn: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.helpdeskForm.valid) {
      console.log('Form Submitted:', this.helpdeskForm.value);
      alert('Help Desk Request Submitted Successfully!');
      this.helpdeskForm.reset();
    }
  }

  cancelForm() {
    this.helpdeskForm.reset();
  }
}
