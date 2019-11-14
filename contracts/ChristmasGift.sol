pragma solidity ^0.5.0;

import '@openzeppelin/upgrades/contracts/Initializable.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Full.sol';
import '@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Mintable.sol';

contract LocalCoinSwapChristmasGift is Initializable, ERC721Full, ERC721Mintable {
  function initialize(address _initialMinter) public initializer {
    ERC721.initialize();
    ERC721Enumerable.initialize();
    ERC721Metadata.initialize("LocalCoinSwapChristmasGift", "LCSNFT");
    ERC721Mintable.initialize(_initialMinter);
  }
}
