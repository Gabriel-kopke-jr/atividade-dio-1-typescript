import { PeopleAccount } from "./class/PeopleAccount";

let contPerson1 = new PeopleAccount("0001",10000,"1");

let contPerson2 = new PeopleAccount("0002",100,"3");

contPerson1.transfer(500,contPerson2);

contPerson1.printInfo();

contPerson2.deposit(150);
contPerson2.withdraw(750)
contPerson2.printInfo();
