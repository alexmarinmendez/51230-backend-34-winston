import winston from 'winston'

const custom = {
    levels: {
        debug: 0,
        http: 1,
        info: 2,
        warning: 3,
        error: 4,
        fatal: 5
    },
    colors: {
        debug: 'white',
        http: 'green',
        info: 'blue',
        warning: 'yellow',
        error: 'cyan',
        fatal: 'red'
    }
}

winston.addColors(custom.colors)

const logger = winston.createLogger({
    levels: custom.levels,
    transports: [
        new winston.transports.Console({
            level: 'fatal',
            // format: winston.format.simple()
            // format: winston.format.json()
            // format: winston.format.combine(
            //     winston.format.timestamp(),
            //     winston.format.json()
            // )
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: './logs/server-log.log',
            level: 'fatal',
            format: winston.format.simple()
            // format: winston.format.combine(
            //     winston.format.colorize(),
            //     winston.format.simple()
            // )
        })
    ]
})

export default logger