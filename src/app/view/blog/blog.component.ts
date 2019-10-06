import { Component, OnInit } from '@angular/core';
import { BlogControllerService } from '../../api/services';
import { BlogEntryDTO } from '../../api/models/blog-entry-dto';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private blogRest: BlogControllerService) {
  }

  ngOnInit() {
  }

  createNewBlogEntry() {
    const blogEntry: BlogEntryDTO = {
      creatorId: 12,
      creationDate: 'Sun, 06 Oct 2019 10:26:15 +0000',
      textContent: 'This is a new blog entry with some random text'
    };

    this.blogRest.createNewBlogEntryUsingPOST(blogEntry);
  }

  addCommentToBlogEntry(comment: string, blogEntryId: number) {
    this.blogRest.addNewCommentToBlogEntryUsingPUT(blogEntryId, comment);
  }

  getBlogEntryById(blogEntryId: number) {
    this.blogRest.getBlogEntryByIdUsingGET(blogEntryId);
  }

  getAllBlogEntries() {
    this.blogRest.getAllBlogEntriesUsingGET();
  }
}
