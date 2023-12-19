import { LoggerService, LogLevel } from '@nestjs/common';
import { createLogger, format, Logger, transports } from 'winston';
import * as chalk from 'chalk';
import * as dayjs from 'dayjs';
export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor() {
    
    this.logger = createLogger({
      level: 'debug',
      // format: format.combine(
      //   format.colorize(),
      //   format.simple()
      // ),
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.printf(({context, level, message, time, name}) => {
              const appStr = chalk.green('[NEST]');
              const contextStr = chalk.yellow(`[${context}]`);
              const nameStr = chalk.blue(`${name || '暂无'}`);
              return `${nameStr} =>${appStr} ${time} ${level} ${contextStr} ${message}`;
            })
          )
        }),
        new transports.File({
          format: format.combine(
            format.timestamp(),
            format.json()
          ),
          filename: 'test.log',
          dirname: 'log',
        })
      ]
    });
  }

  log(message: string, context: string) {
    const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('info', message, { context, time, name: 123 });
  }
  error(message: any, context: string) {
    const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('error', message, { context, time });
  }
  warn(message: any, context: string) {
    const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('warn', message, { context, time });
  }

}