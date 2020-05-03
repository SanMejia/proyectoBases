
--
-- TABLE: Usuario
-- 
--  

CREATE TABLE Usuario (
  nombre char(100) NOT NULL ,
  telefono decimal NOT NULL ,
  medio_pago char NOT NULL ,
  direccion ST_Geometry NOT NULL ,
  foto_recibos_servicios ST_Geometry NOT NULL ,
  e_mail char(100) NOT NULL 
);

-- 
ALTER TABLE Usuario ADD CONSTRAINT usuario_PK PRIMARY KEY (telefono);

CREATE INDEX Usuario_telefono_index  ON Usuario(telefono);


--
-- TABLE: Trabajador
-- 
--  

CREATE TABLE Trabajador (
  CC decimal NOT NULL ,
  nombre char(100) NOT NULL ,
  Estrellas decimal NOT NULL  DEFAULT 5,
  disponibilidad bool NOT NULL ,
  telefono decimal NOT NULL ,
  direccion ST_Geometry NOT NULL ,
  foto_perfil char NOT NULL ,
  foto_documento char NOT NULL ,
  password char NOT NULL 
);

-- 
ALTER TABLE Trabajador ADD CONSTRAINT TrabajadorPK PRIMARY KEY (telefono);

CREATE INDEX Trabajador_CC_index  ON Trabajador(CC);



--
-- TABLE: Cuenta
-- 
--  

CREATE TABLE Cuenta (
  telefono decimal NOT NULL ,
  password char NOT NULL ,
  tipo char NOT NULL
);

-- 
ALTER TABLE Cuenta ADD CONSTRAINT cuenta_PK PRIMARY KEY (telefono);

CREATE INDEX Usuario_telefono_index  ON Cuenta(telefono);




--
-- TABLE: Labor
-- 
--  

CREATE TABLE Labor (
  id_labor decimal NOT NULL ,
  nombre_labor char(100) NOT NULL ,
  tipo_labor char(100) NOT NULL 
);

-- 
ALTER TABLE Labor ADD CONSTRAINT Taxi_PK PRIMARY KEY (id_labor);

CREATE INDEX Labor_id_labor_index  ON Labor(id_labor);


--
-- TABLE: Trabajador_Labor
-- 
--  

CREATE TABLE Trabajador_Labor (
  trabajador_telefono decimal NOT NULL ,
  id_labor decimal NOT NULL ,
  unidad_labor decimal NOT NULL 
);

-- 
ALTER TABLE Trabajador_Labor ADD CONSTRAINT trabajador_realiza FOREIGN KEY (trabajador_telefono) REFERENCES Trabajador(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Trabajador_Labor ADD CONSTRAINT labor_especializada FOREIGN KEY (id_labor) REFERENCES Labor(id_labor) ON UPDATE NO ACTION ON DELETE NO ACTION;



--
-- TABLE: Usuario_Labor
-- 
--  

CREATE TABLE Usuario_Labor (
  usuario_telefono decimal NOT NULL ,
  id_labor decimal NOT NULL ,
  trabajador_telefono decimal NOT NULL ,
  precio decimal NOT NULL ,
  califica decimal
);

-- 
ALTER TABLE Usuario_Labor ADD CONSTRAINT usuario_solicitante FOREIGN KEY (usuario_telefono) REFERENCES Usuario(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Usuario_Labor ADD CONSTRAINT trabajador_responsable FOREIGN KEY (trabajador_telefono) REFERENCES Trabajador(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Usuario_Labor ADD CONSTRAINT labor_realizada FOREIGN KEY (id_labor) REFERENCES Labor(id_labor) ON UPDATE NO ACTION ON DELETE NO ACTION;


--
-- TABLE: Cuenta_Usuario
-- 
--  

CREATE TABLE Cuenta_Usuario (
  usuario_telefono decimal NOT NULL ,
  cuenta_telefono decimal NOT NULL 
);

-- 
ALTER TABLE Cuenta_Usuario ADD CONSTRAINT datos-usuario FOREIGN KEY (usuario_telefono) REFERENCES Usuario(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Cuenta_Usuario ADD CONSTRAINT datos-cuenta-u FOREIGN KEY (telefono) REFERENCES Cuenta(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

--
-- TABLE: Cuenta_Trabajador
-- 
--  

CREATE TABLE Cuenta_Trabajador (
  trabajador_telefono decimal NOT NULL ,
  cuenta_telefono decimal NOT NULL 
);

-- 
ALTER TABLE Cuenta_Trabajador ADD CONSTRAINT datos-trabajador FOREIGN KEY (trabajador_telefono) REFERENCES Trabajador(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;

-- 
ALTER TABLE Cuenta_Trabajador ADD CONSTRAINT datos-cuenta-t FOREIGN KEY (telefono) REFERENCES Cuenta(telefono) ON UPDATE NO ACTION ON DELETE NO ACTION;
