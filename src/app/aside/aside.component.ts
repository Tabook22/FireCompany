import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    $(document).ready(function () {
      console.log('In the Name of God Most Merci most Meciful');
      $('.carousel').carousel({
        interval: 2000
      });
    });
  }

}
