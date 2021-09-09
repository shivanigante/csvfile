import { Component, OnInit } from '@angular/core';
import { WorkBook } from 'xlsx';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-demoexcel',
  templateUrl: './demoexcel.component.html',
  styleUrls: ['./demoexcel.component.css']
})
export class DemoexcelComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
   // filteredString: string='';
  arrayData =[];
  file: any;

  arrayDataKeys:string[]=[];
  filterOption='';
  filterString='';

  onChangeFile(event:any) {
    let workBook: any = null;
    let jsonData: any = null;
    let dataString : any = null;
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(this.file); 
    reader.onload = (e) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary'});

      jsonData =  workBook.SheetNames.reduce((initial:any, name: any) => {
       const sheet = workBook.Sheets[name];

       name='Sheet1';

         initial[name] = XLSX.utils.sheet_to_json(sheet);
        
         return initial;
     },{});
      dataString  = JSON.stringify(jsonData.Sheet1);
      dataString = JSON.parse(dataString);
      this.arrayData = dataString;

      if(this.arrayData[0]){
        const keys=Object.keys(this.arrayData[0]);
        this.arrayDataKeys=keys;
      }
      console.log(this.arrayData)
    };
    
  }

}
