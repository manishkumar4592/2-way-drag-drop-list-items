import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Products } from '../Models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  productListOne:Products[];
  productListTwo:Products[];

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  // #region drop
  drop(event: CdkDragDrop<Products[]>) {
    //debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  // #endregion

  // #region constructor
  constructor() {
    this.productListOne=[
      {Name:'Prod-1',Code:'Cod-#101',SeriesNo:'SrNo-001'},
      {Name:'Prod-2',Code:'Cod-#102',SeriesNo:'SrNo-002'},
      {Name:'Prod-3',Code:'Cod-#103',SeriesNo:'SrNo-003'},
      {Name:'Prod-4',Code:'Cod-#104',SeriesNo:'SrNo-004'},
      {Name:'Prod-5',Code:'Cod-#105',SeriesNo:'SrNo-005'},
      {Name:'Prod-6',Code:'Cod-#106',SeriesNo:'SrNo-006'}
    ];

    this.productListTwo=[];  
   }
   // #endregion

  // #region ngOnInit
  ngOnInit() {
    window.onload = function(){     

      $('.mat-expansion-panel-header').click( function(){       
        
          var itemPosition = $(this).parent().offset();
          var subitemHeight = $('.mat-drawer-inner-container .mat-expansion-panel .mat-expansion-panel-body').outerHeight();
         
          var sidenav = $('.mat-sidenav').outerHeight();
          var sideleftHeight = sidenav - itemPosition.top;



      if(sideleftHeight <= subitemHeight ){
        
        $(".mat-drawer-inner-container .mat-expansion-panel .mat-expansion-panel-body").parent().css({'top': 'inherit','bottom':'0' });
      
      }else{
        $(".mat-drawer-inner-container .mat-expansion-panel .mat-expansion-panel-body").parent().css({'top': '0','bottom':'inherit' });
      }
      $('.btn-click').addClass('okay');
    });

    };
  
  }
  // #endregion

}
