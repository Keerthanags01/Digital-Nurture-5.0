SET SERVEROUTPUT ON;

CREATE OR REPLACE PACKAGE AccountOperations AS

    PROCEDURE OpenAccount(
        p_accountid NUMBER,
        p_customerid NUMBER,
        p_accounttype VARCHAR2,
        p_balance NUMBER
    );

    PROCEDURE CloseAccount(
        p_accountid NUMBER
    );

    FUNCTION TotalBalance(
        p_customerid NUMBER
    ) RETURN NUMBER;

END AccountOperations;
/

CREATE OR REPLACE PACKAGE BODY AccountOperations AS

    PROCEDURE OpenAccount(
        p_accountid NUMBER,
        p_customerid NUMBER,
        p_accounttype VARCHAR2,
        p_balance NUMBER
    )
    IS
    BEGIN
        INSERT INTO Accounts(AccountID,CustomerID,AccountType,Balance)
        VALUES(p_accountid,p_customerid,p_accounttype,p_balance);

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Account Opened Successfully.');
    END;

    PROCEDURE CloseAccount(
        p_accountid NUMBER
    )
    IS
    BEGIN
        DELETE FROM Accounts
        WHERE AccountID=p_accountid;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Account Closed Successfully.');
    END;

    FUNCTION TotalBalance(
        p_customerid NUMBER
    )
    RETURN NUMBER
    IS
        v_total NUMBER;
    BEGIN
        SELECT SUM(Balance)
        INTO v_total
        FROM Accounts
        WHERE CustomerID=p_customerid;

        RETURN NVL(v_total,0);
    END;

END AccountOperations;
/