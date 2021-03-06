import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { NavigationComponent } from './navigation.component';
import { CouchService } from '../shared/couchdb.service';

describe('Home', () => {
    
    const setup = () => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule,CommonModule,HttpModule],
            declarations: [HomeComponent,NavigationComponent],
            providers: [CouchService]
        });
        let fixture = TestBed.createComponent(HomeComponent);
        let comp = fixture.componentInstance;
        return { fixture, comp };
    }
    
    it('Should be a HomeComponent', () => {
        let { comp } = setup();
        expect(comp instanceof HomeComponent).toBe(true,'Should create HomeComponent');
    });
    
});