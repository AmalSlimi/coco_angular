import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api="http://localhost:8085/spring2024/cats";
  host="http://localhost:8085/spring2024/cats/getphotoo/";

  host2="http://localhost:8085/spring2024/cats/gettt/";

  constructor(private http:HttpClient) { }
  getAllCategory(){
    return this.http.get(this.api+"/all");
  }
  addCategory(data:any){
    return this.http.post(this.api+"/add",data);
  }
  deleteCategory(id:any){
    return this.http.delete(this.api+"/delet/"+id);
  }
  updateCategory(id:any,data:any){
    return this.http.put(this.api+"/update/"+id,data);
  }
  getCategoryById(id:any){
    return this.http.get(this.api+"/getcat/"+id);
  }
  getALLsUBCategory(){
    return this.http.get(this.api+"/allsub");
  }
  addSubCategory(data:any){
    return this.http.post(this.api+"/addsub",data);
  }
  deleteSubCategory(id:any){
    return this.http.delete(this.api+"/deletesub/"+id);
  }
  updateSubCategory(id:any,data:any){
    return this.http.put(this.api+"/updatee/"+id,data);
  }
  getSubCategoryById(id:any){
    return this.http.get(this.api+"/getsub/"+id);
  }
  getAllAccommodation(){
    return this.http.get(this.api+"/allacc");
  }
  getPhotoByAccommodation(id:any){
    return this.http.get(this.api+"/getphotoo/"+id);
  }
  AjouterAccommodation(address:any,localisation:any,rules:any,rent_price:any,numberOfRoom:any,file:any){
    const formData = new FormData();
    formData.append('a', address);
    formData.append('l', localisation);
    formData.append('re', rules);
    formData.append('r', rent_price);
  
    formData.append('n', numberOfRoom);
   
    
    formData.append('f', file);
    return this.http.post(this.api+"/addacc",formData);
  }
  deletAccomndation(id:any){
    return this.http.delete(this.api+"/del/"+id)
  }




  AddRoom(roomType:any,rent:any,amenities:any,roomDetails:any,accommodation:any,file:any){
    const formData=new FormData();
    formData.append("rt",roomType)
    formData.append("r",rent)
    formData.append("a",amenities)
    formData.append("rd",roomDetails)
    formData.append("id",accommodation)
    formData.append("file",file)
    return this.http.post(this.api+"/addroom",formData)

  }
  getRoomPhoto(id:any){
    return this.http.get(this.api+"/getroomphoto/"+id)
  }
  deleteRoom(id:any){
    return this.http.delete(this.api+"/deletrrom/"+id)
  }

getAllRoom(){
  return this.http.get(this.api+"/allroom")
  }

}
