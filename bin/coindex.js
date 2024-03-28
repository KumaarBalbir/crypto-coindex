#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("check", "Check latest coin price information")
  .command("key", "Manage API Key --https://docs.coinapi.io")
  .parse(process.argv);
