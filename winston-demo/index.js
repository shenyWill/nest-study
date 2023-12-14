import winston from 'winston';
import 'winston-daily-rotate-file';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({
    //   dirname: 'log',
    //   filename: 'test.log',
    //   maxsize: 1024,
    // }),
    new winston.transports.DailyRotateFile({
      level: 'info',
      dirname: 'log2',
      filename: 'test-%DATE%.log',
      datePattern: 'YYYY-MM-DD HH:mm',
      maxSize: '1k'
    }),
    new winston.transports.Http({
      host: 'localhost',
      port: 3000,
      path: '/test-logger/log'
    })
  ]
})

logger.info('常山赵子龙');
logger.error('干二爷');
logger.debug(6666666666);