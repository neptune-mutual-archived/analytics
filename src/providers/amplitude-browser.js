import * as amplitude from '@amplitude/analytics-browser'

const events = {
  PREMIUM: 'PREMIUM',
  LIQUIDITY: 'LIQUIDITY'
}

let initialized = false;

const registerUser = (account) => {
  const identifyObj = new amplitude.Identify();
  identifyObj.setOnce('account', account);

  amplitude.identify(identifyObj);
}

const init = async (option) => {
  option = option || {}
 
  if(initialized) return;

  try {
    await amplitude.init(process.env.AMPLITUDE_API_KEY, {
      serverUrl: process.env.AMPLITUDE_SERVER_URL,
      serverZone: amplitude.Types.ServerZone.EU,
      ...option
    }).promise
    initialized = true;
  } catch(e) {
    initialized = false;
  }
}

const log = (funnel, journey, step, seq, account, event, props) => {
  init({}, account)

  if (props) {
    amplitude.track(event, { funnel, journey, step, seq, ...props })
    return
  }

  amplitude.track(event)
}

const logPremium = (account, coverKey, productKey, dollarValue) => {
  // funnel: Policy Purchase
  // journey: Purchase-Policy-Page-2
  // sequence: 9999
  // event: 'Closed/Won'

  init({}, account)

  const productId = productKey ? `${coverKey}/${productKey}` : coverKey

  amplitude.revenue(new amplitude.Revenue()
    .setProductId(productId)
    .setRevenueType(events.PREMIUM)
    .setPrice(dollarValue)
    .setQuantity(1)
  )
}

const logAddLiquidityRevenue = (account, coverKey, productKey, dollarValue) => {
  // funnel: Liquidity Addition
  // journey: Add-Liquidity-Page-2
  // sequence: 9999
  // event: 'Closed/Won'

  init();

  const productId = productKey ? `${coverKey}/${productKey}` : coverKey

  amplitude.revenue(new amplitude.Revenue()
    .setProductId(productId)
    .setRevenueType(events.LIQUIDITY)
    .setPrice(dollarValue))
}

const logPageLoadWebsite = (pageName = "index") => {
  init();

  const eventName = "page-load";
  try {
    amplitude.track(eventName, {
      pageName,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logButtonClick = (buttonName, buttonDescription, eventData = {}, type = "click") => {
  init();

  const eventName = `${buttonName} click`;

  try {
    amplitude.track(eventName, {
      buttonName,
      buttonDescription,
      type,
      ...eventData,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logGesture = (name, description, eventData = {}, type = "swipe") => {
  init();

  const eventName = `${name} ${type}`;

  try {
    amplitude.track(eventName, {
      name,
      description,
      type,
      ...eventData,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};


const logPageLoad = (account = "N/A", path) => {
  init();

  const eventName = "page-load";
  try {
    amplitude.track(eventName, {
      account,
      path
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logOpenExternalPage = (account = "N/A", path) => {
  init();

  const eventName = "open-external-page";
  try {
    amplitude.track(eventName, {
      account,
      path,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logOpenConnectionPopup = (account = "N/A") => {
  init();

  const eventName = "open-connection-popup";
  try {
    amplitude.track(eventName, {
      account,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logCloseConnectionPopup = (account = "N/A") => {
  init();

  const eventName = "close-connection-popup";
  try {
    amplitude.track(eventName, {
      account,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logWalletConnected = (account) => {
  init();
  registerUser(account);

  const eventName = "wallet-connected";
  try {
    amplitude.track(eventName, {
      account,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logWalletDisconnected = (account) => {
  init();

  const eventName = "wallet-disconnected";
  try {
    amplitude.track(eventName, {
      account,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logViewAccountOnExplorer = (account) => {
  init();

  const eventName = "view-account-on-explorer";
  try {
    amplitude.track(eventName, {
      account,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logUnlimitedApprovalToggled = (account, enabled) => {
  init();

  const eventName = "unlimited-approval-toggled";
  try {
    amplitude.track(eventName, {
      account,
      enabled
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logCoverProductsSeach = (account = "N/A", searchTerm) => {
  init();

  const eventName = "cover-products-search";
  try {
    amplitude.track(eventName, {
      account,
      searchTerm
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logCoverProductsSort = (account = "N/A", sortOrder) => {
  init();

  const eventName = "cover-products-sort";
  try {
    amplitude.track(eventName, {
      account,
      sortOrder
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logCoverProductsViewChanged = (account = "N/A", view) => {
  init();

  const eventName = "cover-products-view-changed";
  try {
    amplitude.track(eventName, {
      account,
      view
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logPolicyPurchaseRulesAccepted = (account = "N/A", coverKey, productKey) => {
  init();

  const eventName = "policy-purchase-rules-accepted";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      productKey
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logPolicyPurchase = ({ account, coverKey, productKey, coverFee, coverFeeCurrency, protection, protectionCurrency, coveragePeriod, referralCode, tx }) => {
  init();

  const eventName = "policy-purchased";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      productKey,
      details: {
        coverFee, 
        coverFeeCurrency, 
        protection, 
        protectionCurrency, 
        coveragePeriod, 
        referralCode, 
        tx
      }
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logAddLiquidityRulesAccepted = (account = "N/A", coverKey) => {
  init();

  const eventName = "add-liquidity-rules-accepted";
  try {
    amplitude.track(eventName, {
      account,
      coverKey
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logAddLiquidity = ({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, tx }) => {
  init();

  const eventName = "liquidity-added";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      details: {
        stake, 
        stakeCurrency, 
        liquidity, 
        liquidityCurrency, 
        tx
      }
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logRemoveLiquidityModalOpen = (account, coverKey) => {
  init();

  const eventName = "remove-liquidity-modal-open";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logRemoveLiquidity = ({ account, coverKey, stake, stakeCurrency, liquidity, liquidityCurrency, exit, tx }) => {
  init();

  const eventName = "liquidity-removed";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      details: {
        stake, 
        stakeCurrency, 
        liquidity, 
        liquidityCurrency, 
        exit, 
        tx
      }
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logReportIncidentRulesAccepted = (account = "N/A", coverKey, productKey) => {
  init();

  const eventName = "report-incident-rules-accepted";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      productKey
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logIncidentReportStakeApproved = (account, coverKey, productKey, stake, tx) => {
  init();

  const eventName = "incident-report-stake-approved";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      productKey,
      stake,
      tx
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logIncidentReported = ({ account, coverKey, productKey, stake, incidentTitle, incidentDescription, incidentProofs, incidentDate, tx }) => {
  init();

  const eventName = "incident-reported";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      productKey,
      details: {
        stake, 
        incidentTitle, 
        incidentDescription, 
        incidentProofs, 
        incidentDate, 
        tx
      }
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logIncidentDisputeStakeApproved = (account, coverKey, productKey, stake, tx) => {
  init();

  const eventName = "incident-dispute-stake-approved";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      productKey,
      stake,
      tx
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logIncidentDisputed = ({ account, coverKey, productKey, stake, disputeTitle, disputeDescription, disputeProofs, tx }) => {
  init();

  const eventName = "incident-disputed";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      productKey,
      details: {
        stake, 
        disputeTitle, 
        disputeDescription, 
        disputeProofs, 
        tx
      }
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logBondLpTokenApproval = (account, lpTokenAmount, tx) => {
  init();

  const eventName = "bond-lp-token-approved";
  try {
    amplitude.track(eventName, {
      account,
      lpTokenAmount,
      tx
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logBondCreated = (account, lpTokenAmount, receiveAmount, tx) => {
  init();

  const eventName = "bond-created";
  try {
    amplitude.track(eventName, {
      account,
      lpTokenAmount,
      receiveAmount,
      tx
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logBondClaimed = (account, tx) => {
  init();

  const eventName = "bond-claimed";
  try {
    amplitude.track(eventName, {
      account,
      tx
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logCoverProductRulesDownload = (account = "N/A", coverKey, productKey) => {
  init();

  const eventName = "cover-product-rules-downloaded";
  try {
    amplitude.track(eventName, {
      account,
      coverKey,
      productKey
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logStakingPoolDepositPopupToggled = (account, poolKey, opened) => {
  init();

  const eventName = "staking-pool-deposit-popup-toggled";
  try {
    amplitude.track(eventName, {
      account,
      poolKey,
      opened
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logStakingPoolDeposit = (account, poolKey, stake, stakeCurrency, tx) => {
  init();

  const eventName = "staking-pool-deposited";
  try {
    amplitude.track(eventName, {
      account,
      poolKey,
      stake,
      stakeCurrency,
      tx
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logStakingPoolCollectPopupToggled = (account, poolKey, opened) => {
  init();

  const eventName = "staking-pool-collect-popup-toggled";
  try {
    amplitude.track(eventName, {
      account,
      poolKey,
      opened
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logStakingPoolWithdraw = (account, poolKey, stake, stakeCurrency, tx) => {
  init();

  const eventName = "staking-pool-withdrawn";
  try {
    amplitude.track(eventName, {
      account,
      poolKey,
      details: {
        stake, 
        stakeCurrency, 
        tx
      }
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

const logStakingPoolWithdrawRewards = (account, poolKey, tx) => {
  init();

  const eventName = "staking-pool-rewards-withdrawn";
  try {
    amplitude.track(eventName, {
      account,
      poolKey,
      tx
    });
  } catch (e) {
    console.log(`Error in logging ${eventName} event: `, e);
  }
};

export { 
  log, 
  logAddLiquidityRevenue, 
  logPremium, 
  logWalletConnected, 
  logPageLoadWebsite, 
  logButtonClick, 
  logGesture,
  logPageLoad,
  logOpenExternalPage,
  logOpenConnectionPopup,
  logCloseConnectionPopup,
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
