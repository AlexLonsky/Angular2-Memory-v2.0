import {Component, Input,Output,EventEmitter} from '@angular/core';




@Component({
    selector:'header-comp',
    templateUrl:'app/header-component/header.component.html',
    styleUrls: ['app/header-component/header.component.css']
})

export class Header{
    @Input() name:any;
    @Input() last:string;
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased) {
        this.onChanged.emit(increased);
    }
}