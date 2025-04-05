# Sui Wallet Generator

A Node.js script to generate multiple Sui wallets with ease. This tool creates three separate output files containing wallet addresses, mnemonic phrases, and private keys.

## Features

- 🚀 Generate multiple Sui wallets with one command
- 📁 Automatically saves output in three organized files:
  - Complete wallet details
  - Addresses only
  - Mnemonic phrases only
- 🔒 Secure random wallet generation using industry-standard cryptography
- ⚡ Fast and lightweight

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/sui-wallet-generator.git
```

2. Navigate to the project directory:
```bash
cd sui-wallet-generator
```

3. Install dependencies:
```bash
npm install
```

## Usage

Run the generator with:
```bash
node create-sui-wallets.js
```

When prompted, enter the number of wallets you want to generate.

### Output Files

The script will create three files:

1. `sui_wallets.txt` - Contains full wallet details (address, mnemonic, and private key)
2. `sui_address.txt` - Contains only wallet addresses (one per line)
3. `sui_mnemonic.txt` - Contains only mnemonic phrases (one per line)

## Example Output

**Terminal Output:**
```
=== Sui Wallet Generator ===

🛠️ How many Sui wallets do you want to create? 3

Creating 3 Sui wallets...

Wallet 1: 0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
Wallet 2: 0x9s8r7q6p5o4n3m2l1k0j9i8h7g6f5e4d3c2b1a
Wallet 3: 0x5o4n3m2l1k0j9i8h7g6f5e4d3c2b1a9z8y7x6

✅ Successfully created 3 Sui wallets
📁 Complete details: sui_wallets.txt
📁 Addresses only: sui_address.txt
📁 Mnemonics only: sui_mnemonic.txt
```

**File Contents:**
- `sui_wallets.txt` contains formatted wallet details
- `sui_address.txt` contains one address per line
- `sui_mnemonic.txt` contains one mnemonic phrase per line

## Security Note

⚠️ **Important:** The generated files contain sensitive information. Always:
- Store them securely
- Never commit them to version control
- Consider encrypting the files if storing long-term

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or pull request for any improvements.

---

Happy wallet generating! 🦆 (Quack!)