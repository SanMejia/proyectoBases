
CREATE EXTENSION postgis;



CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40),
	email TEXT);

insert into users (name, email) values ('juan', 'juan@putito.com'),('foxzi', 'foxzi@fox.com');

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
