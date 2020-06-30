import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) {}
  
  enroll(User){
    return this.http.post<any>("http://localhost:8888/posts", User) ;
  }

  fetch() {
    console.log("biodata report");
    return this.http.get<any>("http://localhost:8888/posts");

  }
  deleteData(_id){
    console.log("delete row");
    return this.http.delete<any>("http://localhost:8888/posts/" + _id);
  }
  updatedata(userModel)
  {
    return this.http.put<any>("http://localhost:8888/posts/" + userModel._id, userModel);
  }
}
