import { Component, OnInit } from '@angular/core';
import { Support } from '../interfaces/support';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    this.getSupportData();
  }

  getSupportData(): void {
    const data = localStorage.getItem('supportData');
    if (data != null) {
      this.supportData = JSON.parse(data) as Support;
    } else {
      this.supportData = null;
    }
  }

  supportData!: Support | null;
}
