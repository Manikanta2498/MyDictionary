import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DictService } from './dict.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dict';
  // word: string;
  mnems: any[];
  means: any[];
  word = new FormControl('');

  constructor(private dictService: DictService) { }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.means = [];
       this.dictService.getMnemonics(this.word.value).subscribe({
         next: data =>{
          // alert(data);
          this.mnems = data;
         }
       });     
       this.dictService.getMeanings(this.word.value).subscribe({
        next: data =>{
         // alert(data);
         this.means = data;
        }
      });  
    }
  }
}
