import { Component, OnInit } from '@angular/core';
import { AddressControllerService } from '../../api/services';
import { AddressDTO } from '../../api/models/address-dto';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private addressRest: AddressControllerService) {
  }

  ngOnInit() {
  }

  registerAddressForUserId() {
    const userAddress: AddressDTO = {
      street: 'Example Street',
      streetNumber: '123',
      postalCode: '90443',
      country: 'Germany'
    };
    this.addressRest.registerAddressForUserIdUsingPOST(123, userAddress);
  }

  updateUserAddress() {
    const userAddress: AddressDTO = {
      street: 'Example Street',
      streetNumber: '123',
      postalCode: '90443',
      country: 'Germany'
    };
    this.addressRest.updateUserAddressUsingPUT(123, userAddress);
  }

  getAddressByUserId(userId: number) {
    this.addressRest.getAddressByUserIdUsingGET(userId);
  }

}
