require('dotenv').config();
const app=require('./server');
require('./conexion');

function main(){
    app.listen(app.get('PORT'),function(){
        console.log("server en port "+app.get('PORT'));
        
    })
}

main();

