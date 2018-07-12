class Employee{
Name:string;
Address:string;
DesigNation:string;
Empid:number;
SetName(Name){
return this.Name;     
}
SetAddress(Address){
    return   this.Address;
}
SetDesig(DesigNation){
    return  this.DesigNation;
}
SetEmpid(Empid){
    return this.Empid;
}
GetName(){
  return  this.Name;
}
GetAddress(){
  return this.Address;
}
GetDesi(){
    return this.DesigNation;
}
GetEmpid(){
   return this.Empid;
}
}
class Manager extends Employee{

}
class Admin extends Employee{

}
var GetManagerDetails=new Manager();
var Name= GetManagerDetails.Name="Sateesh";
var Address=GetManagerDetails.Address="Hyderabad";
var Desination=GetManagerDetails.DesigNation="Manager";
var Empid=GetManagerDetails.Empid=1010;
console.log(Name+" "+Address+" "+ Desination+" "+Empid);