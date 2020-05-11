const  passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { pool, bcrypt } = require('../controllers/bd.controller');

passport.use('login',new LocalStrategy({
    usernameField: 'telefono',
    passwordField: 'pass'
}, async (telefono, pass, done) => {
    //Buscar telefono
    console.log('1-');
    const response1 = await pool.query('select * from cuenta where telefono = $1',[telefono]);
    console.log(response1);
    console.log('2-');
    if (response1.rowCount){
      //comprobar contraseña
      console.log('4-');
      const password = response1.rows[0].password;
      const valor = await bcrypt.compare(pass, password);
      console.log(valor);
      console.log('5-');
      if(valor){
        console.log('6-');
        return done(null,response1.rows[0]);

      } else {
        return done(null, false, {message: 'contraseña incorrecta'});
      }


        //

    } else {

      console.log('3-');
      return done(null, false , {message: 'usuario no encontrado'});

    }
}));

passport.serializeUser((user, done) => {
  console.log('10-');
   done(null, user.telefono);
   console.log('11-');
});

passport.deserializeUser(async (telefono, done)=> {
  console.log('12-');
  const resp = await pool.query('select * from cuenta where telefono = $1',[telefono]);
    done(null,resp.rows[0]);

});

module.exports = {
  passport
}
