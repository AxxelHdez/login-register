import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  fnClickSignUp() {

  $('.email-login').fadeOut(100);
  $('.email-signup').delay(100).fadeIn(100);
  $('#login-box-link').removeClass('active');
  $('#signup-box-link').addClass('active');
}

  fnClickLogIn() {
    $('.email-login').delay(100).fadeIn(100);
    $('.email-signup').fadeOut(100);
    $('#login-box-link').addClass('active');
    $('#signup-box-link').removeClass('active');
  }

  ngOnInit() {
    $('.email-signup').hide();
  }

}

