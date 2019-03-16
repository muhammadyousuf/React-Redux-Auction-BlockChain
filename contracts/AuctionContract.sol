pragma solidity ^0.5.0;

contract AuctionContract {

// Model a Auction
   struct Auction {
      uint id;
      string auctionName;
      address payable beneficiary;
      address payable highestBidder;
      uint highestBid;
      bool ended;
      bool isDelivered;
      string firebaseHash;
   }


   // Events that will be emitted on changes.
   event HighestBidIncreased(address bidder, uint amount);
   event AuctionEnded(address winner, uint amount);
   event SuccessfulDelivered(address winner, uint amount);


   // Store auctions Count
  uint public auctionsCount;


      // Read/write Auctions
   mapping(uint => Auction) public auctions;


    constructor() public  {
    }

   function createAuction (string memory _name,string memory firebaseHash,uint minAmount) payable public{
       auctionsCount++;
       auctions[auctionsCount] = Auction(auctionsCount,_name, msg.sender,msg.sender,minAmount,false,false,firebaseHash);
   }

   function findWinner(uint _id) view public returns (address) {
       Auction memory auction = auctions[_id];


      require(auction.ended,"Auction is not ended yet.");

      return auction.highestBidder;
   }

   function bid(uint _id) public payable {
       Auction memory auction = auctions[_id];


       require(auction.beneficiary != msg.sender,"Owner cannot Bid");

       require(!auction.ended,"Auction already ended.");

       // If the bid is not higher, send the
       // money back.

       //require(auction.beneficiary != auction.highestBidder && msg.value > auction.highestBid,"Bid Must be greater than Min");

       require(msg.value > auction.highestBid,"There already is a higher bid.");

       if (auction.highestBid != 0 && auction.beneficiary != auction.highestBidder) {
           auction.highestBidder.transfer(auction.highestBid);
       }
       auction.highestBidder = msg.sender;
       auction.highestBid = msg.value;


      auctions[_id] = auction;

       emit HighestBidIncreased(msg.sender, msg.value);
   }

  function auctionEnd(uint _id) public {
      Auction memory auction = auctions[_id];

      // 1. Conditions
      require(!auction.ended, "auctionEnd has already been called.");

      require(msg.sender == auction.beneficiary, "Only owner can end this Auction");


      // 2. Effects
      auction.ended = true;
      emit AuctionEnded(auction.highestBidder, auction.highestBid);

      // 3. Interaction
      auction.beneficiary.transfer(auction.highestBid/2);

      auctions[_id] = auction;
  }
  function verifyDelivery(uint _id) public payable{
      Auction memory auction = auctions[_id];

      require(msg.sender == auction.highestBidder , "Only winner can execute this");

      auction.beneficiary.transfer(auction.highestBid/2);

      auction.isDelivered = true;


      emit SuccessfulDelivered(auction.highestBidder, auction.highestBid);

      auctions[_id] = auction;
  }

  function editAuction(uint _id,string memory _name) public {
    Auction memory auction = auctions[_id];

    //conditions
    require(msg.sender == auction.beneficiary, "Only owner can edit this Auction");

    //update
    auction.auctionName = _name;

    auctions[_id] = auction;
  }
}
