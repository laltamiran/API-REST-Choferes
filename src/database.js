const { Router } = require('express');
const oracledb = require('oracledb');
const router = Router();



const config ={
    user: 'LALTAMIRAN',
    password: '1@LALTAMIRAN#4' ,
    connectString: 'APU:1521/sos'
}

if (process.platform === 'win32') {
  try {
    oracledb.initOracleClient({libDir: 'C:\\oracle\\instantclient_21_6'});   // note the double backslashes
  } catch (err) {
    console.error('Whoops!');
    console.error(err);
    process.exit(1);
  }
}



async function getDrivers (NUME_DOCU) {
    let conn
  
    try {
      conn = await oracledb.getConnection(config)
  
      const result = await conn.execute(
        'select * from CHOFERES where CHOFERES_NUME_DOCU = :NUME_DOCU',
        [NUME_DOCU]
      )
  
      console.log(result.rows[0])
    } catch (err) {
      console.log('Ouch!', err)
    } finally {
      if (conn) { 
        await conn.close()
      }
    }
  }

  getDrivers(101)
module.exports.getDrivers = getDrivers;

module.exports = router;
