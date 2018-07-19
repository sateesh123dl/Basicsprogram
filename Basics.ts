class Employee{
Name:string;
Address:string;
DesigNation:string;
Empid:number;
SetName(Name){
return this.Name=Name;     
}
SetAddress(Address){
    return   this.Address=Address;
}
SetDesig(DesigNation){
    return  this.DesigNation=DesigNation;
}
SetEmpid(Empid){
    return this.Empid=Empid;
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
var Name= GetManagerDetails.SetName("Satesh");
var Address=GetManagerDetails.SetAddress("Hyderabad");
var Desination=GetManagerDetails.SetDesig("Manager");
var Empid=GetManagerDetails.SetEmpid(1010);
console.log(Name+" "+Address+" "+ Desination+" "+Empid);