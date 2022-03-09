-- -------------------------------------------------------------
-- TablePlus 4.0.0(370)
--
-- https://tableplus.com/
--
-- Database: sample_db
-- Generation Time: 2021-07-03 12:13:41.2650 AM
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "subject_info" (
    "url" varchar(255),
    "name" varchar(255),
    "description" varchar(255)
);

INSERT INTO "subject_info" ("url", "name", "description") VALUES
("/category/georgaphy","география","наука про землю"),
("/category/math","математика","посчитать всем надо"),
("/category/IT","информатика","наука про хранение информации"),
