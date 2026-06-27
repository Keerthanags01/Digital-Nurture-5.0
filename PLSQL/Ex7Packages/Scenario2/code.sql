SET SERVEROUTPUT ON;

CREATE OR REPLACE PACKAGE EmployeeManagement AS

    PROCEDURE HireEmployee(
        p_empid NUMBER,
        p_name VARCHAR2,
        p_department VARCHAR2,
        p_salary NUMBER
    );

    PROCEDURE UpdateEmployee(
        p_empid NUMBER,
        p_salary NUMBER
    );

    FUNCTION AnnualSalary(
        p_empid NUMBER
    ) RETURN NUMBER;

END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS

    PROCEDURE HireEmployee(
        p_empid NUMBER,
        p_name VARCHAR2,
        p_department VARCHAR2,
        p_salary NUMBER
    )
    IS
    BEGIN
        INSERT INTO Employees(EmployeeID, Name, Department, Salary)
        VALUES(p_empid,p_name,p_department,p_salary);

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Employee Hired Successfully.');
    END;

    PROCEDURE UpdateEmployee(
        p_empid NUMBER,
        p_salary NUMBER
    )
    IS
    BEGIN
        UPDATE Employees
        SET Salary=p_salary
        WHERE EmployeeID=p_empid;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Employee Updated Successfully.');
    END;

    FUNCTION AnnualSalary(
        p_empid NUMBER
    )
    RETURN NUMBER
    IS
        v_salary NUMBER;
    BEGIN
        SELECT Salary
        INTO v_salary
        FROM Employees
        WHERE EmployeeID=p_empid;

        RETURN v_salary*12;
    END;

END EmployeeManagement;
/