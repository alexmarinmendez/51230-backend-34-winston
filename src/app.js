import express from 'express'
import logger from './logger.js'

const app = express()

app.get('/', (req, res) => {
    const user = req.query.user
    if (user === 'test') {
        logger.debug('Se ingresó a la ruta /')
        logger.http('Se ingresó a la ruta /')
        logger.info('Se ingresó a la ruta /')
        logger.warning('Se ingresó a la ruta /')
        logger.error('Se ingresó a la ruta /')
        logger.fatal('Se ingresó a la ruta /')
    }
    res.json({ status: 'success' })
})

app.listen(8080, () => console.log('Server Up!'))