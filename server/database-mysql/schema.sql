DROP DATABASE IF EXISTS LOCA;

CREATE DATABASE LOCA;

USE LOCA;

CREATE TABLE Users (
  id_User int NOT NULL AUTO_INCREMENT,
  first_name varchar(350) NOT NULL,
  last_name varchar(350) NOT NULL,
  email varchar(350) ,
  password varchar(350) NOT NULL, 
  card_id int(20) NOT NULL,
  phone_number varchar(50) NOT NULL,
  PRIMARY KEY (id_User)
);
CREATE TABLE Payment (
  id_payment int NOT NULL AUTO_INCREMENT,
  id_User int NOT NULL,
  student varchar(50) NOT NULL,
  dbt varchar(300),
  price int(20), 
  month varchar(40),
  FOREIGN KEY (id_User) REFERENCES Users (id_User),
  PRIMARY KEY (id_payment)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/