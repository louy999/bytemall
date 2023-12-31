/* Replace with your SQL commands */
 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create TABLE bytemall(
 id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
 productsName VARCHAR(255)  NOT NULL,
 price numeric(6,2) NOT NULL,
 date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 keyword TEXT[] NOT NULL,
 available boolean NOT NULL ,
 img TEXT[] NOT NULL,
 location VARCHAR(250) NOT NULL,
 status VARCHAR(250) NOT NULL,
 productsCode SERIAL  UNIQUE NOT NULL,
 description TEXT NOT NULL
 );