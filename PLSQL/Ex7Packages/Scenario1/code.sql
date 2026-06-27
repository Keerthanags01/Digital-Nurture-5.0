SET SERVEROUTPUT ON;


CREATE OR REPLACE PACKAGE CustomerManagement AS

    PROCEDURE AddCustomer(
        p_customerid NUMBER,
        p_name VARCHAR2,
        p_dob DATE,
        p_balance NUMBER
    );

    PROCEDURE UpdateCustomer(
        p_customerid NUMBER,
        p_name VARCHAR2,
        p_balance NUMBER
    );

    FUNCTION GetBalance(
        p_customerid NUMBER
    ) RETURN NUMBER;

END CustomerManagement;
/


CREATE OR REPLACE PACKAGE BODY CustomerManagement AS

    PROCEDURE AddCustomer(
        p_customerid NUMBER,
        p_name VARCHAR2,
        p_dob DATE,
        p_balance NUMBER
    )
    IS
    BEGIN
        INSERT INTO Customers(CustomerID, Name, DOB, Balance)
        VALUES(p_customerid, p_name, p_dob, p_balance);

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Customer Added Successfully.');
    END;

    PROCEDURE UpdateCustomer(
        p_customerid NUMBER,
        p_name VARCHAR2,
        p_balance NUMBER
    )
    IS
    BEGIN
        UPDATE Customers
        SET Name = p_name,
            Balance = p_balance
        WHERE CustomerID = p_customerid;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Customer Updated Successfully.');
    END;

    FUNCTION GetBalance(
        p_customerid NUMBER
    )
    RETURN NUMBER
    IS
        v_balance NUMBER;
    BEGIN
        SELECT Balance
        INTO v_balance
        FROM Customers
        WHERE CustomerID = p_customerid;

        RETURN v_balance;
    END;

END CustomerManagement;
/