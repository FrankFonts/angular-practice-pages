import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  // a simply thing that works kinda like ngClass
  // decorator catches input from 'appClass'
  @Input('appClass') set classNames(classObj: any) {
    // and applies logic
    for (let key in classObj) {
      if (classObj[key]) {
        // to add a class if expression in key's value evaluates to true
        this.element.nativeElement.classList.add(key);
      } else {
        // or to remove a class if expression in key's value evaluates to false
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}

// NOTES
//
// throws an error, use the bang sign to declare but not assign a variable
// @Input() backgroundColor: string;
//
// this works, use the bang symbol (!)
// @Input() backgroundColor!: string;
//
//
// console.log('Class directive used'); // test
// // NEVER DO THIS !!!
// setTimeout(() => {
//   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
// }, 50);
//
//
// // how to communicate from parent to child component...
// //
// // in parent component template
// <app-card[title] = " 'Here is a string' " > </app-card>
// // in child component class
// // import Input
// import { Input } from '@angular/core';
// // let child component know there's a parameter
// class ChildComponent {
//   @Input() title: string;
// }
