import SteamUser from "steam-user";
import { helpCommand } from "./help";
import { getCommand } from "./get";
import { log, LogLevel } from "../terminalUtils";

export const COMMANDS: Command[] = [
  {
    name: "help",
    description: "How to use the Deadlock-history CLI",
    handler: helpCommand,
  },
  {
    name: "get",
    description: "Get <history | match <match_id> > details",
    handler: getCommand,
  },
];

export interface Command {
  name: string;
  description: string;
  handler: (options: CommandOptions) => void;
}

export interface CommandOptions {
  user: SteamUser;
  args: string[];
}

export function invokeCommand(commandName: string, options: CommandOptions) {
  const command = COMMANDS.find((command) => command.name === commandName);

  if (!command) {
    log(LogLevel.ERROR, `Unknown command "${command}".`);
    helpCommand(options);
    return;
  }

  command.handler(options);
}
