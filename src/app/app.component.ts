import { Component } from '@angular/core';
import { ExportExcelService } from './services/export-excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datatable';
  filterUsuarios=""
  p=1
  data = [
    {name:'leonardo', lastname:'pernett',id:1},
    {name:'milena', lastname:'rios',id:2},
    {name:'pedro', lastname:'perex',id:3},
    {name:'luis', lastname:'rodriguez',id:4}
  ]
  
  constructor(private exportExcelService:ExportExcelService)
  {
  }

  exportExcel(){
    this.exportExcelService.exportExcel(this.data,'export')
  }

}
