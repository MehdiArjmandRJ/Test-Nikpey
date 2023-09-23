import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ITableColumnsModel } from '@app/shared/interfaces/general.interface';
import { interval, take } from 'rxjs';
import { ISelectBoxItem } from '../shared-select-box/shared-select-box.component';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ],
})
export class SharedTableComponent implements OnInit {
  matDisplayedColumns!: string[];
  title!: string;
  selectedFilter: any;
  firstDataSource: any;
  @Input() displayedColumns!: ITableColumnsModel[];
  @Input() dataSource: any;
  @Input() filterList!: ISelectBoxItem[];

  @Output() onEditAction: EventEmitter<string> = new EventEmitter<any>();
  @Output() onDeleteAction: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDetailAction: EventEmitter<string> = new EventEmitter<string>();
  @Output() dataSourceChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _liveAnnouncer: LiveAnnouncer) {

  }

  ngOnInit() {
    this.matDisplayedColumns = this.getMatDisplayedColumns();
  }

  getMatDisplayedColumns() {
    return this.displayedColumns.map((item: ITableColumnsModel) => item.key)
  }

  edit(data: any) {
    this.onEditAction.emit(data);
  }

  delete(id: string) {
    this.onDeleteAction.emit(id);
  }

  detail(id: string) {
    this.onDetailAction.emit(id);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction === 'desc') {
      let newDataSource = this.dataSource.sort((firstItem: any, secondItem: any) => (firstItem[sortState.active] > secondItem[sortState.active] ? -1 : 1))
      this.dataSource = [];
      interval(0).pipe(take(1),
      ).subscribe(() =>
        this.dataSource = newDataSource
      )
    } else {
      let newDataSource = this.dataSource.sort((firstItem: any, secondItem: any) => firstItem[sortState.active] - secondItem[sortState.active])
      this.dataSource = [];
      interval(0).pipe(take(1),
      ).subscribe(() =>
        this.dataSource = newDataSource
      )
    }
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  changeAuthorFilter(data: string) {
    this.firstDataSource = this.dataSource;
    console.log(this.firstDataSource);
    let newDataSource = this.firstDataSource.filter((item: any) => item['userId'] === data)
    interval(0).pipe(take(1),
    ).subscribe(() =>
      this.dataSource = newDataSource
    )
  }

  changeTitleFilter(event: any) {
    this.title = event.target.value;
    if (this.title) {
      let newDataSource = this.firstDataSource.filter((item: any) => item['title'] === this.title)
      interval(0).pipe(take(1),
      ).subscribe(() =>
        this.dataSource = newDataSource
      )
    } else {
      this.dataSource = this.firstDataSource
    }

  }

}
