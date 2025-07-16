import { AirGapAngularCoreModule } from '@airgap/angular-core'
import { AirGapAngularNgRxModule } from '@airgap/angular-ngrx'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { LetDirective, PushPipe } from '@ngrx/component'
import { TranslateModule } from '@ngx-translate/core'
import { QRCodeModule } from 'angularx-qrcode'
import { MomentModule } from 'ngx-moment'
import { PipesModule } from '../pipes/pipes.module'
import { AccountEditPopoverComponent } from './account-edit-popover/account-edit-popover.component'
import { AmountComponent } from './amount/amount.component'
import { CardActionableComponent } from './card-actionable/card-actionable'
import { CurrencyItemComponent } from './currency-item/currency-item'
import { CurrentWalletGroupComponent } from './current-wallet-group/current-wallet-group.component'
import { DappPeerComponent } from './dapp-peer/dapp-peer.component'
import { DelegateActionPopoverComponent } from './delegate-action-popover/delegate-action-popover.component'
import { DelegateEditPopoverComponent } from './delegate-edit-popover/delegate-edit-popover.component'
import { EmptyStateComponent } from './empty-state/empty-state'
import { FeeComponent } from './fee/fee.component'
import { FromToComponent } from './from-to/from-to.component'
import { InteractionSelectionComponent } from './interaction-selection/interaction-selection.component'
import { OptimismERC20Form } from './optimism-erc20-form/optimism-erc20-form.component'
import { PermissionRequestComponent } from './permission-request/permission-request.component'
import { PortfolioItemComponent } from './portfolio-item/portfolio-item'
import { SignedTransactionComponent } from './signed-transaction/signed-transaction'
import { TezosDelegationCard } from './tezos-delegation-card/tezos-delegation-card'
import { TezosFAForm } from './tezos-fa-form/tezos-fa-form.component'
import { TezosSaplingContractForm } from './tezos-sapling-contract-form/tezos-sapling-contract-form.component'
import { TransactionItemComponent } from './transaction-item/transaction-item.component'
import { TransactionListComponent } from './transaction-list/transaction-list.component'
import { WalletconnectFromToComponent } from './walletconnect-from-to/walletconnect-from-to.component'
import { TransactionWarningComponent } from './transaction-warning/transaction-warning.component'

import { WidgetAccountExtendedDetails } from './widget-account-extended-details/widget-account-extended-details'
import { WidgetAccountSummary } from './widget-account-summary/widget-account-summary'
import { WidgetAccount } from './widget-account/widget-account'
import { WidgetAlert } from './widget-alert/widget-alert'
import { WidgetIconText } from './widget-icon-text/widget-icon-text'
import { WidgetInputDelay } from './widget-input-delay/widget-input-delay'
import { WidgetInputText } from './widget-input-text/widget-input-text'
import { WidgetOptionButtonGroup } from './widget-option-button-group/widget-option-button-group'
import { WidgetRewardList } from './widget-reward-list/widget-reward-list'
import { WidgetSelector } from './widget-selector/widget-selector'
import { MtPelerinComponent } from './mt-pelerin/mt-pelerin.component'
import { CurrencyItemLabelComponent } from './currency-item/label/currency-item-label'
import { FlipCardComponent } from './flip-card/flip-card.component'
import { FlipCardFrontComponent } from './flip-card/flip-card-front'
import { FlipCardBackComponent } from './flip-card/flip-card-back'

@NgModule({
  declarations: [
    PortfolioItemComponent,
    AccountEditPopoverComponent,
    AmountComponent,
    CardActionableComponent,
    EmptyStateComponent,
    SignedTransactionComponent,
    TezosDelegationCard,
    OptimismERC20Form,
    TezosFAForm,
    TezosSaplingContractForm,
    CurrencyItemComponent,
    CurrencyItemLabelComponent,
    DelegateActionPopoverComponent,
    DelegateEditPopoverComponent,
    PermissionRequestComponent,
    CurrentWalletGroupComponent,
    DappPeerComponent,
    TransactionListComponent,
    TransactionItemComponent,
    FeeComponent,
    FromToComponent,
    WalletconnectFromToComponent,
    TransactionWarningComponent,
    InteractionSelectionComponent,
    WidgetSelector,
    WidgetAccount,
    WidgetAccountSummary,
    WidgetAccountExtendedDetails,
    WidgetAlert,
    WidgetIconText,
    WidgetInputDelay,
    WidgetInputText,
    WidgetRewardList,
    WidgetOptionButtonGroup,
    MtPelerinComponent,
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    MomentModule,
    TranslateModule,
    QRCodeModule,
    AirGapAngularCoreModule,
    AirGapAngularNgRxModule,
    LetDirective,
    PushPipe
  ],
  exports: [
    PortfolioItemComponent,
    AmountComponent,
    AccountEditPopoverComponent,
    CardActionableComponent,
    EmptyStateComponent,
    SignedTransactionComponent,
    TezosDelegationCard,
    OptimismERC20Form,
    TezosFAForm,
    TezosSaplingContractForm,
    CurrencyItemComponent,
    CurrencyItemLabelComponent,
    DelegateEditPopoverComponent,
    PermissionRequestComponent,
    CurrentWalletGroupComponent,
    DappPeerComponent,
    WalletconnectFromToComponent,
    TransactionWarningComponent,
    InteractionSelectionComponent,
    TransactionListComponent,
    TransactionItemComponent,
    FeeComponent,
    FromToComponent,
    WidgetSelector,
    WidgetAccount,
    WidgetAccountSummary,
    WidgetAccountExtendedDetails,
    WidgetAlert,
    WidgetIconText,
    WidgetInputDelay,
    WidgetInputText,
    WidgetRewardList,
    WidgetOptionButtonGroup,
    MtPelerinComponent,
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ]
})
export class ComponentsModule {}
