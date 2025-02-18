/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  STRK,
  STRK_Approval,
  STRK_DelegateChanged,
  STRK_DelegateVotesChanged,
  STRK_Transfer,
} from "generated";

STRK.Approval.handler(async ({ event, context }) => {
  const entity: STRK_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    amount: event.params.amount,
  };

  context.STRK_Approval.set(entity);
});

STRK.DelegateChanged.handler(async ({ event, context }) => {
  const entity: STRK_DelegateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    fromDelegate: event.params.fromDelegate,
    toDelegate: event.params.toDelegate,
  };

  context.STRK_DelegateChanged.set(entity);
});

STRK.DelegateVotesChanged.handler(async ({ event, context }) => {
  const entity: STRK_DelegateVotesChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegate: event.params.delegate,
    previousBalance: event.params.previousBalance,
    newBalance: event.params.newBalance,
  };

  context.STRK_DelegateVotesChanged.set(entity);
});

STRK.Transfer.handler(async ({ event, context }) => {
  const entity: STRK_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.STRK_Transfer.set(entity);
});
