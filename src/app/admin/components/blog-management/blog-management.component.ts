import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../../models/admin/blog.model';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-management',
  templateUrl: './blog-management.component.html',
  styleUrls: ['./blog-management.component.css']
})
export class BlogManagementComponent implements OnInit{
  data: IBlog[] = []
  display: boolean = false;
  uploadButton = false;
  formData: FormData = new FormData();
  blog: IBlog = { title: '', photo: '', description: '', isActive: false };

  constructor(private blogService: BlogService) {}
  
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(res => {
      this.data = res;
    });
  }

  showForm() {
    this.display = true;
  }
  
  
  onSelect(event) {
    console.log(event)
    this.formData.append('image', event.currentFiles[0]);
  }

  onClear() {
    this.formData.delete('image');
  }

  saveBlog() {
    this.formData.append('title', this.blog.title);
    this.formData.append('description', this.blog.description);
    this.formData.append('isActive', this.blog.isActive.toString());
    this.blogService.create(this.formData).subscribe(res => {
      this.data.push(res);
    })
  }
}
