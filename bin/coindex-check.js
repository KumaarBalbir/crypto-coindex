const { Command } = require("commander");
const program = new Command();

const check = require("../commands/check");

program
  .command("price")
  .description("Check price of coins")
  .option(
    "--coin <type>", // Option
    "Add specific coin types", // Description
    "BTC,ETH,XRP" // Default value
  )
  .option("--cur <currency>", "Change the currency", "USD")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
