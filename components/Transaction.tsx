import { ethers, utils } from "ethers";

interface props {
  sender: string;
  receiver: string;
  strEther: string;
}

export async function payWithMetamask({ sender, receiver, strEther }: props) {
  console.log(
    `payWithMetamask(receiver=${receiver}, sender=${sender}, strEther=${strEther})`
  );

  let ethereum = window.ethereum;

  // Request account access if needed
  await ethereum.enable();

  let provider = new ethers.providers.Web3Provider(ethereum);

  // Acccounts now exposed
  const params = [
    {
      from: sender,
      to: receiver,
      value: ethers.utils.parseUnits(strEther, "ether").toHexString(),
    },
  ];

  const transactionHash = await provider.send("eth_sendTransaction", params);
  console.log("transactionHash is " + transactionHash);
}
