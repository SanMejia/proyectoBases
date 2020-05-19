
CREATE EXTENSION postgis;



CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40),
	email TEXT);

insert into users (name, email) values ('juan', 'juan@putito.com'),('foxzi', 'foxzi@fox.com');

	//comando: npm i bcryptjs dotenv express express-session method-override passport passport-local pg cors --save

select nombre,estrellas,foto_perfil,telefono from trabajador join trabajador_labor on (trabajador_telefono = telefono) and (disponibilidad = true);

//Json RegistrarTrabajador

{
	"telefono": 3106330913,
	"pass": "loco",
	"email": "lobo@animal.com",
	"tipo": "t",
	"cc": 29133575,
	"name": "jonh",
	"estrellas" : 4.9,
	"disponible" : true,
	"perfil": "/casita",
	"documento": "/casita2",
	"direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"

}
//Json Registrar usuario
{
	"telefono": 3106430913,
	"pass": "loco",
	"email": "lobo@animal.com",
	"tipo": "u",
	"name": "jonh",
	"mpago" : "credito",
	"recibo" : "/lalalae",
	"direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"

}
//Json registrar labor Trabajador
{
	"telefono": 3106330913,
	"labor": 1,
	"unidad": 300000,
	"descripcion": "Lo hare bn deveras"
}

select id_labor,nombre,estrellas,foto_perfil,unidad_labor,descripcion from verlaborestrabajadores group by id_labor,nombre,estrellas,foto_perfil,unidad_labor,descripcion,direccion having id_labor=1 order by st_distancesphere((select usuario.direccion from usuario where usuario.telefono=3106430914),direccion);

//esta es import
select id_labor,nombre,estrellas,foto_perfil,unidad_labor,descripcion from verlaborestrabajadores group by id_labor,nombre,estrellas,foto_perfil,unidad_labor,descripcion,direccion having id_labor=1 order by st_distancesphere((select usuario.direccion from usuario where usuario.telefono=3106430914),direccion);

select st_distancesphere (p1.direccion,p2.direccion) from pruebas as p1, pruebas as p2 where p1.id = 1 and p2.id = 2;

select nombre,estrellas,direccion, foto_perfil from trabajador_labor join trabajador on trabajador_telefono=telefono and disponibilidad=true;

select nombre,estrellas,direccion, foto_perfil,id_labor,unidad_labor,descripcion from trabajador_labor join trabajador on trabajador_telefono=telefono and disponibilidad=true;

 select * from verlaborestrabajadores group by id_labor order by st_distancesphere(select ubicacion from usuario where usuario.telefono=3106430914,trabajador.ubicacion) having id_labor=1;


const { user, pass } =req.body;

if(Number.isInteger(user)){
	const response1 = await pool.query('select * from cuenta where telefono = $1',[user]);
	if(response1.rowCount){
		const password = response1.rows[0].password;
		const valor = await bcrypt.compare(pass, password);
		console.log(pass);
		console.log(password);
		console.log(valor);
		if(valor){
			res.send('exito');
		}
		else{
			res.send('fracaso')
		}
	}
	else{
		res.send('no existe ese tel')
	}

}

else{
	const response1 = await pool.query('select * from cuenta where email = $1',[user]);
	if(response1.rowCount){
		const password = response1.rows[0].password;
		const valor = await bcrypt.compare(pass, password);
		console.log(pass);
		console.log(password);
		console.log(valor);
		if(valor){
			res.send('exito');
		}
		else{
			res.send('fracaso')
		}
	}
	else{
		res.send('no existe ese email')
	}

}
///////////////
const getUsers = async (req,res) => {
    console.log('1');
    console.log(req.user);
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows);
    console.log(response.rows);
};
/////////////////////
const getUsersByID = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('select * from users where id = $1',[id]);
    res.json(response.rows[0].id);
}
//////////////////////
const updateUsers= async (req,res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('update users set name = $1, email = $2 where id = $3', [name, email, id]);
    console.log(id, name, email);
    res.send('user actualizado')
};
///////////////////////////////
const deleteUsers= async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('delete from users where id = $1', [id]);
    console.log(response);
    res.json(`User ${id} eliminado satisfactoriamente`);
};
///////////////////////
const createUsers= async (req,res) => {
  const { name, email } = req.body;

  const response = await pool.query('insert into users (name, email) values ($1, $2)',[name, email]);
  console.log(response);
  res.json({
      message: 'usuario agregado',
      body: {
          user: {name, email}
      }
  })

};
