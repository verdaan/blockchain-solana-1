const anchor = require("@coral-xyz/anchor");

describe("solana-contracts", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  it("Is initialized!", async () => {
    // Add your test here.
    const program = anchor.workspace.SolanaContracts;
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
