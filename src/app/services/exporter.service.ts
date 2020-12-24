import { Injectable } from '@angular/core';
import {saveAs} from 'file-saver'
import * as XLSX from 'xlsx'

@Injectable({
  providedIn: 'root'
})
export class ExporterService {
 
  constructor() { }

  exportToexcel(json:any[], excelFileName:string){
    const worksheet : XLSX.WorkSheet = XLSX.utils.json_to_sheet(json)
    const workbook : XLSX.WorkBook = { 
      Sheets:{'data':worksheet},
      SheetNames:['data']
    }
    const excelBuffer: any = XLSX.write(workbook, { bookType:'xlsx', type:'array'})
    this.saveAsExcel(excelBuffer, excelFileName)
  }

   saveAsExcel(buffer:any, fileName:string){
     const data: Blob = new Blob([buffer],{type:'text/xlsx;charset=utf-8'})
     saveAs(data, fileName + Date.now() + '.xlsx')
  }
} 
 