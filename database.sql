-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shopping-list" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(80) not null,
    "quantity" decimal(18,2) not null,
    "unit" varchar(20),
    "purchased" BOOLEAN DEFAULT false
    );
 INSERT INTO "shopping-list"
    ("name", "quantity", "unit")
VALUES
    ('Pinneaple', '3.5545', 'some unit'),
    ('Apples', '16.222', 'some unit')