var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.SetName = function (Name) {
        return this.Name;
    };
    Employee.prototype.SetAddress = function (Address) {
        return this.Address;
    };
    Employee.prototype.SetDesig = function (DesigNation) {
        return this.DesigNation;
    };
    Employee.prototype.SetEmpid = function (Empid) {
        return this.Empid;
    };
    Employee.prototype.GetName = function () {
        return this.Name;
    };
    Employee.prototype.GetAddress = function () {
        return this.Address;
    };
    Employee.prototype.GetDesi = function () {
        return this.DesigNation;
    };
    Employee.prototype.GetEmpid = function () {
        return this.Empid;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Employee));
var GetManagerDetails = new Manager();
var Name = GetManagerDetails.Name = "Sateesh";
var Address = GetManagerDetails.Address = "Hyderabad";
var Desination = GetManagerDetails.DesigNation = "Manager";
var Empid = GetManagerDetails.Empid = 1010;
console.log(Name + " " + Address + " " + Desination + " " + Empid);
