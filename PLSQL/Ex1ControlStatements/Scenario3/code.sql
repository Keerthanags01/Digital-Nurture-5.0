SET SERVEROUTPUT ON;

DECLARE

    CURSOR loan_cursor IS
        SELECT C.CustomerID,
               C.Name,
               L.LoanID,
               L.EndDate
        FROM Customers C
        JOIN Loans L
        ON C.CustomerID = L.CustomerID
        WHERE L.EndDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN

    FOR loan_record IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear '
            || loan_record.Name
            || ', your Loan ID '
            || loan_record.LoanID
            || ' is due on '
            || TO_CHAR(loan_record.EndDate,'DD-MON-YYYY')
        );

    END LOOP;

END;
/