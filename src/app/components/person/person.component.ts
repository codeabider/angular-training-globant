import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Person } from '../../interfaces/person';
import { MouseEventsDirective } from '../../directives/mouse-events.directive';
// note: if we do not export the interface, we do not need to explicitly import it
// (angular checks for a TS file to look for inteface definition)
import { EmployeeDataService } from '../../services/employee-data.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @ViewChildren( MouseEventsDirective ) editButtons: QueryList<MouseEventsDirective>;

  personsList: Person[];
  selectedPerson: Person;
  selectedRowIndex: number;
  showEditableDetails = false;
  displayedColumns: string[] = ['serial', 'name', 'age', 'address', 'email', 'position', 'modify'];

  constructor(private _empDataService: EmployeeDataService) { }

  ngOnInit() {
    this.personsList = [...this._empDataService.getPersonList()];
  }

  editDetails(person?: Person) {
    this.selectedPerson = person ? person : null;
    this.showEditableDetails = true;
    this.editButtons['_results'].map( button => button.changeBackground('rgba(0, 0 ,0 , .12)') );
  }

  removeEmployee(removeAtIndex: number) {
    this.personsList.splice(removeAtIndex, 1);
    this.personsList = [...this.personsList];
    console.log('Updated person list:', this.personsList);
  }

  refreshList() {
    this.personsList = [...this._empDataService.getPersonList()];
  }

  onDataUpdate(updatedDetails: Person) {
    if (updatedDetails.id) {
      this.personsList[updatedDetails.id - 1] = updatedDetails;
    } else {
      updatedDetails.id = this.personsList.length + 1;
      this.personsList.push(updatedDetails);
    }
    this.personsList = [...this.personsList];
    this.selectedRowIndex = updatedDetails.id;
    setTimeout(() => {
      this.selectedRowIndex = -1;
    }, 5000);
    // note: better way to do this is by using Observable stream of data arrays,
    // since angular mat table doesn't update simply when dataSource channges
    this.showEditableDetails = false;
    this.editButtons['_results'].map( button => button.changeBackground('#ff4081', true) );

    console.log('Updated person list:', this.personsList);
  }
}
