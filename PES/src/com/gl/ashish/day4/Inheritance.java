package com.gl.ashish.day4;

public class Inheritance {
    public static void main(String[] args) {
        Employee employee = new Employee(123,"demo",2.5f);
        String[] projects = {"demo1", "demo2"};
        Integer[] report = {123, 456};
        Manager manager = new Manager(projects, report);
    }
}


class Human{
    public String fName;
    public String lName;
    public int age;

    public Human() {

    }



    public Human(String fName, String lName, int age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    void eat(String food){

    }

    protected void eat(){
        System.out.println("whatever suits you");
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

class  Employee extends Human{
    public Integer empId;
    public String deptName;
    private float expInYears;

    public Employee() {

    }
     public void eat(){
        System.out.println("only vegies and smooties");
    }

    public Employee(Integer empId, String deptName, float expInYears) {
        this.empId = empId;
        this.deptName = deptName;
        this.expInYears = expInYears;
    }

    public Integer getEmpId() {
        return empId;
    }

    private void setEmpId(Integer empId) {
        this.empId = empId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public float getExpInYears() {
        return expInYears;
    }

    public void setExpInYears(float expInYears) {
        this.expInYears = expInYears;
    }
}


class Manager extends Employee{
    String[] project;
    Integer[] getsReport;

    public Manager(String[] project, Integer[] getsReport) {
        this.project = project;
        this.getsReport = getsReport;
    }

    public String[] getProject() {
        return project;
    }

    public void setProject(String[] project) {
        this.project = project;
    }

    public Integer[] getGetsReport() {
        return getsReport;
    }

    public void setGetsReport(Integer[] getsReport) {
        this.getsReport = getsReport;
    }
}