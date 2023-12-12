import { LoggerService, LogLevel } from '@nestjs/common';
export class MyLogger implements LoggerService {
  log(message: string, context: string) {
    console.log(`---log----[${context}]`, message)
  }
  error(message: any, context: string) {
    console.log(`---error----[${context}]`, message)
  }
  warn(message: any, context: string) {
    console.log(`---warn----[${context}]`, message)
  }

}