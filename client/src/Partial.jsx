import Check from "./Check";
import contractABI from "./artifacts/SupplyChain.json";

function App() {
  // Extract method signatures
  const partialABI = contractABI
    .filter((item) => item.type === "function")
    .map(({ name, inputs, type }) => ({
      name,
      inputs,
      type,
    }));

  return (
    <Check
      contractAddress="0x6a818990A9D42A656Bb473Ddd8713b002D49f85F"
      partialABI={partialABI}
    />
  );
}
