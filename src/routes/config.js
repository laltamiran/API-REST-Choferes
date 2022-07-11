const oracledb = require('oracledb');


const config ={
    user: LALTAMIRAN,
    password: '1@LALTAMIRAN#4' ,
    connectString: 'APU:1521/sos'
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
      if (conn) { // conn assignment worked, need to close
        await conn.close()
      }
    }
  }
  
  getDrivers(101)
