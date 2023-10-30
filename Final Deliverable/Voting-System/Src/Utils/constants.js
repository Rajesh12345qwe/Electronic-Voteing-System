import { ethers } from "ethers";
import abi from "./voting.json";

export const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const votingContract = new ethers.Contract(contractAddress, abi, signer);
