import { Network } from "../enums/network";
import { IWalletAdapter } from "./wallet-adapter.interface";
import { Xumm } from 'xumm';

export class XamanAdapter implements IWalletAdapter {
    connect(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    address(): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    network(): Promise<{ network: Network; server: string; } | null> {
        throw new Error("Method not implemented.");
    }
    sign(txjson: Record<string, unknown>): Promise<{ tx_blob: string; hash: string; } | null> {
        throw new Error("Method not implemented.");
    }
    signAndSubmit(txjson: Record<string, unknown>): Promise<{ hash: string; } | null> {
        throw new Error("Method not implemented.");
    }
    submit(txblob: string): Promise<{ hash: string; } | null> {
        throw new Error("Method not implemented.");
    }
    
}