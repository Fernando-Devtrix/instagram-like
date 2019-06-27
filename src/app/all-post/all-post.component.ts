import { Component, OnDestroy, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import _ from 'lodash';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit, OnDestroy {
	allRef: any;
  loadMoreRef: any;
  all: any = [];

  constructor() { }

  ngOnInit() {

  	this.allRef = firebase.database().ref('allposts').limitToFirst(3);
    this.allRef.on('child_added', data => {
      this.all.push({
        key: data.key,
        data: data.val()
      });
    });

  }

  onLoadMore() {
    if (this.all.length > 0) {
      const lastLoadedPost = _.last(this.all);
      const lastLoadedPostKey = lastLoadedPost.key;

      this.loadMoreRef = firebase.database().ref('allposts').startAt(null, lastLoadedPostKey).limitToFirst(3 + 1);

      this.loadMoreRef.on('child_added', data => {

        if (data.key === lastLoadedPostKey) {
          return;
        } else {
          this.all.push({
            key: data.key,
            data: data.val()
          });
        }

      });

    }

  }

  ngOnDestroy() {
    this.allRef.off()
    if (this.loadMoreRef) {
      this.loadMoreRef.off()
    }
  }

}
