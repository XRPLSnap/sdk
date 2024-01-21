import { IWalletAdapter } from './adapters/wallet-adapter.interface';

export class WalletClient {
    private readonly adapter: IWalletAdapter;

    constructor(adapter: IWalletAdapter) {
        this.adapter = adapter;
    }

    public async connect(): Promise<boolean> {
        try {
            await this.adapter.connect();
            return true;
        }catch(err) {
            console.error(err);
        }

        return false;
    }

    public sign(tx: any) {
        return this.adapter.sign(tx);
    }
}