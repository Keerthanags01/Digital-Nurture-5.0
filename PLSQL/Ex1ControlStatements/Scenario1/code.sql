SET SERVEROUTPUT ON;

DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, DOB
        FROM Customers;

    v_age NUMBER;
BEGIN
    FOR customer_record IN customer_cursor LOOP

        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, customer_record.DOB) / 12);

        IF v_age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = customer_record.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount applied to Customer ID: '
                || customer_record.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Process Completed Successfully.');

END;
/
SELECT CustomerID, InterestRate
FROM Loans;
