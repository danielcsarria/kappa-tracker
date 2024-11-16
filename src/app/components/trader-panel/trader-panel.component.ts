import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-trader-panel',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TabViewModule,
    AvatarModule,
    BadgeModule,
    TraderPanelComponent,
  ],
  templateUrl: './trader-panel.component.html',
  styleUrl: './trader-panel.component.scss',
})
export class TraderPanelComponent implements OnInit {
  @Input() tasks: any[] = [];
  @Input() trader!: any;

  traderTasks: any[] = [];

  ngOnInit(): void {
    if (this.tasks) {
      this.traderTasks = this.tasks.filter(
        (task: any) => task.trader.name === this.trader.name
      );
    }
  }
}
