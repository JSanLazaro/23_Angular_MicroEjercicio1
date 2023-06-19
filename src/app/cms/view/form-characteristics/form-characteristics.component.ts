import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-characteristics',
  templateUrl: './form-characteristics.component.html',
  styleUrls: ['./form-characteristics.component.scss']
})
export class FormCharacteristicsComponent {
  constructor(private fb: FormBuilder){}
  characteristicsForm = this.fb.group({
    characteristic:['fdff']
  })
  addCharacteristic(){
    console.log(this.characteristicsForm.value.characteristic);
  }
}
