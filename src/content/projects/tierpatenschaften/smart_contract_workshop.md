---
title: "Digital Animal Sponsorships with NFTs (ERC-1155 Smart Contracts)"
link: https://github.com/realJanWeiss/zoo-sponsorship
tags: ["Solidity", "Next.js", "Hardhat", "OpenZeppelin"]
description: "Digital animal sponsorships with NFTs"
pubDate: '2025-06-30'
heroImage: './tierpatenschaften_01.png'
featured: false
---

## Einleitung

The aim of the project was to map the adoption process of a zoo using blockchain technology. This would enable visitors to easily become sponsors of an animal, and their sponsorship would be stored on the blockchain, making this certificate immutable and permanently visible to everyone. The project was carried out during the 2025 Summer School at the St. Pölten University of Applied Sciences (Now USTP) as part of the workshop "Smart Contracts: Token creation with ERC20" ([https://creativemediasummer.fhstp.ac.at/workshops/smart-contracts-token-creation-with-erc20](https://creativemediasummer.fhstp.ac.at/workshops/smart-contracts-token-creation-with-erc20)). After learning about blockchain and smart contracts, we were able to choose our own project for the week and develop it within the remaining one and a half days.

The workshop ran from June 23, 2025, to June 27, 2025, and this project was created by a group of three people: Jan Weiß, Vilmos Nagy, and me, Sebastian Zettl. Together, we came up with various ideas until we settled on animal sponsorship. We liked the idea, and it felt like a good scope for the given time frame of the project.

A basic explanation of the most important terms:

The blockchain is a decentralized database that stores data chronologically. Since it is decentralized, there is no central server, instead, everything is stored across multiple “nodes.” A smart contract is a programmed contract on the blockchain. It executes certain processes when the appropriate conditions are met. Tokens are digital assets that are stored on the blockchain. There are various standards for how a token can look. Relevant for us is the ERC-1155 standard, which makes it possible to sell multiple tokens of the same type. This allows several people to become sponsors of the same animal.

This also combines ERC-20 and ERC-712. ERC-20 is the standard for exchangeable tokens, which can best be compared to normal currencies. ERC-721, on the other hand, stands for non-exchangeable tokens, which are unique and can be used for things such as images or tickets. They are also called NFTs (non-fungible tokens).

## Procedure / Implementation

A variety of technologies were used for the project.

The most important is probably the Solidity language. This is a high-level, object-oriented programming language that was developed specifically for the development of smart contracts. Our animal sponsorship smart contract was also developed in Remix IDE, a special IDE tailored to smart contracts. Remix allows for easy testing of developed contracts in EVM (Ethereum Virtual Environments) before deploying them in the real blockchain.

I was partially involved in developing and learning about the smart contract. However, most of the contract was developed by Vilmos Nagy. We also used OpenZeppelin, which is an open-source framework. For example, it already provides standardized contracts for ERC-20 or ERC-1155, so you don't have to reinvent the wheel yourself.

Basic functions include that the owner of the contract, in this case the zoo itself, is the only one who can create tokens. Guests, i.e., other users, can then purchase one of the tokens provided by the zoo in order to adopt the animal, which means that the token also ends up in the guest's crypto wallet. The owners of the token can also return the animal. In addition, there are the standard functions that an ERC-1155 token must include, such as `balanceOf(address account, uint256 id)`, which returns the number of tokens owned by the address.

Furthermore, the IPFS (InterPlanetary File System) was also used. This is a decentralized location for storing files such as images or JSONs. We used Pinata, an IPFS storage provider, for this purpose. In Pinata, we stored the images for the animal NFTs plus JSONs with some information about the animals. When a person adopts an animal, an NFT of it ends up in their wallet and the image, plus the information in the JSON, is retrieved from Pinata and displayed in the adopter's crypto wallet.

![Appbild](./tierpatenschaften_06.png)

### Backend

In order to use the smart contract in conjunction with the frontend, we had to deploy it somewhere. After testing it in the local EVM, there were two options: using a crypto wallet, such as MetaMask, you can upload a smart contract to a test network to test it there. In our case, this test network would have been Sepolia.

However, we decided on the second option of deploying it in a local blockchain. I looked at the options and decided on Hardhat. With Hardhat, you can start a local blockchain on which you can deploy smart contracts.

I looked into this and read up on it. I installed Hardhat and stored the smart contract. With Hardhat, there were no problems compiling the contract once to get the ABI (Application Binary Interface) so that external applications could interact with it. Then, with the help of viem, a TypeScript/JavaScript library for interacting with the blockchain, I wrote a deployment script. This script places the contract on the local blockchain, retrieves the address where the contract is located, and writes it to a JSON file, which is read by the frontend so that it can send commands to this address.

### Frontend

Developing the smart contract was one of the most important parts, but we also wanted to develop a small frontend to better showcase the features. To do this, we created a simple frontend using Next.js, a React.js framework. Jan Weiß developed the basic look while the smart contract was being developed. I helped with the look of the website, but most of it was done by Jan Weiß. Most of my work on the frontend involved connecting to a crypto wallet and the contract.

I used Wagmi.js for the connection. It is a React Hook library that makes it easier to communicate with the blockchain. It allows for easier connection to a crypto wallet and offers various hooks that are used in the background to interact with the deployed contract.

The basic functions of our frontend include a main page showing all animals plus detail pages for each animal species. The main page provides a clear overview of all animals. The header features the logo of the “Happy Paws Zoo” as well as a login button that can be used to connect a crypto wallet.

![Appbild](./tierpatenschaften_01.png)

As soon as you click on an animal, you are taken to a detailed page with various information about that animal, just as you would find in a real zoo. Further down in the description, you then have the option of becoming a sponsor for the various animals.

![Appbild](./tierpatenschaften_02.png)

Specific animals are displayed in a card view I created, along with information on how many sponsorships are still available and whether the animal has already been adopted or is still available for adoption.

![Appbild](./tierpatenschaften_03.png)

If you want to adopt an animal, you first have to connect a crypto wallet, then you can confirm a transaction via the crypto wallet using the Adopt button. After a short wait, you will see that the animal has been adopted, and if you look in the wallet, you will see an NFT of the adopted animal along with a short description and a picture.

![Appbild](./tierpatenschaften_04.png)
![Appbild](./tierpatenschaften_05.png)

## Personal experiences and conclusion

The workshop was a very interesting experience for me. Before the workshop, I didn't really know anything about blockchain, except for the information you can find here and there on the internet. So the workshop was a great opportunity to learn more about this technology. I gained a better understanding of it, but also realized that I don't want to deal with this technology much more at the moment. In my opinion, there are currently still more problems, such as the fact that it consumes a lot of electricity, and the benefits of a permanent, chronologically ordered, and always accessible database do not yet outweigh this.

Probably the biggest challenge was getting this whole project up and running in less than a day and a half. It was a challenge, especially if you didn't have much experience with blockchain before.

However, as a team, we think we did a good job and are all really proud of our results.

In summary, I'm really glad I did this workshop.

## Links and sources

- GitHub-Repository: [https://github.com/realJanWeiss/zoo-sponsorship](https://github.com/realJanWeiss/zoo-sponsorship)
- Remix IDE: [https://remix-project.org/?lang=en](https://remix-project.org/?lang=en)
- OpenZeppelin: [https://www.openzeppelin.com/](https://www.openzeppelin.com/)
- Pinata: [https://pinata.cloud/](https://pinata.cloud/)
- Hardhat: [https://hardhat.org/](https://hardhat.org/)
- Viem: [https://viem.sh/](https://viem.sh/)
- Wagmi: [https://wagmi.sh/](https://wagmi.sh/)
- Next.js: [https://nextjs.org/](https://nextjs.org/)
