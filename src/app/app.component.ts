import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-like';

  ngOnInit() {

  	// Your web app's Firebase configuration
  	const firebaseConfig = {
      apiKey: "AIzaSyAgsMycLnU_9Tky_lb-jRm-RZiBKpyIqL4",
      authDomain: "instalike-77427.firebaseapp.com",
      databaseURL: "https://instalike-77427.firebaseio.com",
      projectId: "instalike-77427",
      storageBucket: "instalike-77427.appspot.com",
      messagingSenderId: "493825110070",
      appId: "1:493825110070:web:b521f23070fdde2a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  } 

}
