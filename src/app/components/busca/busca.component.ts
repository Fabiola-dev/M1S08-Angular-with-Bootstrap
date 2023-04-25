import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {
  input = "";

  @Output() buscaData: EventEmitter<string> = new EventEmitter();
  
  enterData() {
    this.buscaData.emit(this.input);
  }

}
