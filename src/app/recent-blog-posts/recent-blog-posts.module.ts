import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentBlogPostsComponent } from './recent-blog-posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecentBlogPostsComponent],
  exports: [RecentBlogPostsComponent]
})
export class RecentBlogPostsModule { }
