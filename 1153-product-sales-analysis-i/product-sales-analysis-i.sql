# Write your MySQL query statement below
SELECT pt.product_name, st.year, st.price
FROM Sales st
LEFT JOIN Product pt
ON pt.product_id = st.product_id