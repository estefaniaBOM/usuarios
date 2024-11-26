--PRIMERO CREAR BASE DE DATOS CON EL NOMBRE AdministracionUsuarios

CREATE TABLE escolaridad(
	id_escolaridad Integer GENERATED ALWAYS AS IDENTITY,
	nivel Varchar(1000),
	PRIMARY KEY (id_escolaridad)
);

CREATE TABLE habilidades(
	id_habilidad Integer GENERATED ALWAYS AS IDENTITY,
	habilidad Varchar(1000),
	PRIMARY KEY (id_habilidad)
);

CREATE TABLE usuarios(
	id_usuario Integer GENERATED ALWAYS AS IDENTITY,
	curp Varchar(1000),
	nombre Varchar(1000), 
	apellidos Varchar(1000),
	direccion Varchar(3000),
	fecha_nacimiento Date,
	correo_electronico Varchar(1000),
	password Varchar(2000),
	id_escolaridad Integer,
	fotografia Varchar(1000),
	PRIMARY KEY (id_usuario),
	FOREIGN KEY (id_escolaridad) REFERENCES escolaridad (id_escolaridad) ON DELETE CASCADE
);

CREATE TABLE usuario_habilidades(
	id_usuario_habilidades Integer GENERATED ALWAYS AS IDENTITY,
	id_usuario Integer,
	id_habilidad Integer,
	PRIMARY KEY (id_usuario_habilidades),
	FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario) ON DELETE CASCADE,
	FOREIGN KEY (id_habilidad) REFERENCES habilidades (id_habilidad) ON DELETE CASCADE
);

INSERT INTO public.escolaridad(nivel)
	VALUES ('Primaria'), ('Secundaria'), ('Bachillerato'), ('Universidad'), ('Maestría'), , ('Doctorado');

INSERT INTO public.habilidades(habilidad)
VALUES ('Conocimiento de lenguajes de programación'), 
	('Capacidad de análisis'), 
	('Habilidades de resolución de problemas'),
	('Trabajo en equipo'),
	('Adaptación al cambio'),
	('Habilidades interpersonales');