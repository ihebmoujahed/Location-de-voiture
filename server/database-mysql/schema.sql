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
CREATE TABLE location_car (
  id_location int NOT NULL AUTO_INCREMENT,
  name_car varchar(300) NOT NULL,
  describe_car varchar(300) NOT NULL,
  image_location varchar(1000) NOT NULL,
  price_1 varchar(50) NOT NULL, 
  price_2 varchar(50) NOT NULL,
  price_3 varchar(50) NOT NULL,
  PRIMARY KEY (id_location)
);
CREATE TABLE agencies (
  id_agencies int NOT NULL  AUTO_INCREMENT,
  name_agencies varchar (255)NOT NULL,
  image_agencies varchar (255)NOT NULL,
  localisation_name varchar (255)NOT NULL,
  localisation_map varchar (500)NOT NULL,
  PRIMARY KEY (id_agencies)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/