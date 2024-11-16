import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TASKS } from '../../api/graphql.operations';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, CardModule, TabViewModule, AvatarModule, BadgeModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  praporTasks: any[] = [];
  therapistTasks: any[] = [];
  skierTasks: any[] = [];
  peacekeeper: any[] = [];
  mechanicTasks: any[] = [];
  jaegerTasks: any[] = [];
  fenceTasks: any[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_TASKS,
      })
      .valueChanges.subscribe((tasks: any) => {
        console.log('tasks', tasks);
        this.tasks = tasks.data.tasks.filter((task: any) => task.kappaRequired);
        this.praporTasks = this.tasks.filter(
          (task: any) => task.trader.name === 'Prapor'
        );
        this.therapistTasks = this.tasks.filter(
          (task: any) => task.trader.name === 'Therapist'
        );
        this.fenceTasks = this.tasks.filter(
          (task: any) => task.trader.name === 'Fence'
        );
      });
  }
}
