DROP DATABASE appademia;

CREATE DATABASE appademia;

USE appademia;

CREATE TABLE students (
	id BIGINT AUTO_INCREMENT,
    identifier VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    sex CHAR(1) NOT NULL,
    email VARCHAR (100) NOT NULL,
    photo VARCHAR(500) NOT NULL DEFAULT '',
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);

INSERT INTO students(identifier, first_name, last_name, sex, email, photo) VALUES ('stu-01',  'Cesar', 'Perez', 'M', 'cesar@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO students(identifier, first_name, last_name, sex, email, photo) VALUES ('stu-02',  'Armando', 'Fernandez', 'M', 'armando@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO students(identifier, first_name, last_name, sex, email, photo) VALUES ('stu-03',  'Jhenery', 'Ramirez', 'F', 'jhenery@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO students(identifier, first_name, last_name, sex, email, photo) VALUES ('stu-04',  'Alejandro', 'Jimenez', 'M', 'alejandro@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO students(identifier, first_name, last_name, sex, email, photo) VALUES ('stu-05',  'Pedro', 'Gonzalez', 'M', 'pedro@appademia.com', '/home/photos/avatar.jpg');

CREATE TABLE professors (
	id BIGINT AUTO_INCREMENT,
    identifier VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    sex CHAR(1) NOT NULL,
    email VARCHAR (100) NOT NULL,
    photo VARCHAR(500) NOT NULL DEFAULT '',
	createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);

INSERT INTO professors(identifier, first_name, last_name, sex, email, photo) VALUES ('prof-01',  'Domingo', 'Gonzalez', 'M', 'domingo@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO professors(identifier, first_name, last_name, sex, email, photo) VALUES ('prof-02',  'Juan', 'Martinez', 'M', 'juan@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO professors(identifier, first_name, last_name, sex, email, photo) VALUES ('prof-03',  'Juana', 'Stallman', 'F', 'juana@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO professors(identifier, first_name, last_name, sex, email, photo) VALUES ('prof-04',  'Wally', 'Trejo', 'M', 'wally@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO professors(identifier, first_name, last_name, sex, email, photo) VALUES ('prof-05',  'Manuel', 'Cepeda', 'M', 'manuel@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO professors(identifier, first_name, last_name, sex, email, photo) VALUES ('prof-06',  'Pedro', 'Veloz', 'M', 'pedro@appademia.com', '/home/photos/avatar.jpg');
INSERT INTO professors(identifier, first_name, last_name, sex, email, photo) VALUES ('prof-07',  'Johnny', 'Cage', 'M', 'johnny@appademia.com', '/home/photos/avatar.jpg');

CREATE TABLE classes_categories (
	id BIGINT AUTO_INCREMENT,
    cc_name VARCHAR(500) NOT NULL UNIQUE,
	createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);

INSERT INTO classes_categories(cc_name) VALUES('Category-01');
INSERT INTO classes_categories(cc_name) VALUES('Category-02');

CREATE TABLE classes (
	id BIGINT AUTO_INCREMENT,
	identifier VARCHAR(20) NOT NULL,
    class_name VARCHAR(200) NOT NULL,
    professor_id BIGINT NOT NULL,
    classes_categories_id BIGINT NOT NULL,
	createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (professor_id) REFERENCES professors(id),
    FOREIGN KEY (classes_categories_id) REFERENCES classes_categories(id)
);

INSERT INTO classes(identifier, class_name, professor_id, classes_categories_id) VALUES ('class-01', 'Introduccion a las Base de Datos', 1, 1);
INSERT INTO classes(identifier, class_name, professor_id, classes_categories_id) VALUES ('class-02', 'Introduccion a los Algoritmos', 2, 2);
INSERT INTO classes(identifier, class_name, professor_id, classes_categories_id) VALUES ('class-03', 'Introduccion a la programacion en Javascript', 3, 1);
INSERT INTO classes(identifier, class_name, professor_id, classes_categories_id) VALUES ('class-04', 'Ciencias de Datos', 4, 2);

CREATE TABLE sessions (
	id BIGINT AUTO_INCREMENT,
    identifier VARCHAR(20) NOT NULL UNIQUE,
    google_classroom_url TEXT DEFAULT NULL,
	session_datetime DATETIME DEFAULT NULL,
    classes_id BIGINT NOT NULL,
	createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (classes_id) REFERENCES classes(id)
);

INSERT INTO sessions(identifier, google_classroom_url, session_datetime, classes_id) VALUES('sess-01', 'gclassroom.com', NOW(), 1);
INSERT INTO sessions(identifier, google_classroom_url, session_datetime, classes_id) VALUES('sess-02', 'gclassroom.com', NOW(), 1);
INSERT INTO sessions(identifier, google_classroom_url, session_datetime, classes_id) VALUES('sess-03', 'gclassroom.com', NOW(), 1);
INSERT INTO sessions(identifier, google_classroom_url, session_datetime, classes_id) VALUES('sess-04', 'gclassroom.com', NOW(), 1);
INSERT INTO sessions(identifier, google_classroom_url, session_datetime, classes_id) VALUES('sess-05', 'gclassroom.com', NOW(), 2);
INSERT INTO sessions(identifier, google_classroom_url, session_datetime, classes_id) VALUES('sess-06', 'gclassroom.com', NOW(), 3);
INSERT INTO sessions(identifier, google_classroom_url, session_datetime, classes_id) VALUES('sess-07', 'gclassroom.com', NOW(), 3);
INSERT INTO sessions(identifier, google_classroom_url, session_datetime, classes_id) VALUES('sess-08', 'gclassroom.com', NOW(), 4);

CREATE TABLE sessions_users (
	students_id BIGINT,
    sessions_id BIGINT,
	createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW(),
    PRIMARY KEY (students_id, sessions_id),
    FOREIGN KEY (students_id) REFERENCES students(id),
    FOREIGN KEY (sessions_id) REFERENCES sessions(id)
);

INSERT INTO sessions_users(students_id, sessions_id) VALUES(1, 2);
INSERT INTO sessions_users(students_id, sessions_id) VALUES(2, 3);
INSERT INTO sessions_users(students_id, sessions_id) VALUES(3, 4);
INSERT INTO sessions_users(students_id, sessions_id) VALUES(4, 5);