# Crypto-Coindex

This project is a Node.js CLI tool for checking cryptocurrency prices. It utilizes various Node.js packages and the [CoinAPI](https://docs.coinapi.io/) to provide real-time cryptocurrency data.

## Description

- **Modules Used**: The modules used in the project are `commander` for handling CLI commands, `inquirer` for user input prompts, `config store` for configuration management, `axios` for API requests, and `colors` for CLI output styling.

- **Command Functionality**: Organized command functionality into separate files and folders for maintainability and modularity.

- **API Key Handling**: Implemented a "key manager" class to handle set, get, and delete operations for API keys using `config store`.

- **User Input Validation**: Utilized `inquirer` for prompting the user for an API key and implemented custom validation to ensure the key is not empty.

- **Error Handling**: Implemented error handling for scenarios such as missing API keys or API request failures.

## Demonstration
Here is demonstration of few commands
#### coindex
![Main Command Screenshot](assets/coindex.png) 

#### coindex key -h 
![help command](assets/coindex%20key%20-h.png) 

#### coindex key set
![set command](assets/coindex%20key%20set.png) 

#### coindex check price
![price command](assets/coindex%20check%20price.png)

#### coindex check price --cur=EUR
![price with currency](assets/coindex%20check%20price%20cur.png)

#### coindex check price --coin=BTC --cur=INR
![price with coin and cur](assets/coindex%20check%20price%20coin.png)

## Getting Started

To get started with the Crypto-Coindex CLI tool, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run `npm link` for creating symbolic link for global command access.
4. Get an API key from the [CoinAPI](https://docs.coinapi.io/).
5. Open cmd prompt or powershell to explore the available commands (`key`, `check`, etc.) and check cryptocurrency prices (see attached screenshot).

Feel free to explore and customize it according to your requirements!

### Credit

- Brad Traversy (amazing man)
- CoinAPI (for providing API key for development purpose)
