import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'inv-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss']
})
export class ColorFormComponent implements OnInit {
  value = 'goldenrod';

  colorForm!: FormGroup;

  private fb = inject(NonNullableFormBuilder)

  ngOnInit(): void {
    this.colorForm = new FormGroup({
      color: this.fb.control<string | null>(null, {
        validators: [Validators.required, Validators.minLength(3)]
      })
    });

    this.colorForm.get('color')?.valueChanges
  }

  updateColor(foo: unknown): void {
    console.log(foo);
  }

}
