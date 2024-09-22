import { terminal } from "terminal-kit";

export enum LogLevel {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  DEBUG = "debug",
}

function setCurrentLogLevel(): LogLevel {
  if (process.env.LOG_LEVEL) {
    const logLevel = process.env.LOG_LEVEL.toLowerCase();
    if (Object.values(LogLevel).includes(logLevel as LogLevel)) {
      return logLevel as LogLevel;
    } else {
      throw new Error(`Invalid log level "${logLevel}"`);
    }
  }

  return LogLevel.INFO;
}
const CURRENT_LOG_LEVEL: LogLevel = setCurrentLogLevel() || LogLevel.INFO;

export async function spinner(text: string): Promise<void> {
  await terminal.spinner("impulse");
  terminal(text);
}

export function log(level: LogLevel, message: string): void {
  // Verifty the log level is valid
  if (!Object.values(LogLevel).includes(level)) {
    throw new Error(`Invalid log level "${level}"`);
  }

  // Drop log messages that are below the current log level
  if (
    Object.values(LogLevel).indexOf(level) >
    Object.values(LogLevel).indexOf(CURRENT_LOG_LEVEL)
  ) {
    return;
  }

  switch (level) {
    case LogLevel.ERROR:
      terminal.red("\nERROR: " + message);
      break;
    case LogLevel.WARNING:
      terminal.yellow("\nWARNING: " + message);
      break;
    case LogLevel.INFO:
      terminal("\nINFO: " + message);
      break;
    case LogLevel.DEBUG:
      terminal.grey("\nDEBUG: " + message);
      break;
  }
}
