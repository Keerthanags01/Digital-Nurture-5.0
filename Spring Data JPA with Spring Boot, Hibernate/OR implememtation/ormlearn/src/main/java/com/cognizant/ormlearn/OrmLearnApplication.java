package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.SkillService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Set;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static EmployeeService employeeService;
    private static DepartmentService departmentService;
    private static SkillService skillService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        employeeService = context.getBean(EmployeeService.class);
        departmentService = context.getBean(DepartmentService.class);
        skillService = context.getBean(SkillService.class);

        // Uncomment ONLY ONE method at a time

        testGetEmployee();

        //testAddEmployee();

        //testUpdateEmployee();

        //testGetDepartment();

        testAddSkillToEmployee();
        //testGetEmployee();
    }

    //==================== GET EMPLOYEE ====================

    private static void testGetEmployee() {

        LOGGER.info("Start");

        Employee employee = employeeService.get(1);

        LOGGER.info("Employee : {}", employee);

        LOGGER.info("Department : {}", employee.getDepartment());

        LOGGER.info("Skills : {}", employee.getSkillList());

        LOGGER.info("End");
    }

    //==================== ADD EMPLOYEE ====================

    private static void testAddEmployee() {

        LOGGER.info("Start");

        Employee employee = new Employee();

        employee.setName("Keerthana");
        employee.setSalary(new BigDecimal("45000"));
        employee.setPermanent(true);
        employee.setDateOfBirth(LocalDate.of(2004, 1, 1));

        Department department = departmentService.get(1);

        employee.setDepartment(department);

        employeeService.save(employee);

        LOGGER.info("Employee Saved : {}", employee);

        LOGGER.info("End");
    }

    //==================== UPDATE EMPLOYEE ====================

    private static void testUpdateEmployee() {

        LOGGER.info("Start");

        Employee employee = employeeService.get(1);

        Department department = departmentService.get(2);

        employee.setDepartment(department);

        employeeService.save(employee);

        LOGGER.info("Updated Employee : {}", employee);

        LOGGER.info("End");
    }

    //==================== GET DEPARTMENT ====================

    private static void testGetDepartment() {

        LOGGER.info("Start");

        Department department = departmentService.get(1);

        LOGGER.info("Department : {}", department);

        LOGGER.info("Employees : {}", department.getEmployeeList());

        LOGGER.info("End");
    }

    //==================== ADD SKILL ====================

    private static void testAddSkillToEmployee() {

        LOGGER.info("Start");

        Employee employee = employeeService.get(1);

        Skill skill = skillService.get(3);

        Set<Skill> skills = employee.getSkillList();

        skills.add(skill);

        employee.setSkillList(skills);

        employeeService.save(employee);

        LOGGER.info("Employee Updated : {}", employee);

        LOGGER.info("Skills : {}", employee.getSkillList());

        LOGGER.info("End");
    }
}