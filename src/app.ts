/**
 * Entrypoint
 */

import SteamUser from "steam-user";
import { invokeCommand } from "./commands/commands";
import {
  launchDeadlock,
  loginToSteam,
  setupSteamEventHandlers,
} from "./steamHandlers";

// Fix BigInt -> JSON issue
// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
interface BigIntWithToJSON extends BigInt {
  toJSON: () => string;
}

(BigInt.prototype as BigIntWithToJSON).toJSON = function () {
  return this.toString();
};

// =========================== Entrypoint ====================================== \\
// ============================================================================= \\

async function main() {
  const client = new SteamUser();
  setupSteamEventHandlers(client);

  await loginToSteam(client);
  await launchDeadlock(client);

  // Default command is "help"
  let command = "help";
  if (process.argv.length > 2) {
    command = process.argv[2];
  }
  invokeCommand(command, { user: client, args: process.argv.slice(3) });
}

main();
