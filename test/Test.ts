import assert from "assert";
import { 
  TestHelpers,
  STRK_Approval
} from "generated";
const { MockDb, STRK } = TestHelpers;

describe("STRK contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for STRK contract Approval event
  const event = STRK.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("STRK_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await STRK.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualSTRKApproval = mockDbUpdated.entities.STRK_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedSTRKApproval: STRK_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualSTRKApproval, expectedSTRKApproval, "Actual STRKApproval should be the same as the expectedSTRKApproval");
  });
});
