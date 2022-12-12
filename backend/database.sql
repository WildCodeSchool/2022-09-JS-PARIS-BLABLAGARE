CREATE TABLE users (
  u_id int UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  u_firstname varchar(30) NOT NULL,
  u_lastname varchar(30) NOT NULL,
  u_email varchar(30) UNIQUE NOT NULL,
  u_alias varchar(30) UNIQUE NOT NULL,
  u_hashedPassword varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE trips (
  t_id int UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  t_search boolean NOT NULL,
  t_origin varchar(30) NOT NULL,
  t_dest1 varchar(30) NOT NULL,
  t_dest2 varchar(30) NULL,
  t_dest3 varchar(30) NULL,
  t_date date NOT NULL,
  t_hour time NOT NULL,
  t_comments varchar(255) NULL,
  t_users_id int UNSIGNED NOT NULL,
  Constraint fk_UsersTrips foreign key (t_users_id) REFERENCES users(u_id) ON DELETE cascade
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE killedTokens (
  token VARCHAR(255) NOT NULL PRIMARY KEY
);

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

