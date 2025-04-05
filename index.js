const fs = require('fs');
const readline = require('readline');
const { Ed25519Keypair } = require('@mysten/sui.js/keypairs/ed25519');
const { generateMnemonic } = require('bip39');

// Konfigurasi file output
const WALLETS_FILE = 'sui_wallets.txt';
const ADDRESS_FILE = 'sui_address.txt';
const MNEMONIC_FILE = 'sui_mnemonic.txt';

function createSuiWallet() {
    const mnemonic = generateMnemonic();
    const keypair = Ed25519Keypair.deriveKeypair(mnemonic);
    const address = keypair.toSuiAddress();
    const privateKey = keypair.export().privateKey;

    return { 
        address, 
        mnemonic,
        privateKey 
    };
}

function saveWalletData(wallets) {
    let walletData = '=== Daftar Wallet Sui ===\n\n';
    let addressData = '';
    let mnemonicData = '';
    
    wallets.forEach((wallet, index) => {
        // Format untuk file detail lengkap
        walletData += `Wallet #${index + 1}\n`;
        walletData += `Alamat: ${wallet.address}\n`;
        walletData += `Mnemonic: ${wallet.mnemonic}\n`;
        walletData += `Private Key: ${wallet.privateKey}\n\n`;
        
        // Format untuk file alamat saja
        addressData += `${wallet.address}\n`;
        
        // Format untuk file mnemonic saja
        mnemonicData += `${wallet.mnemonic}\n`;
    });

    // Menyimpan ketiga file
    fs.writeFileSync(WALLETS_FILE, walletData);
    fs.writeFileSync(ADDRESS_FILE, addressData);
    fs.writeFileSync(MNEMONIC_FILE, mnemonicData);
    
    console.log(`
✅ Berhasil membuat ${wallets.length} wallet Sui
📁 File detail lengkap: ${WALLETS_FILE}
📁 File alamat saja: ${ADDRESS_FILE}
📁 File mnemonic saja: ${MNEMONIC_FILE}
    `);
}

async function main() {
console.log(
  "   _____ __  ______   _       __      ____     __     ______                           __            \n" +
  "  / ___// / / /  _/  | |     / /___ _/ / /__  / /_   / ____/__  ____  ___  _________ _/ /_____  _____\n" +
  "  \\__ \\/ / / // /    | | /| / / __ `/ / / _ \\/ __/  / / __/ _ \\/ __ \\/ _ \\/ ___/ __ `/ __/ __ \\/ ___/\n" +
  " ___/ / /_/ // /     | |/ |/ / /_/ / / /  __/ /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/ /_/ / /    \n" +
  "/____/\\____/___/     |__/|__/\\__,_/_/_/\\___/\\__/   \\____/\\___/_/ /_/\\___/_/   \\__,_/\\__/\\____/_/     "+
  "\n                                                                                   by Fadhiel Naufan\n"
);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('🛠️ Berapa banyak wallet Sui yang ingin dibuat? ', (answer) => {
        const count = parseInt(answer);

        if (isNaN(count) || count <= 0) {
            console.log('❌ Masukkan angka yang valid (minimal 1)');
            rl.close();
            return;
        }

        console.log(`\nSedang membuat ${count} wallet Sui...\n`);
        const wallets = [];

        for (let i = 0; i < count; i++) {
            const wallet = createSuiWallet();
            wallets.push(wallet);
            console.log(`Wallet ${i + 1}: ${wallet.address}`);
        }

        saveWalletData(wallets);
        rl.close();
    });
}

main().catch(err => {
    console.error('Terjadi error:', err);
});