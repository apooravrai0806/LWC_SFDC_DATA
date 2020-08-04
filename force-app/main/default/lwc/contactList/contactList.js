import { LightningElement, wire } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact' ;
import FirstName from '@salesforce/schema/Contact.FirstName' ;
import LastName from '@salesforce/schema/Contact.LastName' ;
import Email from '@salesforce/schema/Contact.Email' ;
import getContacts from '@salesforce/apex/ContactController.getContacts';
import getErrorss from '@salesforce/apex/showError.getErrorss';
import { reduceErrors } from 'c/ldsUtils';


const COLUMNS = [
    { label: 'Firste Name', fieldName: FirstName, type: 'text' },
    { label: 'Last Name', fieldName: LastName.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: Email.fieldApiName, type: 'Email' }
];

export default class contactList extends LightningElement {
    column = COLUMNS;
    @wire(getContacts)
    contacts;

    @wire(getErrorss)
    con ;
    get errors() {
            return (this.con.error) ? reduceErrors(this.con.error) : [] ;
    }
}