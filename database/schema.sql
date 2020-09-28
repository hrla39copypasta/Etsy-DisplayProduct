DROP DATABASE IF EXISTS etsy_MainDisplay;

CREATE DATABASE etsy_MainDisplay;

USE etsy_MainDisplay;

CREATE TABLE etsy_ProductDescription (
  id int AUTO_INCREMENT NOT NULL,
  sellerName VARCHAR(255) NOT NULL,
  sales INT(15) NOT NULL,
  rating INT NOT NULL,
  productName VARCHAR(255) NOT NULL,
  price INT(15) NOT NULL,
  style VARCHAR(255),
  materials VARCHAR(255),
  info VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE etsy_PhotoProductDisplay (
  id int AUTO_INCREMENT NOT NULL,
  sellerName VARCHAR(255),
  img VARCHAR(255) NOT NULL,
  img1 VARCHAR(255) NOT NULL,
  img2 VARCHAR(255) NOT NULL,
  img3 VARCHAR(255) NOT NULL,
  img4 VARCHAR(255) NOT NULL,
  img5 VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

