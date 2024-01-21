import { Network } from "../enums/network";

export interface IWalletAdapter {
    connect(): Promise<boolean>
    address(): Promise<string | null>
    network(): Promise<{ network: Network, server:string } | null> // NETWORK: 'mainnet' | 'testnet' | 'devnet' | string
    sign(txjson: Record<string, unknown>): Promise<{ tx_blob: string; hash: string } | null>
    signAndSubmit(txjson: Record<string, unknown>): Promise<{ hash: string } | null>
    submit(txblob: string): Promise<{ hash: string } | null>
}