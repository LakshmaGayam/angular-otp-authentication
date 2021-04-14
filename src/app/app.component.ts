import { Component, OnInit, VERSION, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  form: FormGroup;
  otpInput = ['input1' , 'input2','input3','input4', 'input5'];
   @ViewChildren('formRow') rows: any;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.toFormGroup(this.otpInput);
  }


  ngOnInit() {

  }

  onSubmit() {
    let temp;
console.log('called' , this.form.value)
this.otpInput.forEach((element) => {
  const he =  element;
  console.log(he)
})
  }

  
  toFormGroup(elements) {
    const group: any = {};

    elements.forEach(key => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  keyUpEvent(event, index) {
 let pos = index;
 if (event.keyCode === 8 && event.which === 8) {
  pos = index - 1 ;
 } else {
  pos = index + 1 ;
 }
 if (pos > -1 && pos < this.otpInput.length ) {
  this.rows._results[pos].nativeElement.focus();
 }
}

}
