import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBlog } from "../models/admin/blog.model";

const host = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor(private http: HttpClient) {}

    getBlogs() {
        return this.http.get<IBlog[]>(`${host}/blogs`);
    }
    create(formData: FormData) {
        return this.http.post<IBlog>(`${host}/blogs`, formData);
    }
}