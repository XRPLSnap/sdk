import { Network } from "../enums/network";
import { IWalletAdapter } from "./wallet-adapter.interface";

declare var window: any;

export class XRPLSnapAdapter implements IWalletAdapter {
    private readonly SNAP_ENDPOINT = "npm:@xrpl-snap/snap";
  
    public constructor() {
        if (typeof window === 'undefined') {
            throw new Error('Wrong execution environment');
        }

        if (typeof window.ethereum === 'undefined') {
            throw new Error('Metamask is not installed.');
        }
    }
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