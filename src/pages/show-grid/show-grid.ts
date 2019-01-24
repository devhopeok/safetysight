import { Component } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from 'ionic-angular';
import { EditTemplatePage } from '../edit-template/edit-template';

@Component({
  selector: 'page-show-grid',
  templateUrl: 'show-grid.html'
})
export class ShowGridPage {
  private gridApi;
  private gridColumnApi;

  defaultColDef = {
    autoHeight: true, 
    cellClass: "cell-class", 
    resizable: true,
    sortable: true, 
    filter: 'agTextColumnFilter',
  };

  columnDefs = [
    {headerName: 'ID', field: 'id',  width: 120, cellClass: 'cell-id'},
    {headerName: 'Date', field: 'date', width: 120, },
    {headerName: 'Incident', field: 'incident', width: 250,},
    {headerName: 'Business Unit', field: 'business_unit', width: 150, },
    {headerName: 'Type', field: 'type', width: 150, },
    {headerName: 'Severity', field: 'severity', width: 120, },
    {headerName: 'Description', field: 'desc', width: 250, }
  ];

  rowData = [
    { id: 'ABC-INC610', date: '01-Jan-2019', incident: 'Property Damage - Distribution Centre', business_unit: 'Distribution Centre', type: 'Property Damage', severity: 'Critical', desc: 'This is Description.' },
    { id: 'ABC-INC609', date: '30-Dec-2018', incident: 'Property Damage - Critical - Main WA Depot', business_unit: 'Main WA Depot', type: 'Property Damage', severity: 'Critical', desc: 'I was stationery and a vehicle drove into the back of me.' },
    { id: 'ABC-INC608', date: '21-Dec-2018', incident: 'Property Damage - Critical - Balcatta Branch', business_unit: 'Balcatta Branch', type: 'Property Damage', severity: 'Catastrophic', desc: 'Split 20 litres of oil' },
    { id: 'ABC-INC607', date: '20-Dec-2018', incident: 'Injury to Employee (Gilmore, Happy) - Catastrophic - Head Office', business_unit: 'Head Office', type: 'Injury to Employee', severity: 'High', desc: 'team member cut their thumb on broken glass' },
    { id: 'ABC-INC605', date: '12-Dec-2018', incident: 'Injury to Employee (Smith, Bob) - High - Main WA Depot', business_unit: 'Main WA Depot', type: 'Injury to Employee', severity: 'Catastrophic', desc: 'Slipped in puddle' },
    { id: 'ABC-INC604', date: '06-Dec-2018', incident: 'Injury to Employee (Flinstone, Fred) - Catastrophic- Main WA Depot', business_unit: 'Main WA Depot', type: 'Injury to Employee', severity: 'Catastrophic', desc: 'Injury description' },
    { id: 'ABC-INC603', date: '03-Dec-2018', incident: 'Property Damage - Catastrophic - Alexandria', business_unit: 'Alexandria', type: 'Property Damage', severity: 'Catastrophic', desc: 'Incident at depot' },
    { id: 'ABC-INC600', date: '09-Nov-2018', incident: 'Environmental - Catastrophic - Main Depot', business_unit: 'Main Depot', type: 'Environmental', severity: 'Catastrophic', desc: 'Incident at depot' },
    { id: 'ABC-INC610', date: '01-Jan-2019', incident: 'Property Damage - Distribution Centre', business_unit: 'Distribution Centre', type: 'Property Damage', severity: 'Critical', desc: 'This is Description.' },
    { id: 'ABC-INC609', date: '30-Dec-2018', incident: 'Property Damage - Critical - Main WA Depot', business_unit: 'Main WA Depot', type: 'Property Damage', severity: 'Critical', desc: 'I was stationery and a vehicle drove into the back of me.' },
    { id: 'ABC-INC608', date: '21-Dec-2018', incident: 'Property Damage - Critical - Balcatta Branch', business_unit: 'Balcatta Branch', type: 'Property Damage', severity: 'Catastrophic', desc: 'Split 20 litres of oil' },
    { id: 'ABC-INC607', date: '20-Dec-2018', incident: 'Injury to Employee (Gilmore, Happy) - Catastrophic - Head Office', business_unit: 'Head Office', type: 'Injury to Employee', severity: 'High', desc: 'team member cut their thumb on broken glass' },
    { id: 'ABC-INC605', date: '12-Dec-2018', incident: 'Injury to Employee (Smith, Bob) - High - Main WA Depot', business_unit: 'Main WA Depot', type: 'Injury to Employee', severity: 'Catastrophic', desc: 'Slipped in puddle' },
    { id: 'ABC-INC604', date: '06-Dec-2018', incident: 'Injury to Employee (Flinstone, Fred) - Catastrophic- Main WA Depot', business_unit: 'Main WA Depot', type: 'Injury to Employee', severity: 'Catastrophic', desc: 'Injury description' },
    { id: 'ABC-INC603', date: '03-Dec-2018', incident: 'Property Damage - Catastrophic - Alexandria', business_unit: 'Alexandria', type: 'Property Damage', severity: 'Catastrophic', desc: 'Incident at depot' },
    { id: 'ABC-INC600', date: '09-Nov-2018', incident: 'Environmental - Catastrophic - Main Depot', business_unit: 'Main Depot', type: 'Environmental', severity: 'Catastrophic', desc: 'Incident at depot' },
  ];

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController) {
    
  }

  onExport() {
    var params = {
      skipHeader: this.getBooleanValue("#skipHeader"),
      columnGroups: this.getBooleanValue("#columnGroups"),
      skipFooters: this.getBooleanValue("#skipFooters"),
      skipGroups: this.getBooleanValue("#skipGroups"),
      skipPinnedTop: this.getBooleanValue("#skipPinnedTop"),
      skipPinnedBottom: this.getBooleanValue("#skipPinnedBottom"),
      allColumns: this.getBooleanValue("#allColumns"),
      onlySelected: this.getBooleanValue("#onlySelected"),
      suppressQuotes: this.getBooleanValue("#suppressQuotes"),
      fileName: new Date() + ".csv",
      columnSeparator: "",
    };

    this.gridApi.exportDataAsCsv(params);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    setTimeout(function() {
      params.api.resetRowHeights();
    }, 500);
  }

  onColumnResized(event) {
    if (event.finished) {
      this.gridApi.resetRowHeights();
    }
  }

  onCellClicked(event) {
    console.log('event', event);
    if (event.colDef.field == 'id') {
      this.navCtrl.push(EditTemplatePage);
    }
  }

  getBooleanValue(cssSelector) {
    if (document.querySelector(cssSelector)) {
      return document.querySelector(cssSelector).checked === true;
    }
    return false;
  }
}
