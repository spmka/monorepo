/* tslint:disable:no-console */
// TODO: Replace console.log with concrete logger
import {Injectable} from '@angular/core';
import {ObjectTools} from '@spmka/shared/util-tools';

/** The log levels */
enum LogLevel {
  debug = 'DEBUG',
  info = 'INFO ',
  warn = 'WARN ',
  error = 'ERROR'
}

/** The logging service */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  /** Constructor. */
  constructor() {
    this.logStartConstruct(LoggerService.name);
    this.logEndConstruct(LoggerService.name);
    this.debug('Test-Message', {p1: 47, p2: 'test'}, [1, 2, 3], 'Test3', {
      t1: 12123,
      t2: [4, 6, 7],
      t3: 'test3'
    });
  }

  /**
   * Log a constructor start of a class.
   * @param className the class name.
   */
  public logStartConstruct(className: string) {
    this.debug(`${className} will be constructed...`);
  }

  /**
   * Log a constructor end of a class.
   * @param className the class name.
   */
  public logEndConstruct(className: string) {
    this.debug(`${className} is constructed.`);
  }

  /**
   * Log a method call.
   * @param className the class name.
   * @param methodName the method name.
   */
  public logMethodCall(className: string, methodName: string) {
    this.debug(`${className}.${methodName} called.`);
  }

  /**
   * Logs the given debug message.
   * @param message the message to log
   * @param data optional data to log
   */
  public debug(message: string, ...data: any) {
    console.debug(this.formatMessage(LogLevel.debug, message, data));
  }

  /**
   * Logs the given info message.
   * @param message the message to log
   * @param data optional data to log
   */
  public info(message: string, ...data: any) {
    console.log(this.formatMessage(LogLevel.info, message, data));
  }

  /**
   * Logs the given warning.
   * @param message the message to log
   * @param data optional data to log
   */
  public warn(message: string, ...data: any) {
    console.warn(this.formatMessage(LogLevel.warn, message, data));
  }

  /**
   * Logs the given error.
   * @param message the message to log
   * @param data optional data to log
   */
  public error(message: string, ...data: any) {
    console.error(this.formatMessage(LogLevel.error, message, data));
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Formats a message.
   * @param level the log level.
   * @param message the message.
   * @param data the optional data for the message.
   */
  private formatMessage(level: LogLevel, message: string, data?: any[]) {
    let dataString = '';
    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (ObjectTools.isObject(element)) {
          dataString += JSON.stringify(element);
        } else {
          dataString += element;
        }
        if (i < data.length - 1) {
          dataString += ' | ';
        }
      }
      return `${new Date().toISOString()} [${level}] - ${message} - ${dataString}`;
    } else {
      return `${new Date().toISOString()} [${level}] - ${message}`;
    }
  }
}
