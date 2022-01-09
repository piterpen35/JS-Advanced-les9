import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableSet} from "../app.component";

@Component({
  selector: 'app-editor-add',
  templateUrl: './editor-add.component.html',
  styleUrls: ['./editor-add.component.scss']
})
export class EditorAddComponent implements OnInit {
  @Output() onTableSetValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() onListSetValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() newTable: TableSet;
  boolean: boolean = true;
  tableSetValue: string = '';
  listSetValue: string = '';

  itemsOfListCount: number = null;
  typeOfMark: string = 'circle';

  createTable(){
    if (this.newTable.countRow !== null && this.newTable.countCell !== null && this.newTable.widthCell.trim() && this.newTable.heightCell.trim() && this.newTable.typeBorder.trim()) {
      let rows = ``;
      let cell = ``;
      for (let i=0; i<this.newTable.countCell; i++) {
        cell += `<td style="width: ${this.newTable.widthCell}; height: ${this.newTable.heightCell}; border: 1px solid black"></td>`
      }
      for (let i=0; i < this.newTable.countRow; i++){
        rows += `<tr>${cell}</tr>`
      }
      this.tableSetValue = `<br><table style='border: ${this.newTable.widthBorder} ${this.newTable.typeBorder} ${this.newTable.colorBorder}'><tbody>${rows}</tbody></table>`
      this.onTableSetValue.emit(this.tableSetValue);
    }
  }
  createList(){
    if (this.itemsOfListCount !== null) {
      let items = '';
      for (let i=0; i<this.itemsOfListCount; i++){
        items += `<li>Some...</li>`
      }
      this.listSetValue = `<br><ul type="${this.typeOfMark}">${items}<ul/>`
      this.onListSetValue.emit(this.listSetValue);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
