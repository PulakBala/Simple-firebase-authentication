/*
-----------------
INITIAL SETUP
---------------------
 1. visit: console.firebase.google.com 
 2.create a new firebase
 3.visit a doc (go to docs)
 4.build + authentication + web + get started
 5.Register web app > firebase project home >  click web > give name and register
 6.Install firebase for your project : npm install firebase
 7. Dangerous : get firebase config and put it in firebase.init.js(file name jekono akta hote pare)
 8. export app from firebase.init.js 
 ----------------------------
 SETUP THE PROVIDER
 ----------------------------
 9. create auth using getAuth from firebase by using app from firebase.init.js
 10.create a google auth provider. do not forget to use new GoogleAuthProvider();
 11. go to firebase > build > authentication > sign in methon 
 12. enable google sign in method
 13.Create a button for sign in google methon with a click handler
 14.inside the event handler, call singInWithPopup with auth, provider 
 15. after singInwithPopup .thn result , error
 ------------------------------
 DISPLAY DATA
 -------------------------------
 16.
*/