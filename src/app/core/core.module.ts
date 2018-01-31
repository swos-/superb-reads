import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ReadingListModule } from '../reading-list/reading-list.module';
import { ReadingChallengeModule } from '../reading-challenge/reading-challenge.module';
import { WantToReadListModule } from '../want-to-read-list/want-to-read-list.module';
import { BookshelvesModule } from '../bookshelves/bookshelves.module';
import { UpdatesListModule } from '../updates-list/updates-list.module';
import { AwardsModule } from '../awards/awards.module';
import { RecommendationsModule } from '../recommendations/recommendations.module';
import { RecentBlogPostsModule } from '../recent-blog-posts/recent-blog-posts.module';
import { BookDetailsModule } from '../book-details/book-details.module';

import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { BrowseComponent } from './browse/browse.component';
import { CommunityComponent } from './community/community.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { GroupDiscussionsComponent } from './group-discussions/group-discussions.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthorsService } from './services/authors.service';
import { AwardsService } from './services/awards.service';
import { BooksService } from './services/books.service';
import { ChallengesService } from './services/challenges.service';
import { FriendsService } from './services/friends.service';
import { MyBooksService } from './services/my-books.service';
import { RecommendationsService } from './services/recommendations.service';
import { UpdatesService} from './services/updates.service';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'my-books', component: MyBooksComponent },
  { path: 'books', component: BrowseComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'group-discussions', component: GroupDiscussionsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReadingListModule,
    ReadingChallengeModule,
    WantToReadListModule,
    BookshelvesModule,
    UpdatesListModule,
    AwardsModule,
    RecommendationsModule,
    RecentBlogPostsModule,
    BookDetailsModule
  ],
  declarations: [
    NavigationComponent,
    FooterComponent,
    DashboardComponent,
    MyBooksComponent,
    BrowseComponent,
    CommunityComponent,
    NotificationsComponent,
    GroupDiscussionsComponent,
    MessagesComponent,
    FriendsComponent,
    ProfileComponent
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    RouterModule
  ],
  providers: [
    MyBooksService,
    AuthorsService,
    AwardsService,
    BooksService,
    ChallengesService,
    FriendsService,
    RecommendationsService,
    UpdatesService
  ]
})
export class CoreModule { }
