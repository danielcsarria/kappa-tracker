import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TASKS } from '../../api/graphql.operations';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TraderPanelComponent } from '../trader-panel/trader-panel.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TabViewModule,
    AvatarModule,
    BadgeModule,
    TraderPanelComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  error: any;
  traders: any = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_TASKS,
      })
      .valueChanges.subscribe((tasks: any) => {
        console.log('tasks', tasks);
        this.tasks = tasks.data.tasks.filter((task: any) => task.kappaRequired);

        this.tasks.forEach((task: any) => {
          this.traders.push({
            name: task.trader.name,
            imageLink: task.trader.imageLink,
          });
        });

        this.traders = this.traders.filter(
          (value: any, index: any, self: any) =>
            index === self.findIndex((t: any) => t.name === value.name)
        );
      });
  }
}
