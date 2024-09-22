import { CommandOptions, COMMANDS } from "./commands";
import { log, LogLevel } from "../terminalUtils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function helpCommand(options: CommandOptions) {
  log(LogLevel.INFO, "Usage: deadlock-history <command> [options]");
  log(LogLevel.INFO, "Commands:");
  COMMANDS.forEach((command) => {
    log(LogLevel.INFO, `  ${command.name.padEnd(10)} ${command.description}`);
  });

  process.exit(1);
}
