import { Analytics } from './analytics'
// import * as provider from './providers/amplitude'
import * as provider from './providers/amplitude-browser'

const a = new Analytics(provider);

const log = async (funnel, journey, step, seq, account, event, props) => {
  await a.log(funnel, journey, step, seq, account, event, props)
}

const logPremium = async (account, coverKey, productKey, dollarValue) => {
  // funnel: Policy Purchase
  await a.logPremium(account, coverKey, productKey, dollarValue)
}

const logAddLiquidityRevenue = async (account, coverKey, productKey, dollarValue) => {
  await a.logAddLiquidityRevenue(account, coverKey, productKey, dollarValue)
}

const logPageLoadWebsite = async (pageName = "index") => {
  await a.logPageLoadWebsite(pageName)
}

const logButtonClick = async (buttonName, buttonDescription, eventData = {}, type = "click") => {
  await a.logButtonClick(buttonName, buttonDescription, eventData, type)
}

const logGesture = async (name, description, eventData = {}, type = "swipe") => {
  await a.logGesture(name, description, eventData, type)
}

const logPageLoad = async (account = "N/A", path) => {
  await a.logPageLoad(account , path)
}

const logOpenExternalPage = async (account = "N/A", path) => {
  await a.logOpenExternalPage(account, path)
}

const logOpenConnectionPopup = async (account = "N/A") => {
  await a.logOpenConnectionPopup(account)
}

const logCloseConnectionPopup = async (account = "N/A") => {
  await a.logCloseConnectionPopup(account)
}

const logWalletConnected = async (account) => {
  await a.logWalletConnected(account)
}

const logWalletDisconnected = async (account) => {
  await a.logWalletDisconnected(account)
}

const logViewAccountOnExplorer = async (account) => {
  await a.logViewAccountOnExplorer(account)
}

const logUnlimitedApprovalToggled = async (account, enabled) => {
  await a.logUnlimitedApprovalToggled(account, enabled)
}

const logCoverProductsSeach = async (account = "N/A", searchTerm) => {
  await a.logCoverProductsSeach(account, searchTerm)
}

const logCoverProductsSort = async (account = "N/A", sortOrder) => {
  await a.logCoverProductsSort(account , sortOrder)
}

const logCoverProductsViewChanged = async (account = "N/A", view) => {
  await a.logCoverProductsViewChanged(account, view)
}

const logPolicyPurchaseRulesAccepted = async (account = "N/A", coverKey, productKey) => {
  await a.logPolicyPurchaseRulesAccepted(account, coverKey, productKey)
}

const logPolicyPurchase = async ({ account, coverKey, productKey, coverFee, coverFeeCurrency, protection, protectionCurrency, coveragePeriod, referralCode, tx }) => {
  await a.logPolicyPurchase({ account, coverKey, productKey, coverFee, coverFeeCurrency, protection, protectionCurrency, coveragePeriod, referralCode, tx })
}

const logAddLiquidityRulesAccepted = async (account = "N/A", coverKey) => {
  await a.logAddLiquidityRulesAccepted(account, coverKey)
}

const logAddLiquidity = async ({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, tx }) => {
  await a.logAddLiquidity({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, tx })
}

const logRemoveLiquidityModalOpen = async (account, coverKey) => {
  await a.logRemoveLiquidityModalOpen(account, coverKey)
}

const logRemoveLiquidity = async ({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, exit, tx }) => {
  await a.logRemoveLiquidity({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, exit, tx })
}

const logReportIncidentRulesAccepted = async (account = "N/A", coverKey, productKey) => {
  await a.logReportIncidentRulesAccepted(account, coverKey, productKey)
}

const logIncidentReportStakeApproved = async (account, coverKey, productKey, stake, tx) => {
  await a.logIncidentReportStakeApproved(account, coverKey, productKey, stake, tx)
}

const logIncidentReported = async ({ account, coverKey, productKey, stake, incidentTitle, incidentDescription, incidentProofs, incidentDate, tx }) => {
  await a.logIncidentReported({ account, coverKey, productKey, stake, incidentTitle, incidentDescription, incidentProofs, incidentDate, tx })
}

const logIncidentDisputeStakeApproved = async (account, coverKey, productKey, stake, tx) => {
  await a.logIncidentDisputeStakeApproved(account, coverKey, productKey, stake, tx)
}

const logIncidentDisputed = async ({ account, coverKey, productKey, stake, disputeTitle, disputeDescription, disputeProofs, tx }) => {
  await a.logIncidentDisputed({ account, coverKey, productKey, stake, disputeTitle, disputeDescription, disputeProofs, tx })
}

const logBondLpTokenApproval = async (account, lpTokenAmount, tx) => {
  await a.logBondLpTokenApproval(account, lpTokenAmount, tx)
}

const logBondCreated = async (account, lpTokenAmount, receiveAmount, tx) => {
  await a.logBondCreated(account, lpTokenAmount, receiveAmount, tx)
}

const logBondClaimed = async (account, tx) => {
  await a.logBondClaimed(account, tx)
}

const logCoverProductRulesDownload = async (account = "N/A", coverKey, productKey) => {
  await a.logCoverProductRulesDownload(account, coverKey, productKey)
}

const logStakingPoolDepositPopupToggled = async (account, poolKey, opened) => {
  await a.logStakingPoolDepositPopupToggled(account, poolKey, opened)
}

const logStakingPoolDeposit = async (account, poolKey, stake, stakeCurrency, tx) => {
  await a.logStakingPoolDeposit(account, poolKey, stake, stakeCurrency, tx)
}

const logStakingPoolCollectPopupToggled = async (account, poolKey, opened) => {
  await a.logStakingPoolCollectPopupToggled(account, poolKey, opened)
}

const logStakingPoolWithdraw = async (account, poolKey, stake, stakeCurrency, tx) => {
  await a.logStakingPoolWithdraw(account, poolKey, stake, stakeCurrency, tx)
}

const logStakingPoolWithdrawRewards = async (account, poolKey, tx) => {
  await a.logStakingPoolWithdrawRewards(account, poolKey, tx)
}

export { 
  log, 
  logPremium,
  logAddLiquidityRevenue,
  logPageLoadWebsite,
  logButtonClick,
  logGesture,
  logPageLoad,
  logOpenExternalPage,
  logOpenConnectionPopup,
  logCloseConnectionPopup,
  logWalletConnected,
  logWalletDisconnected,
  logViewAccountOnExplorer,
  logUnlimitedApprovalToggled,
  logCoverProductsSeach,
  logCoverProductsSort,
  logCoverProductsViewChanged,
  logPolicyPurchaseRulesAccepted,
  logPolicyPurchase,
  logAddLiquidityRulesAccepted,
  logAddLiquidity,
  logRemoveLiquidityModalOpen,
  logRemoveLiquidity,
  logReportIncidentRulesAccepted,
  logIncidentReportStakeApproved,
  logIncidentReported,
  logIncidentDisputeStakeApproved,
  logIncidentDisputed,
  logBondLpTokenApproval,
  logBondCreated,
  logBondClaimed,
  logCoverProductRulesDownload,
  logStakingPoolDepositPopupToggled,
  logStakingPoolDeposit,
  logStakingPoolCollectPopupToggled,
  logStakingPoolWithdraw,
  logStakingPoolWithdrawRewards,
}
