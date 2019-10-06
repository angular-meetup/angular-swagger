import { Component, OnInit } from '@angular/core';
import { UserControllerService } from '../../api/services';
import { UserDTO } from '../../api/models/user-dto';
import { AddressDTO } from '../../api/models/address-dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userRest: UserControllerService) {
  }

  ngOnInit() {
  }

  registerUser() {
    const addressDTO: AddressDTO = {
      street: 'Example Street',
      streetNumber: '123',
      postalCode: '90443',
      country: 'Germany'
    };

    const userDTO: UserDTO = {
      firstName: 'Max',
      lastName: 'Mustermann',
      email: 'max@muster.com',
      birthDay: '2019-10-06T09:58:48+00:00',
      address: addressDTO
    };

    this.userRest.registerUserUsingPOST(userDTO);
  }

  getUserById(userId: number) {
    this.userRest.getUserByIdUsingGET(userId);
  }

  deleteUserById(userId: number) {
    this.userRest.deleteUserUsingDELETE(userId);
  }
}
