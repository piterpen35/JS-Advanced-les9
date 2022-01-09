import { Component } from '@angular/core';

export interface StyleObject {
  fontSize: string;
  fontFamily: string;
  color: string;
  backgroundColor: string;
  fontWeight: string;
  fontStyle: string;
}
export interface TableSet {
  countRow: number;
  countCell: number;
  widthCell: string;
  heightCell: string;
  widthBorder: string;
  typeBorder: string;
  colorBorder: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textAreaValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error eum omnis sed vitae voluptas. Alias deleniti deserunt iste modi quas sapiente sequi sunt totam voluptatibus. Animi aut autem blanditiis consequatur cumque, fuga in incidunt libero magnam mollitia nam necessitatibus nobis numquam obcaecati odit, officia officiis perspiciatis quis, quod ratione recusandae rem reprehenderit sapiente sint veniam. Dolorem et quia tenetur?';
  editBoolean: boolean;
  addBoolean: boolean = false;
  table: string = '';
  list: string = '';
  finalEditValue: string = this.textAreaValue;

  styles: StyleObject = {
    fontSize: '12px',
    fontFamily: 'Arial',
    color: 'black',
    backgroundColor: '#aadc6d',
    fontWeight: 'normal',
    fontStyle: 'normal'
  }
  newTable: TableSet = {
    countRow: null,
    countCell: null,
    widthCell: '',
    heightCell: '',
    widthBorder: '',
    typeBorder: 'solid',
    colorBorder: 'black'
  }

  saveChanges(changes: string) {
    this.textAreaValue = changes;
  }
  onEditBoolean(value: boolean){
    this.editBoolean = value;
  }
  onStyleBoolean(value: boolean){
    this.editBoolean = value;
  }
  fontSizeSet(fontSize: string){
    this.styles.fontSize = fontSize;
  }
  fontFamilySet(fontFamily: string){
    this.styles.fontFamily = fontFamily;
  }
  colorSet(color:string){
    this.styles.color = color;
  }
  backgroundColorSet(color:string){
    this.styles.backgroundColor = color;
  }
  boldTextSet(fontWeight: string){
    this.styles.fontWeight = fontWeight;
  }
  italicTextSet(fontStyle: string){
    this.styles.fontStyle = fontStyle;
  }
  addTable(table: string) {
    this.addBoolean = false;
    this.editBoolean = true;
    this.table = table;
    this.finalEditValue = this.textAreaValue + this.table;
  }
  addList(list:string){
    this.addBoolean = false;
    this.editBoolean = true;
    this.list = list;
    this.finalEditValue = this.textAreaValue + this.list;
  }
}
