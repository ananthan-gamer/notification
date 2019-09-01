pragma solidity ^0.5.0;


contract noti {

  address public owner;

  constructor (address who) public{
    owner = who;
  }

  event notification(string who);

  function callEvent() public {
    emit notification("ananthan");
  }
}