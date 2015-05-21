// 'use strict';

// describe('Andejobs', function(){
//   browser.get('index.html');
// })

//   it('should redirect to login page', function(){
//     expect(browser.getLocationAbsUrl()).toMatch('/signin');
//   });

// describe('by model', function(){
//   it('should find an element by text input model', function(){
//     var username = element(by.model('username'));
//     var name = element(by.binding('username'));

//     username.clear();
//     expect(name.getText()).toEqual('');

//     username.sendKeys('Susan Ad');
//     expect(name.getText()).toEqual('Susan Ad');
//   }
// })

// describe('Andejobs Profile page', function(){
//   it('should show full name of user', function(){
//     browser.get('http://localhost:8000/#/signedin');
//     element(by.model('your name')).sendKeys('Solo');

//     var welcome = element(by.binding('your name'));
//     expect(greeting.get()).toEqual('Hello Julie');

//     element(by.binding('Andejobs'));
//     element.all(by.css('[ng-click = "openPage"]'))
//   });
// });