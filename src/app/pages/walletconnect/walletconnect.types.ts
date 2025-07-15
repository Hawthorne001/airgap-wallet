export enum Namespace {
  ETH = 'eip155',
  STELLAR = 'stellar'
}

interface Methods {
  [Namespace.ETH]: EthMethods
  [Namespace.STELLAR]: StellarMethods
}

export enum StellarMethods {
  STELLAR_SIGN_AND_SUBMIT_XDR = 'stellar_signAndSubmitXDR',
  STELLAR_SIGN_XDR = 'stellar_signXDR'
}

export interface JSONRPC<T = unknown, M extends string = string> {
  id: number
  jsonrpc: string
  method: M
  params: T[]
}

export interface WalletconnectMetadata {
  name?: string
  description?: string
  url?: string
  icon?: string
}

export interface WalletconnectPermissionRequest {
  type: 'permissionRequest'
  chains: string[]
  dAppMetadata: WalletconnectMetadata
  canOverrideChain?: boolean
  approve?: (accounts: string[]) => Promise<void>
  reject?: () => Promise<void>
}

export interface WalletconnectsignAndSubmitXDR<N extends Namespace = Namespace> {
  type: 'signAndSubmitXDR'
  version: number
  namespace: N
  chain: string
  request: {
    id: string
    method: Methods[N]
    params: { xdr: string }
  }
  respond?: () => Promise<void>
  cancel?: () => Promise<void>
}

export interface WalletconnectsignXDR<N extends Namespace = Namespace> {
  type: 'signXDR'
  version: number
  namespace: N
  chain: string
  request: {
    id: string
    method: Methods[N]
    params: { xdr: string }
  }
  respond?: () => Promise<void>
  cancel?: () => Promise<void>
}

export interface WalletconnectSignRequest<T = unknown, N extends Namespace = Namespace> {
  type: 'signRequest'
  version: number
  namespace: N
  chain: string
  request: {
    id: string
    method: Methods[N]
    params: T[]
  }
  respond?: () => Promise<void>
  cancel?: () => Promise<void>
}

export interface WalletconnectSwitchAccountRequest<T = unknown, N extends Namespace = Namespace> {
  type: 'switchAccountRequest'
  namespace: N
  account: string
  dAppMetadata: WalletconnectMetadata
  request: {
    id: string
    method: Methods[N]
    params: T[]
  }
  respond?: (chainId: number) => Promise<void>
  cancel?: () => Promise<void>
}

export interface WallectconnectUnsupportedRequest<N extends Namespace = Namespace> {
  type: 'unsupported'
  namespace?: N
  method?: Methods[N]
}

export type WalletconnectMessage =
  | WalletconnectPermissionRequest
  | WalletconnectSignRequest
  | WalletconnectSwitchAccountRequest
  | WallectconnectUnsupportedRequest
  | WalletconnectsignAndSubmitXDR
  | WalletconnectsignXDR

// Ethereum

export enum EthMethods {
  ETH_SENDTRANSACTION = 'eth_sendTransaction',
  PERSONAL_SIGN_REQUEST = 'personal_sign',
  ETH_SIGN_TYPED_DATA = 'eth_signTypedData',
  ETH_SIGN_TYPED_DATA_V3 = 'eth_signTypedData_v3',
  ETH_SIGN_TYPED_DATA_V4 = 'eth_signTypedData_v4',
  WALLET_SWITCH_ETHEREUM_CHAIN = 'wallet_switchEthereumChain',
  ETH_SIGN = 'eth_sign'
}

export interface EthTx {
  from: string
  to: string
  data: string
  gasLimit: string
  gasPrice: string
  value: string
  nonce: string
}

export interface SessionRequest {
  chainId?: number
  peerId: string
  peerMeta: {
    name: string
    description: string
    icons: string[]
    url: string
  }
}

export interface SwitchEthereumChain {
  chainId: string
}
