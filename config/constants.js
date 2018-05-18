
const twilioCredentials = {
    "TwilioNumber" : "+19149337525",
    "Authy" : "BT3ybwzIHaDiNghYsUCbnajVUk93AxUf",
    "ACCOUNTSID"   : "ACb76e2a9503584eee8836854bc8bb40eb",
    "AUTHTOKEN"    : "1e41430304caa28891a9577f0954eaff"

};
const ETHnodeURL = {
    
    ETHdecimals : 1000000000000000000,

    // for ETH geth  main net
    // connectETHnodeWS : "ws://103.201.142.41:8546",

    // server geth  for local development
    connectETHnodeWS : "ws://103.201.142.41:8556",
    connectETHnodeHTTP : "http://103.201.142.41:8556",

    // server geth running
    // connectETHnodeWS : "ws://198.54.119.56:8546",
    // connectETHnodeHTTP : "http://198.54.119.56:8546"

    //local host testrpc
    // connectETHnodeWS : "https://ropsten.infura.io/your-api-key",
    // connectETHnodeHTTP : "https://ropsten.infura.io/your-api-key"

    // Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
};

const gmailSMTPCredentials = {
    // "type": "SMTP",
    // "service": "Gmail",
    // "host": "smtp.gmail.com",
    // "port": 587,
    // "secure": true,
    // "username": "cntctspprtmarket@gmail.com",
    // "password": "PennyB@$e123"
    "type": "SMTP",
    "host": "smtp.zoho.com",
    "port": 465,
    "secure": true,
     "username": "support@kryptual.com",
    "password": "boosters"
};

const smsCredentials = {
    number:'4755292423'
};

const rpiCredentials = {
    baseUrl:'http://proxy7.remote-iot.com:11804'
};

const pagination = {
    itemPerPage:9
};

const imagePaths = {
    "user": "/../../public/images/user/avatar",
    "url": "/images/user/avatar",
    "defaultUserImage" : './images/user/avtar.png'
};

const coinPayment = {
    key : "b175d3557680c61449dc851d23adb062b79ebcfc3e0f93f1472d8e0878649b3f",
    secret : "62BA78ED5ad8dE6eEC0635aec2e80d64d70A156bc31c103335539d830f1cB0f0",
    autoIpn : true,
    ipnTime : true
};
const dummyAbi ={
  "contracts" : {
            "safeMathLib" : {
                "abiConstructor" : "",
                "addr" : "",
                "abi" : [
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "times",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "a"
                            },
                            {
                                "type" : "uint256",
                                "name" : "b"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "plus",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "a"
                            },
                            {
                                "type" : "uint256",
                                "name" : "b"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "divides",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "a"
                            },
                            {
                                "type" : "uint256",
                                "name" : "b"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "minus",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "a"
                            },
                            {
                                "type" : "uint256",
                                "name" : "b"
                            }
                        ],
                        "constant" : false
                    }
                ],
                "bin" : "6060604052341561000c57fe5b5b6101a68061001c6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631d3b9edf811461005b57806366098d4f1461007b578063a12f69e01461009b578063f4f3bdc1146100bb575bfe5b6100696004356024356100db565b60408051918252519081900360200190f35b61006960043560243561010a565b60408051918252519081900360200190f35b610069600435602435610124565b60408051918252519081900360200190f35b610069600435602435610163565b60408051918252519081900360200190f35b60008282028315806100f757508284828115156100f457fe5b04145b15156100ff57fe5b8091505b5092915050565b6000828201838110156100ff57fe5b8091505b5092915050565b60008080831161013057fe5b828481151561013b57fe5b049050828481151561014957fe5b0681840201841415156100ff57fe5b8091505b5092915050565b60008282111561016f57fe5b508082035b929150505600a165627a7a723058201a261de6b8469907c1423ca347a406270825f00ba42e650928ccf03512ffe07c0029",
                "src" : "// Created using ICO Wizard https://github.com/oraclesorg/ico-wizard by Oracles Network \n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\npragma solidity ^0.4.6;\n\n/**\n * Safe unsigned safe math.\n *\n * https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736#.750gwtwli\n *\n * Originally from https://raw.githubusercontent.com/AragonOne/zeppelin-solidity/master/contracts/SafeMathLib.sol\n *\n * Maintained here until merged to mainline zeppelin-solidity.\n *\n */\nlibrary SafeMathLibExt {\n\n  function times(uint a, uint b) returns (uint) {\n    uint c = a * b;\n    assert(a == 0 || c / a == b);\n    return c;\n  }\n\n  function divides(uint a, uint b) returns (uint) {\n    assert(b > 0);\n    uint c = a / b;\n    assert(a == b * c + a % b);\n    return c;\n  }\n\n  function minus(uint a, uint b) returns (uint) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  function plus(uint a, uint b) returns (uint) {\n    uint c = a + b;\n    assert(c>=a);\n    return c;\n  }\n\n}\n"
            },
            "finalizeAgent" : {
                "abiConstructor" : [],
                "addr" : [],
                "abi" : [
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "finalizeCrowdsale",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isFinalizeAgent",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isSane",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "crowdsale",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "token",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "constructor",
                        "payable" : false,
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "_token"
                            },
                            {
                                "type" : "address",
                                "name" : "_crowdsale"
                            }
                        ]
                    }
                ],
                "bin" : "6060604052341561000c57fe5b6040516040806109ce8339810160405280516020909101515b60008054600160a060020a03808516600160a060020a03199283161790925560018054928416929091169190911790555b50505b610966806100686000396000f300606060405263ffffffff60e060020a6000350416630bf318a3811461004d578063614cb9041461005f57806382771c8e146100835780639c1e03a0146100a7578063fc0c546a146100d3575bfe5b341561005557fe5b61005d6100ff565b005b341561006757fe5b61006f61088a565b604080519115158252519081900360200190f35b341561008b57fe5b61006f610890565b604080519115158252519081900360200190f35b34156100af57fe5b6100b761091c565b60408051600160a060020a039092168252519081900360200190f35b34156100db57fe5b6100b761092b565b60408051600160a060020a039092168252519081900360200190f35b60015460009081908190819081908190819033600160a060020a0390811691161461012a5760006000fd5b600154604080516000602091820181905282517f518ab2a80000000000000000000000000000000000000000000000000000000081529251600160a060020a039094169363518ab2a89360048082019493918390030190829087803b151561018e57fe5b6102c65a03f1151561019c57fe5b505060405151975060009650505b600060009054906101000a9004600160a060020a0316600160a060020a031663c33105176000604051602001526040518163ffffffff1660e060020a028152600401809050602060405180830381600087803b151561020557fe5b6102c65a03f1151561021357fe5b50506040515160ff8816101590506105535760008054604080516020908101849052815160e060020a637386f0a702815260ff8b1660048201529151600160a060020a039093169363aef37284938593637386f0a7936024808301949193928390030190829087803b151561028457fe5b6102c65a03f1151561029257fe5b505050604051805190506000604051602001526040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15156102ec57fe5b6102c65a03f115156102fa57fe5b5050604080518051600080546020938401829052845160e060020a637386f0a702815260ff8d1660048201529451929950600160a060020a03169450630f7c932a938593637386f0a79360248084019492939192918390030190829087803b151561036157fe5b6102c65a03f1151561036f57fe5b505050604051805190506000604051602001526040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15156103c957fe5b6102c65a03f115156103d757fe5b505060405151935050600084111561054757606483600a0a8589028115156103fb57fe5b0481151561040557fe5b0494508673__:SafeMathLibExt_______________________6366098d4f9091876000604051602001526040518363ffffffff1660e060020a028152600401808381526020018281526020019250505060206040518083038186803b151561046957fe5b6102c65a03f4151561047757fe5b5050604080518051600080546020938401829052845160e060020a637386f0a702815260ff8d1660048201529451929c50600160a060020a031694506340c10f19938593637386f0a79360248084019492939192918390030190829087803b15156104de57fe5b6102c65a03f115156104ec57fe5b505060408051805160e060020a63ffffffff8616028252600160a060020a03166004820152602481018a905290516044808301935060009282900301818387803b151561053557fe5b6102c65a03f1151561054357fe5b5050505b5b6001909501946101aa565b600091505b600060009054906101000a9004600160a060020a0316600160a060020a031663c33105176000604051602001526040518163ffffffff1660e060020a028152600401809050602060405180830381600087803b15156105b357fe5b6102c65a03f115156105c157fe5b50506040515160ff8416101590506108195760008054604080516020908101849052815160e060020a637386f0a702815260ff871660048201529151600160a060020a039093169363338f43a0938593637386f0a7936024808301949193928390030190829087803b151561063257fe5b6102c65a03f1151561064057fe5b505050604051805190506000604051602001526040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b151561069a57fe5b6102c65a03f115156106a857fe5b505060405151915050600081111561080d5760408051600060209182015281517f66098d4f000000000000000000000000000000000000000000000000000000008152600481018a905260248101849052915173__:SafeMathLibExt_______________________926366098d4f926044808301939192829003018186803b151561072f57fe5b6102c65a03f4151561073d57fe5b5050604080518051600080546020938401829052845160e060020a637386f0a702815260ff891660048201529451929c50600160a060020a031694506340c10f19938593637386f0a79360248084019492939192918390030190829087803b15156107a457fe5b6102c65a03f115156107b257fe5b505060408051805160e060020a63ffffffff8616028252600160a060020a031660048201526024810186905290516044808301935060009282900301818387803b15156107fb57fe5b6102c65a03f1151561080957fe5b5050505b5b600190910190610558565b60008054604080517f5f412d4f0000000000000000000000000000000000000000000000000000000081529051600160a060020a0390921692635f412d4f9260048084019382900301818387803b151561086f57fe5b6102c65a03f1151561087d57fe5b5050505b50505050505050565b60015b90565b6000805460408051602090810184905281517fd1f276d30000000000000000000000000000000000000000000000000000000081529151600160a060020a0330811694169263d1f276d392600480830193919282900301818887803b15156108f457fe5b6102c65a03f1151561090257fe5b50505060405180519050600160a060020a03161490505b90565b600154600160a060020a031681565b600054600160a060020a0316815600a165627a7a7230582051d20d08174ef2e883de5661d57918327dd6e972ed63774305fe9727ef20fd220029",
                "src" : "// Created using ICO Wizard https://github.com/oraclesorg/ico-wizard by Oracles Network \npragma solidity ^0.4.11;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  uint256 public totalSupply;\n  function balanceOf(address who) public constant returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n// Temporarily have SafeMath here until all contracts have been migrated to SafeMathLib version from OpenZeppelin\n\n\n\n\n/**\n * Math operations with safety checks\n */\ncontract SafeMath {\n  function safeMul(uint a, uint b) internal returns (uint) {\n    uint c = a * b;\n    assert(a == 0 || c / a == b);\n    return c;\n  }\n\n  function safeDiv(uint a, uint b) internal returns (uint) {\n    assert(b > 0);\n    uint c = a / b;\n    assert(a == b * c + a % b);\n    return c;\n  }\n\n  function safeSub(uint a, uint b) internal returns (uint) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  function safeAdd(uint a, uint b) internal returns (uint) {\n    uint c = a + b;\n    assert(c>=a && c>=b);\n    return c;\n  }\n\n  function max64(uint64 a, uint64 b) internal constant returns (uint64) {\n    return a >= b ? a : b;\n  }\n\n  function min64(uint64 a, uint64 b) internal constant returns (uint64) {\n    return a < b ? a : b;\n  }\n\n  function max256(uint256 a, uint256 b) internal constant returns (uint256) {\n    return a >= b ? a : b;\n  }\n\n  function min256(uint256 a, uint256 b) internal constant returns (uint256) {\n    return a < b ? a : b;\n  }\n\n}\n\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address public owner;\n\n\n  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  function Ownable() {\n    owner = msg.sender;\n  }\n\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(msg.sender == owner);\n    _;\n  }\n\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address newOwner) onlyOwner public {\n    require(newOwner != address(0));\n    OwnershipTransferred(owner, newOwner);\n    owner = newOwner;\n  }\n\n}\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Safe unsigned safe math.\n *\n * https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736#.750gwtwli\n *\n * Originally from https://raw.githubusercontent.com/AragonOne/zeppelin-solidity/master/contracts/SafeMathLib.sol\n *\n * Maintained here until merged to mainline zeppelin-solidity.\n *\n */\nlibrary SafeMathLibExt {\n\n  function times(uint a, uint b) returns (uint) {\n    uint c = a * b;\n    assert(a == 0 || c / a == b);\n    return c;\n  }\n\n  function divides(uint a, uint b) returns (uint) {\n    assert(b > 0);\n    uint c = a / b;\n    assert(a == b * c + a % b);\n    return c;\n  }\n\n  function minus(uint a, uint b) returns (uint) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  function plus(uint a, uint b) returns (uint) {\n    uint c = a + b;\n    assert(c>=a);\n    return c;\n  }\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n/*\n * Haltable\n *\n * Abstract contract that allows children to implement an\n * emergency stop mechanism. Differs from Pausable by causing a throw when in halt mode.\n *\n *\n * Originally envisioned in FirstBlood ICO contract.\n */\ncontract Haltable is Ownable {\n  bool public halted;\n\n  modifier stopInEmergency {\n    if (halted) throw;\n    _;\n  }\n\n  modifier stopNonOwnersInEmergency {\n    if (halted && msg.sender != owner) throw;\n    _;\n  }\n\n  modifier onlyInEmergency {\n    if (!halted) throw;\n    _;\n  }\n\n  // called by the owner on emergency, triggers stopped state\n  function halt() external onlyOwner {\n    halted = true;\n  }\n\n  // called by the owner on end of emergency, returns to normal state\n  function unhalt() external onlyOwner onlyInEmergency {\n    halted = false;\n  }\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Interface for defining crowdsale pricing.\n */\ncontract PricingStrategy {\n\n  /** Interface declaration. */\n  function isPricingStrategy() public constant returns (bool) {\n    return true;\n  }\n\n  /** Self check if all references are correctly set.\n   *\n   * Checks that pricing strategy matches crowdsale parameters.\n   */\n  function isSane(address crowdsale) public constant returns (bool) {\n    return true;\n  }\n\n  /**\n   * @dev Pricing tells if this is a presale purchase or not.\n     @param purchaser Address of the purchaser\n     @return False by default, true if a presale purchaser\n   */\n  function isPresalePurchase(address purchaser) public constant returns (bool) {\n    return false;\n  }\n\n  /**\n   * When somebody tries to buy tokens for X eth, calculate how many tokens they get.\n   *\n   *\n   * @param value - What is the value of the transaction send in as wei\n   * @param tokensSold - how much tokens have been sold this far\n   * @param weiRaised - how much money has been raised this far in the main token sale - this number excludes presale\n   * @param msgSender - who is the investor of this transaction\n   * @param decimals - how many decimal units the token has\n   * @return Amount of tokens the investor receives\n   */\n  function calculatePrice(uint value, uint weiRaised, uint tokensSold, address msgSender, uint decimals) public constant returns (uint tokenAmount);\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Finalize agent defines what happens at the end of succeseful crowdsale.\n *\n * - Allocate tokens for founders, bounties and community\n * - Make tokens transferable\n * - etc.\n */\ncontract FinalizeAgent {\n\n  function isFinalizeAgent() public constant returns(bool) {\n    return true;\n  }\n\n  /** Return true if we can run finalizeCrowdsale() properly.\n   *\n   * This is a safety check function that doesn't allow crowdsale to begin\n   * unless the finalizer has been set up properly.\n   */\n  function isSane() public constant returns (bool);\n\n  /** Called once by crowdsale finalize() if the sale was success. */\n  function finalizeCrowdsale();\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n\n\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public constant returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\n\n/**\n * A token that defines fractional units as decimals.\n */\ncontract FractionalERC20Ext is ERC20 {\n\n  uint public decimals;\n  uint public minCap;\n\n}\n\n\n\n/**\n * Abstract base contract for token sales.\n *\n * Handle\n * - start and end dates\n * - accepting investments\n * - minimum funding goal and refund\n * - various statistics during the crowdfund\n * - different pricing strategies\n * - different investment policies (require server side customer id, allow only whitelisted addresses)\n *\n */\ncontract CrowdsaleExt is Haltable {\n\n  /* Max investment count when we are still allowed to change the multisig address */\n  uint public MAX_INVESTMENTS_BEFORE_MULTISIG_CHANGE = 5;\n\n  using SafeMathLibExt for uint;\n\n  /* The token we are selling */\n  FractionalERC20Ext public token;\n\n  /* How we are going to price our offering */\n  PricingStrategy public pricingStrategy;\n\n  /* Post-success callback */\n  FinalizeAgent public finalizeAgent;\n\n  /* tokens will be transfered from this address */\n  address public multisigWallet;\n\n  /* if the funding goal is not reached, investors may withdraw their funds */\n  uint public minimumFundingGoal;\n\n  /* the UNIX timestamp start date of the crowdsale */\n  uint public startsAt;\n\n  /* the UNIX timestamp end date of the crowdsale */\n  uint public endsAt;\n\n  /* the number of tokens already sold through this contract*/\n  uint public tokensSold = 0;\n\n  /* How many wei of funding we have raised */\n  uint public weiRaised = 0;\n\n  /* Calculate incoming funds from presale contracts and addresses */\n  uint public presaleWeiRaised = 0;\n\n  /* How many distinct addresses have invested */\n  uint public investorCount = 0;\n\n  /* How much wei we have returned back to the contract after a failed crowdfund. */\n  uint public loadedRefund = 0;\n\n  /* How much wei we have given back to investors.*/\n  uint public weiRefunded = 0;\n\n  /* Has this crowdsale been finalized */\n  bool public finalized;\n\n  /* Do we need to have unique contributor id for each customer */\n  bool public requireCustomerId;\n\n  bool public isWhiteListed;\n\n  address[] public joinedCrowdsales;\n  uint public joinedCrowdsalesLen = 0;\n\n  address public lastCrowdsale;\n\n  /**\n    * Do we verify that contributor has been cleared on the server side (accredited investors only).\n    * This method was first used in FirstBlood crowdsale to ensure all contributors have accepted terms on sale (on the web).\n    */\n  bool public requiredSignedAddress;\n\n  /* Server side address that signed allowed contributors (Ethereum addresses) that can participate the crowdsale */\n  address public signerAddress;\n\n  /** How much ETH each address has invested to this crowdsale */\n  mapping (address => uint256) public investedAmountOf;\n\n  /** How much tokens this crowdsale has credited for each investor address */\n  mapping (address => uint256) public tokenAmountOf;\n\n  struct WhiteListData {\n    bool status;\n    uint minCap;\n    uint maxCap;\n  }\n\n  //is crowdsale updatable\n  bool public isUpdatable;\n\n  /** Addresses that are allowed to invest even before ICO offical opens. For testing, for ICO partners, etc. */\n  mapping (address => WhiteListData) public earlyParticipantWhitelist;\n\n  /** This is for manul testing for the interaction from owner wallet. You can set it to any value and inspect this in blockchain explorer to see that crowdsale interaction works. */\n  uint public ownerTestValue;\n\n  /** State machine\n   *\n   * - Preparing: All contract initialization calls and variables have not been set yet\n   * - Prefunding: We have not passed start time yet\n   * - Funding: Active crowdsale\n   * - Success: Minimum funding goal reached\n   * - Failure: Minimum funding goal not reached before ending time\n   * - Finalized: The finalized has been called and succesfully executed\n   * - Refunding: Refunds are loaded on the contract for reclaim.\n   */\n  enum State{Unknown, Preparing, PreFunding, Funding, Success, Failure, Finalized, Refunding}\n\n  // A new investment was made\n  event Invested(address investor, uint weiAmount, uint tokenAmount, uint128 customerId);\n\n  // Refund was processed for a contributor\n  event Refund(address investor, uint weiAmount);\n\n  // The rules were changed what kind of investments we accept\n  event InvestmentPolicyChanged(bool newRequireCustomerId, bool newRequiredSignedAddress, address newSignerAddress);\n\n  // Address early participation whitelist status changed\n  event Whitelisted(address addr, bool status);\n\n  // Crowdsale start time has been changed\n  event StartsAtChanged(uint newStartsAt);\n\n  // Crowdsale end time has been changed\n  event EndsAtChanged(uint newEndsAt);\n\n  function CrowdsaleExt(address _token, PricingStrategy _pricingStrategy, address _multisigWallet, uint _start, uint _end, uint _minimumFundingGoal, bool _isUpdatable, bool _isWhiteListed) {\n\n    owner = msg.sender;\n\n    token = FractionalERC20Ext(_token);\n\n    setPricingStrategy(_pricingStrategy);\n\n    multisigWallet = _multisigWallet;\n    if(multisigWallet == 0) {\n        throw;\n    }\n\n    if(_start == 0) {\n        throw;\n    }\n\n    startsAt = _start;\n\n    if(_end == 0) {\n        throw;\n    }\n\n    endsAt = _end;\n\n    // Don't mess the dates\n    if(startsAt >= endsAt) {\n        throw;\n    }\n\n    // Minimum funding goal can be zero\n    minimumFundingGoal = _minimumFundingGoal;\n\n    isUpdatable = _isUpdatable;\n\n    isWhiteListed = _isWhiteListed;\n  }\n\n  /**\n   * Don't expect to just send in money and get tokens.\n   */\n  function() payable {\n    throw;\n  }\n\n  /**\n   * Make an investment.\n   *\n   * Crowdsale must be running for one to invest.\n   * We must have not pressed the emergency brake.\n   *\n   * @param receiver The Ethereum address who receives the tokens\n   * @param customerId (optional) UUID v4 to track the successful payments on the server side\n   *\n   */\n  function investInternal(address receiver, uint128 customerId) stopInEmergency private {\n\n    // Determine if it's a good time to accept investment from this participant\n    if(getState() == State.PreFunding) {\n      // Are we whitelisted for early deposit\n      throw;\n    } else if(getState() == State.Funding) {\n      // Retail participants can only come in when the crowdsale is running\n      // pass\n      if(isWhiteListed) {\n        if(!earlyParticipantWhitelist[receiver].status) {\n          throw;\n        }\n      }\n    } else {\n      // Unwanted state\n      throw;\n    }\n\n    uint weiAmount = msg.value;\n\n    // Account presale sales separately, so that they do not count against pricing tranches\n    uint tokenAmount = pricingStrategy.calculatePrice(weiAmount, weiRaised - presaleWeiRaised, tokensSold, msg.sender, token.decimals());\n\n    if(tokenAmount == 0) {\n      // Dust transaction\n      throw;\n    }\n\n    if(isWhiteListed) {\n      if(tokenAmount < earlyParticipantWhitelist[receiver].minCap && tokenAmountOf[receiver] == 0) {\n        // tokenAmount < minCap for investor\n        throw;\n      }\n      if(tokenAmount > earlyParticipantWhitelist[receiver].maxCap) {\n        // tokenAmount > maxCap for investor\n        throw;\n      }\n\n      // Check that we did not bust the investor's cap\n      if (isBreakingInvestorCap(receiver, tokenAmount)) {\n        throw;\n      }\n    } else {\n      if(tokenAmount < token.minCap() && tokenAmountOf[receiver] == 0) {\n        throw;\n      }\n    }\n\n    if(investedAmountOf[receiver] == 0) {\n       // A new investor\n       investorCount++;\n    }\n\n    // Update investor\n    investedAmountOf[receiver] = investedAmountOf[receiver].plus(weiAmount);\n    tokenAmountOf[receiver] = tokenAmountOf[receiver].plus(tokenAmount);\n\n    // Update totals\n    weiRaised = weiRaised.plus(weiAmount);\n    tokensSold = tokensSold.plus(tokenAmount);\n\n    if(pricingStrategy.isPresalePurchase(receiver)) {\n        presaleWeiRaised = presaleWeiRaised.plus(weiAmount);\n    }\n\n    // Check that we did not bust the cap\n    if(isBreakingCap(weiAmount, tokenAmount, weiRaised, tokensSold)) {\n      throw;\n    }\n\n    assignTokens(receiver, tokenAmount);\n\n    // Pocket the money\n    if(!multisigWallet.send(weiAmount)) throw;\n\n    if (isWhiteListed) {\n      uint num = 0;\n      for (var i = 0; i < joinedCrowdsalesLen; i++) {\n        if (this == joinedCrowdsales[i]) \n          num = i;\n      }\n\n      if (num + 1 < joinedCrowdsalesLen) {\n        for (var j = num + 1; j < joinedCrowdsalesLen; j++) {\n          CrowdsaleExt crowdsale = CrowdsaleExt(joinedCrowdsales[j]);\n          crowdsale.updateEarlyParicipantWhitelist(msg.sender, this, tokenAmount);\n        }\n      }\n    }\n\n    // Tell us invest was success\n    Invested(receiver, weiAmount, tokenAmount, customerId);\n  }\n\n  /**\n   * Preallocate tokens for the early investors.\n   *\n   * Preallocated tokens have been sold before the actual crowdsale opens.\n   * This function mints the tokens and moves the crowdsale needle.\n   *\n   * Investor count is not handled; it is assumed this goes for multiple investors\n   * and the token distribution happens outside the smart contract flow.\n   *\n   * No money is exchanged, as the crowdsale team already have received the payment.\n   *\n   * @param fullTokens tokens as full tokens - decimal places added internally\n   * @param weiPrice Price of a single full token in wei\n   *\n   */\n  function preallocate(address receiver, uint fullTokens, uint weiPrice) public onlyOwner {\n\n    uint tokenAmount = fullTokens * 10**token.decimals();\n    uint weiAmount = weiPrice * fullTokens; // This can be also 0, we give out tokens for free\n\n    weiRaised = weiRaised.plus(weiAmount);\n    tokensSold = tokensSold.plus(tokenAmount);\n\n    investedAmountOf[receiver] = investedAmountOf[receiver].plus(weiAmount);\n    tokenAmountOf[receiver] = tokenAmountOf[receiver].plus(tokenAmount);\n\n    assignTokens(receiver, tokenAmount);\n\n    // Tell us invest was success\n    Invested(receiver, weiAmount, tokenAmount, 0);\n  }\n\n  /**\n   * Allow anonymous contributions to this crowdsale.\n   */\n  function investWithSignedAddress(address addr, uint128 customerId, uint8 v, bytes32 r, bytes32 s) public payable {\n     bytes32 hash = sha256(addr);\n     if (ecrecover(hash, v, r, s) != signerAddress) throw;\n     if(customerId == 0) throw;  // UUIDv4 sanity check\n     investInternal(addr, customerId);\n  }\n\n  /**\n   * Track who is the customer making the payment so we can send thank you email.\n   */\n  function investWithCustomerId(address addr, uint128 customerId) public payable {\n    if(requiredSignedAddress) throw; // Crowdsale allows only server-side signed participants\n    if(customerId == 0) throw;  // UUIDv4 sanity check\n    investInternal(addr, customerId);\n  }\n\n  /**\n   * Allow anonymous contributions to this crowdsale.\n   */\n  function invest(address addr) public payable {\n    if(requireCustomerId) throw; // Crowdsale needs to track participants for thank you email\n    if(requiredSignedAddress) throw; // Crowdsale allows only server-side signed participants\n    investInternal(addr, 0);\n  }\n\n  /**\n   * Invest to tokens, recognize the payer and clear his address.\n   *\n   */\n  function buyWithSignedAddress(uint128 customerId, uint8 v, bytes32 r, bytes32 s) public payable {\n    investWithSignedAddress(msg.sender, customerId, v, r, s);\n  }\n\n  /**\n   * Invest to tokens, recognize the payer.\n   *\n   */\n  function buyWithCustomerId(uint128 customerId) public payable {\n    investWithCustomerId(msg.sender, customerId);\n  }\n\n  /**\n   * The basic entry point to participate the crowdsale process.\n   *\n   * Pay for funding, get invested tokens back in the sender address.\n   */\n  function buy() public payable {\n    invest(msg.sender);\n  }\n\n  /**\n   * Finalize a succcesful crowdsale.\n   *\n   * The owner can triggre a call the contract that provides post-crowdsale actions, like releasing the tokens.\n   */\n  function finalize() public inState(State.Success) onlyOwner stopInEmergency {\n\n    // Already finalized\n    if(finalized) {\n      throw;\n    }\n\n    // Finalizing is optional. We only call it if we are given a finalizing agent.\n    if(address(finalizeAgent) != 0) {\n      finalizeAgent.finalizeCrowdsale();\n    }\n\n    finalized = true;\n  }\n\n  /**\n   * Allow to (re)set finalize agent.\n   *\n   * Design choice: no state restrictions on setting this, so that we can fix fat finger mistakes.\n   */\n  function setFinalizeAgent(FinalizeAgent addr) onlyOwner {\n    finalizeAgent = addr;\n\n    // Don't allow setting bad agent\n    if(!finalizeAgent.isFinalizeAgent()) {\n      throw;\n    }\n  }\n\n  /**\n   * Set policy do we need to have server-side customer ids for the investments.\n   *\n   */\n  function setRequireCustomerId(bool value) onlyOwner {\n    requireCustomerId = value;\n    InvestmentPolicyChanged(requireCustomerId, requiredSignedAddress, signerAddress);\n  }\n\n  /**\n   * Set policy if all investors must be cleared on the server side first.\n   *\n   * This is e.g. for the accredited investor clearing.\n   *\n   */\n  function setRequireSignedAddress(bool value, address _signerAddress) onlyOwner {\n    requiredSignedAddress = value;\n    signerAddress = _signerAddress;\n    InvestmentPolicyChanged(requireCustomerId, requiredSignedAddress, signerAddress);\n  }\n\n  /**\n   * Allow addresses to do early participation.\n   *\n   * TODO: Fix spelling error in the name\n   */\n  function setEarlyParicipantWhitelist(address addr, bool status, uint minCap, uint maxCap) onlyOwner {\n    if (!isWhiteListed) throw;\n    earlyParticipantWhitelist[addr] = WhiteListData({status:status, minCap:minCap, maxCap:maxCap});\n    Whitelisted(addr, status);\n  }\n\n  function setEarlyParicipantsWhitelist(address[] addrs, bool[] statuses, uint[] minCaps, uint[] maxCaps) onlyOwner {\n    if (!isWhiteListed) throw;\n    for (uint iterator = 0; iterator < addrs.length; iterator++) {\n      setEarlyParicipantWhitelist(addrs[iterator], statuses[iterator], minCaps[iterator], maxCaps[iterator]);\n    }\n  }\n\n  function updateEarlyParicipantWhitelist(address addr, address contractAddr, uint tokensBought) {\n    if (tokensBought < earlyParticipantWhitelist[addr].minCap) throw;\n    if (!isWhiteListed) throw;\n    if (addr != msg.sender && contractAddr != msg.sender) throw;\n    uint newMaxCap = earlyParticipantWhitelist[addr].maxCap;\n    newMaxCap = newMaxCap.minus(tokensBought);\n    earlyParticipantWhitelist[addr] = WhiteListData({status:earlyParticipantWhitelist[addr].status, minCap:0, maxCap:newMaxCap});\n  }\n\n  function updateJoinedCrowdsales(address addr) onlyOwner {\n    joinedCrowdsales[joinedCrowdsalesLen++] = addr;\n  }\n\n  function setLastCrowdsale(address addr) onlyOwner {\n    lastCrowdsale = addr;\n  }\n\n  function clearJoinedCrowdsales() onlyOwner {\n    joinedCrowdsalesLen = 0;\n  }\n\n  function updateJoinedCrowdsalesMultiple(address[] addrs) onlyOwner {\n    clearJoinedCrowdsales();\n    for (uint iter = 0; iter < addrs.length; iter++) {\n      if(joinedCrowdsalesLen == joinedCrowdsales.length) {\n          joinedCrowdsales.length += 1;\n      }\n      joinedCrowdsales[joinedCrowdsalesLen++] = addrs[iter];\n      if (iter == addrs.length - 1)\n        setLastCrowdsale(addrs[iter]);\n    }\n  }\n\n  function setStartsAt(uint time) onlyOwner {\n    if (finalized) throw;\n\n    if (!isUpdatable) throw;\n\n    if(now > time) {\n      throw; // Don't change past\n    }\n\n    if(time > endsAt) {\n      throw;\n    }\n\n    CrowdsaleExt lastCrowdsaleCntrct = CrowdsaleExt(lastCrowdsale);\n    if (lastCrowdsaleCntrct.finalized()) throw;\n\n    startsAt = time;\n    StartsAtChanged(startsAt);\n  }\n\n  /**\n   * Allow crowdsale owner to close early or extend the crowdsale.\n   *\n   * This is useful e.g. for a manual soft cap implementation:\n   * - after X amount is reached determine manual closing\n   *\n   * This may put the crowdsale to an invalid state,\n   * but we trust owners know what they are doing.\n   *\n   */\n  function setEndsAt(uint time) onlyOwner {\n    if (finalized) throw;\n\n    if (!isUpdatable) throw;\n\n    if(now > time) {\n      throw; // Don't change past\n    }\n\n    if(startsAt > time) {\n      throw;\n    }\n\n    CrowdsaleExt lastCrowdsaleCntrct = CrowdsaleExt(lastCrowdsale);\n    if (lastCrowdsaleCntrct.finalized()) throw;\n\n    uint num = 0;\n    for (var i = 0; i < joinedCrowdsalesLen; i++) {\n      if (this == joinedCrowdsales[i]) \n        num = i;\n    }\n\n    if (num + 1 < joinedCrowdsalesLen) {\n      for (var j = num + 1; j < joinedCrowdsalesLen; j++) {\n        CrowdsaleExt crowdsale = CrowdsaleExt(joinedCrowdsales[j]);\n        if (time > crowdsale.startsAt()) throw;\n      }\n    }\n\n    endsAt = time;\n    EndsAtChanged(endsAt);\n  }\n\n  /**\n   * Allow to (re)set pricing strategy.\n   *\n   * Design choice: no state restrictions on the set, so that we can fix fat finger mistakes.\n   */\n  function setPricingStrategy(PricingStrategy _pricingStrategy) onlyOwner {\n    pricingStrategy = _pricingStrategy;\n\n    // Don't allow setting bad agent\n    if(!pricingStrategy.isPricingStrategy()) {\n      throw;\n    }\n  }\n\n  /**\n   * Allow to change the team multisig address in the case of emergency.\n   *\n   * This allows to save a deployed crowdsale wallet in the case the crowdsale has not yet begun\n   * (we have done only few test transactions). After the crowdsale is going\n   * then multisig address stays locked for the safety reasons.\n   */\n  function setMultisig(address addr) public onlyOwner {\n\n    // Change\n    if(investorCount > MAX_INVESTMENTS_BEFORE_MULTISIG_CHANGE) {\n      throw;\n    }\n\n    multisigWallet = addr;\n  }\n\n  /**\n   * Allow load refunds back on the contract for the refunding.\n   *\n   * The team can transfer the funds back on the smart contract in the case the minimum goal was not reached..\n   */\n  function loadRefund() public payable inState(State.Failure) {\n    if(msg.value == 0) throw;\n    loadedRefund = loadedRefund.plus(msg.value);\n  }\n\n  /**\n   * Investors can claim refund.\n   *\n   * Note that any refunds from proxy buyers should be handled separately,\n   * and not through this contract.\n   */\n  function refund() public inState(State.Refunding) {\n    uint256 weiValue = investedAmountOf[msg.sender];\n    if (weiValue == 0) throw;\n    investedAmountOf[msg.sender] = 0;\n    weiRefunded = weiRefunded.plus(weiValue);\n    Refund(msg.sender, weiValue);\n    if (!msg.sender.send(weiValue)) throw;\n  }\n\n  /**\n   * @return true if the crowdsale has raised enough money to be a successful.\n   */\n  function isMinimumGoalReached() public constant returns (bool reached) {\n    return weiRaised >= minimumFundingGoal;\n  }\n\n  /**\n   * Check if the contract relationship looks good.\n   */\n  function isFinalizerSane() public constant returns (bool sane) {\n    return finalizeAgent.isSane();\n  }\n\n  /**\n   * Check if the contract relationship looks good.\n   */\n  function isPricingSane() public constant returns (bool sane) {\n    return pricingStrategy.isSane(address(this));\n  }\n\n  /**\n   * Crowdfund state machine management.\n   *\n   * We make it a function and do not assign the result to a variable, so there is no chance of the variable being stale.\n   */\n  function getState() public constant returns (State) {\n    if(finalized) return State.Finalized;\n    else if (address(finalizeAgent) == 0) return State.Preparing;\n    else if (!finalizeAgent.isSane()) return State.Preparing;\n    else if (!pricingStrategy.isSane(address(this))) return State.Preparing;\n    else if (block.timestamp < startsAt) return State.PreFunding;\n    else if (block.timestamp <= endsAt && !isCrowdsaleFull()) return State.Funding;\n    else if (isMinimumGoalReached()) return State.Success;\n    else if (!isMinimumGoalReached() && weiRaised > 0 && loadedRefund >= weiRaised) return State.Refunding;\n    else return State.Failure;\n  }\n\n  /** This is for manual testing of multisig wallet interaction */\n  function setOwnerTestValue(uint val) onlyOwner {\n    ownerTestValue = val;\n  }\n\n  /** Interface marker. */\n  function isCrowdsale() public constant returns (bool) {\n    return true;\n  }\n\n  //\n  // Modifiers\n  //\n\n  /** Modified allowing execution only if the crowdsale is currently running.  */\n  modifier inState(State state) {\n    if(getState() != state) throw;\n    _;\n  }\n\n\n  //\n  // Abstract functions\n  //\n\n  /**\n   * Check if the current invested breaks our cap rules.\n   *\n   *\n   * The child contract must define their own cap setting rules.\n   * We allow a lot of flexibility through different capping strategies (ETH, token count)\n   * Called from invest().\n   *\n   * @param weiAmount The amount of wei the investor tries to invest in the current transaction\n   * @param tokenAmount The amount of tokens we try to give to the investor in the current transaction\n   * @param weiRaisedTotal What would be our total raised balance after this transaction\n   * @param tokensSoldTotal What would be our total sold tokens count after this transaction\n   *\n   * @return true if taking this investment would break our cap rules\n   */\n  function isBreakingCap(uint weiAmount, uint tokenAmount, uint weiRaisedTotal, uint tokensSoldTotal) constant returns (bool limitBroken);\n\n  function isBreakingInvestorCap(address receiver, uint tokenAmount) constant returns (bool limitBroken);\n\n  /**\n   * Check if the current crowdsale is full and we can no longer sell any tokens.\n   */\n  function isCrowdsaleFull() public constant returns (bool);\n\n  /**\n   * Create new tokens or transfer issued tokens to the investor depending on the cap model.\n   */\n  function assignTokens(address receiver, uint tokenAmount) private;\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n\n\n\n/**\n * Standard ERC20 token with Short Hand Attack and approve() race condition mitigation.\n *\n * Based on code by FirstBlood:\n * https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol\n */\ncontract StandardToken is ERC20, SafeMath {\n\n  /* Token supply got increased and a new owner received these tokens */\n  event Minted(address receiver, uint amount);\n\n  /* Actual balances of token holders */\n  mapping(address => uint) balances;\n\n  /* approve() allowances */\n  mapping (address => mapping (address => uint)) allowed;\n\n  /* Interface declaration */\n  function isToken() public constant returns (bool weAre) {\n    return true;\n  }\n\n  function transfer(address _to, uint _value) returns (bool success) {\n    balances[msg.sender] = safeSub(balances[msg.sender], _value);\n    balances[_to] = safeAdd(balances[_to], _value);\n    Transfer(msg.sender, _to, _value);\n    return true;\n  }\n\n  function transferFrom(address _from, address _to, uint _value) returns (bool success) {\n    uint _allowance = allowed[_from][msg.sender];\n\n    balances[_to] = safeAdd(balances[_to], _value);\n    balances[_from] = safeSub(balances[_from], _value);\n    allowed[_from][msg.sender] = safeSub(_allowance, _value);\n    Transfer(_from, _to, _value);\n    return true;\n  }\n\n  function balanceOf(address _owner) constant returns (uint balance) {\n    return balances[_owner];\n  }\n\n  function approve(address _spender, uint _value) returns (bool success) {\n\n    // To change the approve amount you first have to reduce the addresses`\n    //  allowance to zero by calling `approve(_spender, 0)` if it is not\n    //  already 0 to mitigate the race condition described here:\n    //  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n    if ((_value != 0) && (allowed[msg.sender][_spender] != 0)) throw;\n\n    allowed[msg.sender][_spender] = _value;\n    Approval(msg.sender, _spender, _value);\n    return true;\n  }\n\n  function allowance(address _owner, address _spender) constant returns (uint remaining) {\n    return allowed[_owner][_spender];\n  }\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Upgrade agent interface inspired by Lunyr.\n *\n * Upgrade agent transfers tokens to a new contract.\n * Upgrade agent itself can be the token contract, or just a middle man contract doing the heavy lifting.\n */\ncontract UpgradeAgent {\n\n  uint public originalSupply;\n\n  /** Interface marker */\n  function isUpgradeAgent() public constant returns (bool) {\n    return true;\n  }\n\n  function upgradeFrom(address _from, uint256 _value) public;\n\n}\n\n\n/**\n * A token upgrade mechanism where users can opt-in amount of tokens to the next smart contract revision.\n *\n * First envisioned by Golem and Lunyr projects.\n */\ncontract UpgradeableToken is StandardToken {\n\n  /** Contract / person who can set the upgrade path. This can be the same as team multisig wallet, as what it is with its default value. */\n  address public upgradeMaster;\n\n  /** The next contract where the tokens will be migrated. */\n  UpgradeAgent public upgradeAgent;\n\n  /** How many tokens we have upgraded by now. */\n  uint256 public totalUpgraded;\n\n  /**\n   * Upgrade states.\n   *\n   * - NotAllowed: The child contract has not reached a condition where the upgrade can bgun\n   * - WaitingForAgent: Token allows upgrade, but we don't have a new agent yet\n   * - ReadyToUpgrade: The agent is set, but not a single token has been upgraded yet\n   * - Upgrading: Upgrade agent is set and the balance holders can upgrade their tokens\n   *\n   */\n  enum UpgradeState {Unknown, NotAllowed, WaitingForAgent, ReadyToUpgrade, Upgrading}\n\n  /**\n   * Somebody has upgraded some of his tokens.\n   */\n  event Upgrade(address indexed _from, address indexed _to, uint256 _value);\n\n  /**\n   * New upgrade agent available.\n   */\n  event UpgradeAgentSet(address agent);\n\n  /**\n   * Do not allow construction without upgrade master set.\n   */\n  function UpgradeableToken(address _upgradeMaster) {\n    upgradeMaster = _upgradeMaster;\n  }\n\n  /**\n   * Allow the token holder to upgrade some of their tokens to a new contract.\n   */\n  function upgrade(uint256 value) public {\n\n      UpgradeState state = getUpgradeState();\n      if(!(state == UpgradeState.ReadyToUpgrade || state == UpgradeState.Upgrading)) {\n        // Called in a bad state\n        throw;\n      }\n\n      // Validate input value.\n      if (value == 0) throw;\n\n      balances[msg.sender] = safeSub(balances[msg.sender], value);\n\n      // Take tokens out from circulation\n      totalSupply = safeSub(totalSupply, value);\n      totalUpgraded = safeAdd(totalUpgraded, value);\n\n      // Upgrade agent reissues the tokens\n      upgradeAgent.upgradeFrom(msg.sender, value);\n      Upgrade(msg.sender, upgradeAgent, value);\n  }\n\n  /**\n   * Set an upgrade agent that handles\n   */\n  function setUpgradeAgent(address agent) external {\n\n      if(!canUpgrade()) {\n        // The token is not yet in a state that we could think upgrading\n        throw;\n      }\n\n      if (agent == 0x0) throw;\n      // Only a master can designate the next agent\n      if (msg.sender != upgradeMaster) throw;\n      // Upgrade has already begun for an agent\n      if (getUpgradeState() == UpgradeState.Upgrading) throw;\n\n      upgradeAgent = UpgradeAgent(agent);\n\n      // Bad interface\n      if(!upgradeAgent.isUpgradeAgent()) throw;\n      // Make sure that token supplies match in source and target\n      if (upgradeAgent.originalSupply() != totalSupply) throw;\n\n      UpgradeAgentSet(upgradeAgent);\n  }\n\n  /**\n   * Get the state of the token upgrade.\n   */\n  function getUpgradeState() public constant returns(UpgradeState) {\n    if(!canUpgrade()) return UpgradeState.NotAllowed;\n    else if(address(upgradeAgent) == 0x00) return UpgradeState.WaitingForAgent;\n    else if(totalUpgraded == 0) return UpgradeState.ReadyToUpgrade;\n    else return UpgradeState.Upgrading;\n  }\n\n  /**\n   * Change the upgrade master.\n   *\n   * This allows us to set a new owner for the upgrade mechanism.\n   */\n  function setUpgradeMaster(address master) public {\n      if (master == 0x0) throw;\n      if (msg.sender != upgradeMaster) throw;\n      upgradeMaster = master;\n  }\n\n  /**\n   * Child contract can enable to provide the condition when the upgrade can begun.\n   */\n  function canUpgrade() public constant returns(bool) {\n     return true;\n  }\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n\n\n/**\n * Define interface for releasing the token transfer after a successful crowdsale.\n */\ncontract ReleasableToken is ERC20, Ownable {\n\n  /* The finalizer contract that allows unlift the transfer limits on this token */\n  address public releaseAgent;\n\n  /** A crowdsale contract can release us to the wild if ICO success. If false we are are in transfer lock up period.*/\n  bool public released = false;\n\n  /** Map of agents that are allowed to transfer tokens regardless of the lock down period. These are crowdsale contracts and possible the team multisig itself. */\n  mapping (address => bool) public transferAgents;\n\n  /**\n   * Limit token transfer until the crowdsale is over.\n   *\n   */\n  modifier canTransfer(address _sender) {\n\n    if(!released) {\n        if(!transferAgents[_sender]) {\n            throw;\n        }\n    }\n\n    _;\n  }\n\n  /**\n   * Set the contract that can call release and make the token transferable.\n   *\n   * Design choice. Allow reset the release agent to fix fat finger mistakes.\n   */\n  function setReleaseAgent(address addr) onlyOwner inReleaseState(false) public {\n\n    // We don't do interface check here as we might want to a normal wallet address to act as a release agent\n    releaseAgent = addr;\n  }\n\n  /**\n   * Owner can allow a particular address (a crowdsale contract) to transfer tokens despite the lock up period.\n   */\n  function setTransferAgent(address addr, bool state) onlyOwner inReleaseState(false) public {\n    transferAgents[addr] = state;\n  }\n\n  /**\n   * One way function to release the tokens to the wild.\n   *\n   * Can be called only from the release agent that is the final ICO contract. It is only called if the crowdsale has been success (first milestone reached).\n   */\n  function releaseTokenTransfer() public onlyReleaseAgent {\n    released = true;\n  }\n\n  /** The function can be called only before or after the tokens have been releasesd */\n  modifier inReleaseState(bool releaseState) {\n    if(releaseState != released) {\n        throw;\n    }\n    _;\n  }\n\n  /** The function can be called only by a whitelisted release agent. */\n  modifier onlyReleaseAgent() {\n    if(msg.sender != releaseAgent) {\n        throw;\n    }\n    _;\n  }\n\n  function transfer(address _to, uint _value) canTransfer(msg.sender) returns (bool success) {\n    // Call StandardToken.transfer()\n   return super.transfer(_to, _value);\n  }\n\n  function transferFrom(address _from, address _to, uint _value) canTransfer(_from) returns (bool success) {\n    // Call StandardToken.transferForm()\n    return super.transferFrom(_from, _to, _value);\n  }\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n\n\n\n/**\n * A token that can increase its supply by another contract.\n *\n * This allows uncapped crowdsale by dynamically increasing the supply when money pours in.\n * Only mint agents, contracts whitelisted by owner, can mint new tokens.\n *\n */\ncontract MintableTokenExt is StandardToken, Ownable {\n\n  using SafeMathLibExt for uint;\n\n  bool public mintingFinished = false;\n\n  /** List of agents that are allowed to create new tokens */\n  mapping (address => bool) public mintAgents;\n\n  event MintingAgentChanged(address addr, bool state  );\n\n  /** inPercentageUnit is percents of tokens multiplied to 10 up to percents decimals.\n  * For example, for reserved tokens in percents 2.54%\n  * inPercentageUnit = 254\n  * inPercentageDecimals = 2\n  */\n  struct ReservedTokensData {\n    uint inTokens;\n    uint inPercentageUnit;\n    uint inPercentageDecimals;\n  }\n\n  mapping (address => ReservedTokensData) public reservedTokensList;\n  address[] public reservedTokensDestinations;\n  uint public reservedTokensDestinationsLen = 0;\n\n  function setReservedTokensList(address addr, uint inTokens, uint inPercentageUnit, uint inPercentageDecimals) onlyOwner {\n    reservedTokensDestinations.push(addr);\n    reservedTokensDestinationsLen++;\n    reservedTokensList[addr] = ReservedTokensData({inTokens:inTokens, inPercentageUnit:inPercentageUnit, inPercentageDecimals: inPercentageDecimals});\n  }\n\n  function getReservedTokensListValInTokens(address addr) constant returns (uint inTokens) {\n    return reservedTokensList[addr].inTokens;\n  }\n\n  function getReservedTokensListValInPercentageUnit(address addr) constant returns (uint inPercentageUnit) {\n    return reservedTokensList[addr].inPercentageUnit;\n  }\n\n  function getReservedTokensListValInPercentageDecimals(address addr) constant returns (uint inPercentageDecimals) {\n    return reservedTokensList[addr].inPercentageDecimals;\n  }\n\n  function setReservedTokensListMultiple(address[] addrs, uint[] inTokens, uint[] inPercentageUnit, uint[] inPercentageDecimals) onlyOwner {\n    for (uint iterator = 0; iterator < addrs.length; iterator++) {\n      setReservedTokensList(addrs[iterator], inTokens[iterator], inPercentageUnit[iterator], inPercentageDecimals[iterator]);\n    }\n  }\n\n  /**\n   * Create new tokens and allocate them to an address..\n   *\n   * Only callably by a crowdsale contract (mint agent).\n   */\n  function mint(address receiver, uint amount) onlyMintAgent canMint public {\n    totalSupply = totalSupply.plus(amount);\n    balances[receiver] = balances[receiver].plus(amount);\n\n    // This will make the mint transaction apper in EtherScan.io\n    // We can remove this after there is a standardized minting event\n    Transfer(0, receiver, amount);\n  }\n\n  /**\n   * Owner can allow a crowdsale contract to mint new tokens.\n   */\n  function setMintAgent(address addr, bool state) onlyOwner canMint public {\n    mintAgents[addr] = state;\n    MintingAgentChanged(addr, state);\n  }\n\n  modifier onlyMintAgent() {\n    // Only crowdsale contracts are allowed to mint new tokens\n    if(!mintAgents[msg.sender]) {\n        throw;\n    }\n    _;\n  }\n\n  /** Make sure we are not done yet. */\n  modifier canMint() {\n    if(mintingFinished) throw;\n    _;\n  }\n}\n\n\n\n/**\n * A crowdsaled token.\n *\n * An ERC-20 token designed specifically for crowdsales with investor protection and further development path.\n *\n * - The token transfer() is disabled until the crowdsale is over\n * - The token contract gives an opt-in upgrade path to a new contract\n * - The same token can be part of several crowdsales through approve() mechanism\n * - The token can be capped (supply set in the constructor) or uncapped (crowdsale contract can mint new tokens)\n *\n */\ncontract CrowdsaleTokenExt is ReleasableToken, MintableTokenExt, UpgradeableToken {\n\n  /** Name and symbol were updated. */\n  event UpdatedTokenInformation(string newName, string newSymbol);\n\n  string public name;\n\n  string public symbol;\n\n  uint public decimals;\n\n  /* Minimum ammount of tokens every buyer can buy. */\n  uint public minCap;\n\n  /**\n   * Construct the token.\n   *\n   * This token must be created through a team multisig wallet, so that it is owned by that wallet.\n   *\n   * @param _name Token name\n   * @param _symbol Token symbol - should be all caps\n   * @param _initialSupply How many tokens we start with\n   * @param _decimals Number of decimal places\n   * @param _mintable Are new tokens created over the crowdsale or do we distribute only the initial supply? Note that when the token becomes transferable the minting always ends.\n   */\n  function CrowdsaleTokenExt(string _name, string _symbol, uint _initialSupply, uint _decimals, bool _mintable, uint _globalMinCap)\n    UpgradeableToken(msg.sender) {\n\n    // Create any address, can be transferred\n    // to team multisig via changeOwner(),\n    // also remember to call setUpgradeMaster()\n    owner = msg.sender;\n\n    name = _name;\n    symbol = _symbol;\n\n    totalSupply = _initialSupply;\n\n    decimals = _decimals;\n\n    minCap = _globalMinCap;\n\n    // Create initially all balance on the team multisig\n    balances[owner] = totalSupply;\n\n    if(totalSupply > 0) {\n      Minted(owner, totalSupply);\n    }\n\n    // No more new supply allowed after the token creation\n    if(!_mintable) {\n      mintingFinished = true;\n      if(totalSupply == 0) {\n        throw; // Cannot create a token without supply and no minting\n      }\n    }\n  }\n\n  /**\n   * When token is released to be transferable, enforce no new tokens can be created.\n   */\n  function releaseTokenTransfer() public onlyReleaseAgent {\n    mintingFinished = true;\n    super.releaseTokenTransfer();\n  }\n\n  /**\n   * Allow upgrade agent functionality kick in only if the crowdsale was success.\n   */\n  function canUpgrade() public constant returns(bool) {\n    return released && super.canUpgrade();\n  }\n\n  /**\n   * Owner can update token information here.\n   *\n   * It is often useful to conceal the actual token association, until\n   * the token operations, like central issuance or reissuance have been completed.\n   *\n   * This function allows the token owner to rename the token after the operations\n   * have been completed and then point the audience to use the token contract.\n   */\n  function setTokenInformation(string _name, string _symbol) onlyOwner {\n    name = _name;\n    symbol = _symbol;\n\n    UpdatedTokenInformation(name, symbol);\n  }\n\n}\n\n\n/**\n * The default behavior for the crowdsale end.\n *\n * Unlock tokens.\n */\ncontract ReservedTokensFinalizeAgent is FinalizeAgent {\n  using SafeMathLibExt for uint;\n  CrowdsaleTokenExt public token;\n  CrowdsaleExt public crowdsale;\n\n  function ReservedTokensFinalizeAgent(CrowdsaleTokenExt _token, CrowdsaleExt _crowdsale) {\n    token = _token;\n    crowdsale = _crowdsale;\n  }\n\n  /** Check that we can release the token */\n  function isSane() public constant returns (bool) {\n    return (token.releaseAgent() == address(this));\n  }\n\n  /** Called once by crowdsale finalize() if the sale was success. */\n  function finalizeCrowdsale() public {\n    if(msg.sender != address(crowdsale)) {\n      throw;\n    }\n\n    // How many % of tokens the founders and others get\n    uint tokensSold = crowdsale.tokensSold();\n\n    // move reserved tokens in percentage\n    for (var j = 0; j < token.reservedTokensDestinationsLen(); j++) {\n      uint allocatedBonusInPercentage;\n      uint percentsOfTokensUnit = token.getReservedTokensListValInPercentageUnit(token.reservedTokensDestinations(j));\n      uint percentsOfTokensDecimals = token.getReservedTokensListValInPercentageDecimals(token.reservedTokensDestinations(j));\n      if (percentsOfTokensUnit > 0) {\n        allocatedBonusInPercentage = tokensSold * percentsOfTokensUnit / 10**percentsOfTokensDecimals / 100;\n        tokensSold = tokensSold.plus(allocatedBonusInPercentage);\n        token.mint(token.reservedTokensDestinations(j), allocatedBonusInPercentage);\n      }\n    }\n\n    // move reserved tokens in tokens\n    for (var i = 0; i < token.reservedTokensDestinationsLen(); i++) {\n      uint allocatedBonusInTokens = token.getReservedTokensListValInTokens(token.reservedTokensDestinations(i));\n      if (allocatedBonusInTokens > 0) {\n        tokensSold = tokensSold.plus(allocatedBonusInTokens);\n        token.mint(token.reservedTokensDestinations(i), allocatedBonusInTokens);\n      }\n    }\n\n    token.releaseTokenTransfer();\n  }\n\n}\n"
            },
            "nullFinalizeAgent" : {
                "abiConstructor" : "",
                "addr" : "",
                "abi" : [
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "finalizeCrowdsale",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isFinalizeAgent",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isSane",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "crowdsale",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "constructor",
                        "payable" : false,
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "_crowdsale"
                            }
                        ]
                    }
                ],
                "bin" : "6060604052341561000c57fe5b60405160208061019083398101604052515b60008054600160a060020a031916600160a060020a0383161790555b505b6101458061004b6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630bf318a3811461005b578063614cb9041461006d57806382771c8e1461006d5780639c1e03a0146100b5575bfe5b341561006357fe5b61006b6100ee565b005b341561007557fe5b61007d6100f1565b604080519115158252519081900360200190f35b341561007557fe5b61007d6100f1565b604080519115158252519081900360200190f35b34156100bd57fe5b6100c56100fd565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b5b565b60015b90565b60015b90565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820e5bf871cd242e25ba084c58c38a65fabf139b80d614ec5209a754f99a30514b10029",
                "src" : "// Created using ICO Wizard https://github.com/oraclesorg/ico-wizard by Oracles Network \npragma solidity ^0.4.11;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  uint256 public totalSupply;\n  function balanceOf(address who) public constant returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address public owner;\n\n\n  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  function Ownable() {\n    owner = msg.sender;\n  }\n\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(msg.sender == owner);\n    _;\n  }\n\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address newOwner) onlyOwner public {\n    require(newOwner != address(0));\n    OwnershipTransferred(owner, newOwner);\n    owner = newOwner;\n  }\n\n}\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Safe unsigned safe math.\n *\n * https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736#.750gwtwli\n *\n * Originally from https://raw.githubusercontent.com/AragonOne/zeppelin-solidity/master/contracts/SafeMathLib.sol\n *\n * Maintained here until merged to mainline zeppelin-solidity.\n *\n */\nlibrary SafeMathLibExt {\n\n  function times(uint a, uint b) returns (uint) {\n    uint c = a * b;\n    assert(a == 0 || c / a == b);\n    return c;\n  }\n\n  function divides(uint a, uint b) returns (uint) {\n    assert(b > 0);\n    uint c = a / b;\n    assert(a == b * c + a % b);\n    return c;\n  }\n\n  function minus(uint a, uint b) returns (uint) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  function plus(uint a, uint b) returns (uint) {\n    uint c = a + b;\n    assert(c>=a);\n    return c;\n  }\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n/*\n * Haltable\n *\n * Abstract contract that allows children to implement an\n * emergency stop mechanism. Differs from Pausable by causing a throw when in halt mode.\n *\n *\n * Originally envisioned in FirstBlood ICO contract.\n */\ncontract Haltable is Ownable {\n  bool public halted;\n\n  modifier stopInEmergency {\n    if (halted) throw;\n    _;\n  }\n\n  modifier stopNonOwnersInEmergency {\n    if (halted && msg.sender != owner) throw;\n    _;\n  }\n\n  modifier onlyInEmergency {\n    if (!halted) throw;\n    _;\n  }\n\n  // called by the owner on emergency, triggers stopped state\n  function halt() external onlyOwner {\n    halted = true;\n  }\n\n  // called by the owner on end of emergency, returns to normal state\n  function unhalt() external onlyOwner onlyInEmergency {\n    halted = false;\n  }\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Interface for defining crowdsale pricing.\n */\ncontract PricingStrategy {\n\n  /** Interface declaration. */\n  function isPricingStrategy() public constant returns (bool) {\n    return true;\n  }\n\n  /** Self check if all references are correctly set.\n   *\n   * Checks that pricing strategy matches crowdsale parameters.\n   */\n  function isSane(address crowdsale) public constant returns (bool) {\n    return true;\n  }\n\n  /**\n   * @dev Pricing tells if this is a presale purchase or not.\n     @param purchaser Address of the purchaser\n     @return False by default, true if a presale purchaser\n   */\n  function isPresalePurchase(address purchaser) public constant returns (bool) {\n    return false;\n  }\n\n  /**\n   * When somebody tries to buy tokens for X eth, calculate how many tokens they get.\n   *\n   *\n   * @param value - What is the value of the transaction send in as wei\n   * @param tokensSold - how much tokens have been sold this far\n   * @param weiRaised - how much money has been raised this far in the main token sale - this number excludes presale\n   * @param msgSender - who is the investor of this transaction\n   * @param decimals - how many decimal units the token has\n   * @return Amount of tokens the investor receives\n   */\n  function calculatePrice(uint value, uint weiRaised, uint tokensSold, address msgSender, uint decimals) public constant returns (uint tokenAmount);\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Finalize agent defines what happens at the end of succeseful crowdsale.\n *\n * - Allocate tokens for founders, bounties and community\n * - Make tokens transferable\n * - etc.\n */\ncontract FinalizeAgent {\n\n  function isFinalizeAgent() public constant returns(bool) {\n    return true;\n  }\n\n  /** Return true if we can run finalizeCrowdsale() properly.\n   *\n   * This is a safety check function that doesn't allow crowdsale to begin\n   * unless the finalizer has been set up properly.\n   */\n  function isSane() public constant returns (bool);\n\n  /** Called once by crowdsale finalize() if the sale was success. */\n  function finalizeCrowdsale();\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n\n\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public constant returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\n\n/**\n * A token that defines fractional units as decimals.\n */\ncontract FractionalERC20Ext is ERC20 {\n\n  uint public decimals;\n  uint public minCap;\n\n}\n\n\n\n/**\n * Abstract base contract for token sales.\n *\n * Handle\n * - start and end dates\n * - accepting investments\n * - minimum funding goal and refund\n * - various statistics during the crowdfund\n * - different pricing strategies\n * - different investment policies (require server side customer id, allow only whitelisted addresses)\n *\n */\ncontract CrowdsaleExt is Haltable {\n\n  /* Max investment count when we are still allowed to change the multisig address */\n  uint public MAX_INVESTMENTS_BEFORE_MULTISIG_CHANGE = 5;\n\n  using SafeMathLibExt for uint;\n\n  /* The token we are selling */\n  FractionalERC20Ext public token;\n\n  /* How we are going to price our offering */\n  PricingStrategy public pricingStrategy;\n\n  /* Post-success callback */\n  FinalizeAgent public finalizeAgent;\n\n  /* tokens will be transfered from this address */\n  address public multisigWallet;\n\n  /* if the funding goal is not reached, investors may withdraw their funds */\n  uint public minimumFundingGoal;\n\n  /* the UNIX timestamp start date of the crowdsale */\n  uint public startsAt;\n\n  /* the UNIX timestamp end date of the crowdsale */\n  uint public endsAt;\n\n  /* the number of tokens already sold through this contract*/\n  uint public tokensSold = 0;\n\n  /* How many wei of funding we have raised */\n  uint public weiRaised = 0;\n\n  /* Calculate incoming funds from presale contracts and addresses */\n  uint public presaleWeiRaised = 0;\n\n  /* How many distinct addresses have invested */\n  uint public investorCount = 0;\n\n  /* How much wei we have returned back to the contract after a failed crowdfund. */\n  uint public loadedRefund = 0;\n\n  /* How much wei we have given back to investors.*/\n  uint public weiRefunded = 0;\n\n  /* Has this crowdsale been finalized */\n  bool public finalized;\n\n  /* Do we need to have unique contributor id for each customer */\n  bool public requireCustomerId;\n\n  bool public isWhiteListed;\n\n  address[] public joinedCrowdsales;\n  uint public joinedCrowdsalesLen = 0;\n\n  address public lastCrowdsale;\n\n  /**\n    * Do we verify that contributor has been cleared on the server side (accredited investors only).\n    * This method was first used in FirstBlood crowdsale to ensure all contributors have accepted terms on sale (on the web).\n    */\n  bool public requiredSignedAddress;\n\n  /* Server side address that signed allowed contributors (Ethereum addresses) that can participate the crowdsale */\n  address public signerAddress;\n\n  /** How much ETH each address has invested to this crowdsale */\n  mapping (address => uint256) public investedAmountOf;\n\n  /** How much tokens this crowdsale has credited for each investor address */\n  mapping (address => uint256) public tokenAmountOf;\n\n  struct WhiteListData {\n    bool status;\n    uint minCap;\n    uint maxCap;\n  }\n\n  //is crowdsale updatable\n  bool public isUpdatable;\n\n  /** Addresses that are allowed to invest even before ICO offical opens. For testing, for ICO partners, etc. */\n  mapping (address => WhiteListData) public earlyParticipantWhitelist;\n\n  /** This is for manul testing for the interaction from owner wallet. You can set it to any value and inspect this in blockchain explorer to see that crowdsale interaction works. */\n  uint public ownerTestValue;\n\n  /** State machine\n   *\n   * - Preparing: All contract initialization calls and variables have not been set yet\n   * - Prefunding: We have not passed start time yet\n   * - Funding: Active crowdsale\n   * - Success: Minimum funding goal reached\n   * - Failure: Minimum funding goal not reached before ending time\n   * - Finalized: The finalized has been called and succesfully executed\n   * - Refunding: Refunds are loaded on the contract for reclaim.\n   */\n  enum State{Unknown, Preparing, PreFunding, Funding, Success, Failure, Finalized, Refunding}\n\n  // A new investment was made\n  event Invested(address investor, uint weiAmount, uint tokenAmount, uint128 customerId);\n\n  // Refund was processed for a contributor\n  event Refund(address investor, uint weiAmount);\n\n  // The rules were changed what kind of investments we accept\n  event InvestmentPolicyChanged(bool newRequireCustomerId, bool newRequiredSignedAddress, address newSignerAddress);\n\n  // Address early participation whitelist status changed\n  event Whitelisted(address addr, bool status);\n\n  // Crowdsale start time has been changed\n  event StartsAtChanged(uint newStartsAt);\n\n  // Crowdsale end time has been changed\n  event EndsAtChanged(uint newEndsAt);\n\n  function CrowdsaleExt(address _token, PricingStrategy _pricingStrategy, address _multisigWallet, uint _start, uint _end, uint _minimumFundingGoal, bool _isUpdatable, bool _isWhiteListed) {\n\n    owner = msg.sender;\n\n    token = FractionalERC20Ext(_token);\n\n    setPricingStrategy(_pricingStrategy);\n\n    multisigWallet = _multisigWallet;\n    if(multisigWallet == 0) {\n        throw;\n    }\n\n    if(_start == 0) {\n        throw;\n    }\n\n    startsAt = _start;\n\n    if(_end == 0) {\n        throw;\n    }\n\n    endsAt = _end;\n\n    // Don't mess the dates\n    if(startsAt >= endsAt) {\n        throw;\n    }\n\n    // Minimum funding goal can be zero\n    minimumFundingGoal = _minimumFundingGoal;\n\n    isUpdatable = _isUpdatable;\n\n    isWhiteListed = _isWhiteListed;\n  }\n\n  /**\n   * Don't expect to just send in money and get tokens.\n   */\n  function() payable {\n    throw;\n  }\n\n  /**\n   * Make an investment.\n   *\n   * Crowdsale must be running for one to invest.\n   * We must have not pressed the emergency brake.\n   *\n   * @param receiver The Ethereum address who receives the tokens\n   * @param customerId (optional) UUID v4 to track the successful payments on the server side\n   *\n   */\n  function investInternal(address receiver, uint128 customerId) stopInEmergency private {\n\n    // Determine if it's a good time to accept investment from this participant\n    if(getState() == State.PreFunding) {\n      // Are we whitelisted for early deposit\n      throw;\n    } else if(getState() == State.Funding) {\n      // Retail participants can only come in when the crowdsale is running\n      // pass\n      if(isWhiteListed) {\n        if(!earlyParticipantWhitelist[receiver].status) {\n          throw;\n        }\n      }\n    } else {\n      // Unwanted state\n      throw;\n    }\n\n    uint weiAmount = msg.value;\n\n    // Account presale sales separately, so that they do not count against pricing tranches\n    uint tokenAmount = pricingStrategy.calculatePrice(weiAmount, weiRaised - presaleWeiRaised, tokensSold, msg.sender, token.decimals());\n\n    if(tokenAmount == 0) {\n      // Dust transaction\n      throw;\n    }\n\n    if(isWhiteListed) {\n      if(tokenAmount < earlyParticipantWhitelist[receiver].minCap && tokenAmountOf[receiver] == 0) {\n        // tokenAmount < minCap for investor\n        throw;\n      }\n      if(tokenAmount > earlyParticipantWhitelist[receiver].maxCap) {\n        // tokenAmount > maxCap for investor\n        throw;\n      }\n\n      // Check that we did not bust the investor's cap\n      if (isBreakingInvestorCap(receiver, tokenAmount)) {\n        throw;\n      }\n    } else {\n      if(tokenAmount < token.minCap() && tokenAmountOf[receiver] == 0) {\n        throw;\n      }\n    }\n\n    if(investedAmountOf[receiver] == 0) {\n       // A new investor\n       investorCount++;\n    }\n\n    // Update investor\n    investedAmountOf[receiver] = investedAmountOf[receiver].plus(weiAmount);\n    tokenAmountOf[receiver] = tokenAmountOf[receiver].plus(tokenAmount);\n\n    // Update totals\n    weiRaised = weiRaised.plus(weiAmount);\n    tokensSold = tokensSold.plus(tokenAmount);\n\n    if(pricingStrategy.isPresalePurchase(receiver)) {\n        presaleWeiRaised = presaleWeiRaised.plus(weiAmount);\n    }\n\n    // Check that we did not bust the cap\n    if(isBreakingCap(weiAmount, tokenAmount, weiRaised, tokensSold)) {\n      throw;\n    }\n\n    assignTokens(receiver, tokenAmount);\n\n    // Pocket the money\n    if(!multisigWallet.send(weiAmount)) throw;\n\n    if (isWhiteListed) {\n      uint num = 0;\n      for (var i = 0; i < joinedCrowdsalesLen; i++) {\n        if (this == joinedCrowdsales[i]) \n          num = i;\n      }\n\n      if (num + 1 < joinedCrowdsalesLen) {\n        for (var j = num + 1; j < joinedCrowdsalesLen; j++) {\n          CrowdsaleExt crowdsale = CrowdsaleExt(joinedCrowdsales[j]);\n          crowdsale.updateEarlyParicipantWhitelist(msg.sender, this, tokenAmount);\n        }\n      }\n    }\n\n    // Tell us invest was success\n    Invested(receiver, weiAmount, tokenAmount, customerId);\n  }\n\n  /**\n   * Preallocate tokens for the early investors.\n   *\n   * Preallocated tokens have been sold before the actual crowdsale opens.\n   * This function mints the tokens and moves the crowdsale needle.\n   *\n   * Investor count is not handled; it is assumed this goes for multiple investors\n   * and the token distribution happens outside the smart contract flow.\n   *\n   * No money is exchanged, as the crowdsale team already have received the payment.\n   *\n   * @param fullTokens tokens as full tokens - decimal places added internally\n   * @param weiPrice Price of a single full token in wei\n   *\n   */\n  function preallocate(address receiver, uint fullTokens, uint weiPrice) public onlyOwner {\n\n    uint tokenAmount = fullTokens * 10**token.decimals();\n    uint weiAmount = weiPrice * fullTokens; // This can be also 0, we give out tokens for free\n\n    weiRaised = weiRaised.plus(weiAmount);\n    tokensSold = tokensSold.plus(tokenAmount);\n\n    investedAmountOf[receiver] = investedAmountOf[receiver].plus(weiAmount);\n    tokenAmountOf[receiver] = tokenAmountOf[receiver].plus(tokenAmount);\n\n    assignTokens(receiver, tokenAmount);\n\n    // Tell us invest was success\n    Invested(receiver, weiAmount, tokenAmount, 0);\n  }\n\n  /**\n   * Allow anonymous contributions to this crowdsale.\n   */\n  function investWithSignedAddress(address addr, uint128 customerId, uint8 v, bytes32 r, bytes32 s) public payable {\n     bytes32 hash = sha256(addr);\n     if (ecrecover(hash, v, r, s) != signerAddress) throw;\n     if(customerId == 0) throw;  // UUIDv4 sanity check\n     investInternal(addr, customerId);\n  }\n\n  /**\n   * Track who is the customer making the payment so we can send thank you email.\n   */\n  function investWithCustomerId(address addr, uint128 customerId) public payable {\n    if(requiredSignedAddress) throw; // Crowdsale allows only server-side signed participants\n    if(customerId == 0) throw;  // UUIDv4 sanity check\n    investInternal(addr, customerId);\n  }\n\n  /**\n   * Allow anonymous contributions to this crowdsale.\n   */\n  function invest(address addr) public payable {\n    if(requireCustomerId) throw; // Crowdsale needs to track participants for thank you email\n    if(requiredSignedAddress) throw; // Crowdsale allows only server-side signed participants\n    investInternal(addr, 0);\n  }\n\n  /**\n   * Invest to tokens, recognize the payer and clear his address.\n   *\n   */\n  function buyWithSignedAddress(uint128 customerId, uint8 v, bytes32 r, bytes32 s) public payable {\n    investWithSignedAddress(msg.sender, customerId, v, r, s);\n  }\n\n  /**\n   * Invest to tokens, recognize the payer.\n   *\n   */\n  function buyWithCustomerId(uint128 customerId) public payable {\n    investWithCustomerId(msg.sender, customerId);\n  }\n\n  /**\n   * The basic entry point to participate the crowdsale process.\n   *\n   * Pay for funding, get invested tokens back in the sender address.\n   */\n  function buy() public payable {\n    invest(msg.sender);\n  }\n\n  /**\n   * Finalize a succcesful crowdsale.\n   *\n   * The owner can triggre a call the contract that provides post-crowdsale actions, like releasing the tokens.\n   */\n  function finalize() public inState(State.Success) onlyOwner stopInEmergency {\n\n    // Already finalized\n    if(finalized) {\n      throw;\n    }\n\n    // Finalizing is optional. We only call it if we are given a finalizing agent.\n    if(address(finalizeAgent) != 0) {\n      finalizeAgent.finalizeCrowdsale();\n    }\n\n    finalized = true;\n  }\n\n  /**\n   * Allow to (re)set finalize agent.\n   *\n   * Design choice: no state restrictions on setting this, so that we can fix fat finger mistakes.\n   */\n  function setFinalizeAgent(FinalizeAgent addr) onlyOwner {\n    finalizeAgent = addr;\n\n    // Don't allow setting bad agent\n    if(!finalizeAgent.isFinalizeAgent()) {\n      throw;\n    }\n  }\n\n  /**\n   * Set policy do we need to have server-side customer ids for the investments.\n   *\n   */\n  function setRequireCustomerId(bool value) onlyOwner {\n    requireCustomerId = value;\n    InvestmentPolicyChanged(requireCustomerId, requiredSignedAddress, signerAddress);\n  }\n\n  /**\n   * Set policy if all investors must be cleared on the server side first.\n   *\n   * This is e.g. for the accredited investor clearing.\n   *\n   */\n  function setRequireSignedAddress(bool value, address _signerAddress) onlyOwner {\n    requiredSignedAddress = value;\n    signerAddress = _signerAddress;\n    InvestmentPolicyChanged(requireCustomerId, requiredSignedAddress, signerAddress);\n  }\n\n  /**\n   * Allow addresses to do early participation.\n   *\n   * TODO: Fix spelling error in the name\n   */\n  function setEarlyParicipantWhitelist(address addr, bool status, uint minCap, uint maxCap) onlyOwner {\n    if (!isWhiteListed) throw;\n    earlyParticipantWhitelist[addr] = WhiteListData({status:status, minCap:minCap, maxCap:maxCap});\n    Whitelisted(addr, status);\n  }\n\n  function setEarlyParicipantsWhitelist(address[] addrs, bool[] statuses, uint[] minCaps, uint[] maxCaps) onlyOwner {\n    if (!isWhiteListed) throw;\n    for (uint iterator = 0; iterator < addrs.length; iterator++) {\n      setEarlyParicipantWhitelist(addrs[iterator], statuses[iterator], minCaps[iterator], maxCaps[iterator]);\n    }\n  }\n\n  function updateEarlyParicipantWhitelist(address addr, address contractAddr, uint tokensBought) {\n    if (tokensBought < earlyParticipantWhitelist[addr].minCap) throw;\n    if (!isWhiteListed) throw;\n    if (addr != msg.sender && contractAddr != msg.sender) throw;\n    uint newMaxCap = earlyParticipantWhitelist[addr].maxCap;\n    newMaxCap = newMaxCap.minus(tokensBought);\n    earlyParticipantWhitelist[addr] = WhiteListData({status:earlyParticipantWhitelist[addr].status, minCap:0, maxCap:newMaxCap});\n  }\n\n  function updateJoinedCrowdsales(address addr) onlyOwner {\n    joinedCrowdsales[joinedCrowdsalesLen++] = addr;\n  }\n\n  function setLastCrowdsale(address addr) onlyOwner {\n    lastCrowdsale = addr;\n  }\n\n  function clearJoinedCrowdsales() onlyOwner {\n    joinedCrowdsalesLen = 0;\n  }\n\n  function updateJoinedCrowdsalesMultiple(address[] addrs) onlyOwner {\n    clearJoinedCrowdsales();\n    for (uint iter = 0; iter < addrs.length; iter++) {\n      if(joinedCrowdsalesLen == joinedCrowdsales.length) {\n          joinedCrowdsales.length += 1;\n      }\n      joinedCrowdsales[joinedCrowdsalesLen++] = addrs[iter];\n      if (iter == addrs.length - 1)\n        setLastCrowdsale(addrs[iter]);\n    }\n  }\n\n  function setStartsAt(uint time) onlyOwner {\n    if (finalized) throw;\n\n    if (!isUpdatable) throw;\n\n    if(now > time) {\n      throw; // Don't change past\n    }\n\n    if(time > endsAt) {\n      throw;\n    }\n\n    CrowdsaleExt lastCrowdsaleCntrct = CrowdsaleExt(lastCrowdsale);\n    if (lastCrowdsaleCntrct.finalized()) throw;\n\n    startsAt = time;\n    StartsAtChanged(startsAt);\n  }\n\n  /**\n   * Allow crowdsale owner to close early or extend the crowdsale.\n   *\n   * This is useful e.g. for a manual soft cap implementation:\n   * - after X amount is reached determine manual closing\n   *\n   * This may put the crowdsale to an invalid state,\n   * but we trust owners know what they are doing.\n   *\n   */\n  function setEndsAt(uint time) onlyOwner {\n    if (finalized) throw;\n\n    if (!isUpdatable) throw;\n\n    if(now > time) {\n      throw; // Don't change past\n    }\n\n    if(startsAt > time) {\n      throw;\n    }\n\n    CrowdsaleExt lastCrowdsaleCntrct = CrowdsaleExt(lastCrowdsale);\n    if (lastCrowdsaleCntrct.finalized()) throw;\n\n    uint num = 0;\n    for (var i = 0; i < joinedCrowdsalesLen; i++) {\n      if (this == joinedCrowdsales[i]) \n        num = i;\n    }\n\n    if (num + 1 < joinedCrowdsalesLen) {\n      for (var j = num + 1; j < joinedCrowdsalesLen; j++) {\n        CrowdsaleExt crowdsale = CrowdsaleExt(joinedCrowdsales[j]);\n        if (time > crowdsale.startsAt()) throw;\n      }\n    }\n\n    endsAt = time;\n    EndsAtChanged(endsAt);\n  }\n\n  /**\n   * Allow to (re)set pricing strategy.\n   *\n   * Design choice: no state restrictions on the set, so that we can fix fat finger mistakes.\n   */\n  function setPricingStrategy(PricingStrategy _pricingStrategy) onlyOwner {\n    pricingStrategy = _pricingStrategy;\n\n    // Don't allow setting bad agent\n    if(!pricingStrategy.isPricingStrategy()) {\n      throw;\n    }\n  }\n\n  /**\n   * Allow to change the team multisig address in the case of emergency.\n   *\n   * This allows to save a deployed crowdsale wallet in the case the crowdsale has not yet begun\n   * (we have done only few test transactions). After the crowdsale is going\n   * then multisig address stays locked for the safety reasons.\n   */\n  function setMultisig(address addr) public onlyOwner {\n\n    // Change\n    if(investorCount > MAX_INVESTMENTS_BEFORE_MULTISIG_CHANGE) {\n      throw;\n    }\n\n    multisigWallet = addr;\n  }\n\n  /**\n   * Allow load refunds back on the contract for the refunding.\n   *\n   * The team can transfer the funds back on the smart contract in the case the minimum goal was not reached..\n   */\n  function loadRefund() public payable inState(State.Failure) {\n    if(msg.value == 0) throw;\n    loadedRefund = loadedRefund.plus(msg.value);\n  }\n\n  /**\n   * Investors can claim refund.\n   *\n   * Note that any refunds from proxy buyers should be handled separately,\n   * and not through this contract.\n   */\n  function refund() public inState(State.Refunding) {\n    uint256 weiValue = investedAmountOf[msg.sender];\n    if (weiValue == 0) throw;\n    investedAmountOf[msg.sender] = 0;\n    weiRefunded = weiRefunded.plus(weiValue);\n    Refund(msg.sender, weiValue);\n    if (!msg.sender.send(weiValue)) throw;\n  }\n\n  /**\n   * @return true if the crowdsale has raised enough money to be a successful.\n   */\n  function isMinimumGoalReached() public constant returns (bool reached) {\n    return weiRaised >= minimumFundingGoal;\n  }\n\n  /**\n   * Check if the contract relationship looks good.\n   */\n  function isFinalizerSane() public constant returns (bool sane) {\n    return finalizeAgent.isSane();\n  }\n\n  /**\n   * Check if the contract relationship looks good.\n   */\n  function isPricingSane() public constant returns (bool sane) {\n    return pricingStrategy.isSane(address(this));\n  }\n\n  /**\n   * Crowdfund state machine management.\n   *\n   * We make it a function and do not assign the result to a variable, so there is no chance of the variable being stale.\n   */\n  function getState() public constant returns (State) {\n    if(finalized) return State.Finalized;\n    else if (address(finalizeAgent) == 0) return State.Preparing;\n    else if (!finalizeAgent.isSane()) return State.Preparing;\n    else if (!pricingStrategy.isSane(address(this))) return State.Preparing;\n    else if (block.timestamp < startsAt) return State.PreFunding;\n    else if (block.timestamp <= endsAt && !isCrowdsaleFull()) return State.Funding;\n    else if (isMinimumGoalReached()) return State.Success;\n    else if (!isMinimumGoalReached() && weiRaised > 0 && loadedRefund >= weiRaised) return State.Refunding;\n    else return State.Failure;\n  }\n\n  /** This is for manual testing of multisig wallet interaction */\n  function setOwnerTestValue(uint val) onlyOwner {\n    ownerTestValue = val;\n  }\n\n  /** Interface marker. */\n  function isCrowdsale() public constant returns (bool) {\n    return true;\n  }\n\n  //\n  // Modifiers\n  //\n\n  /** Modified allowing execution only if the crowdsale is currently running.  */\n  modifier inState(State state) {\n    if(getState() != state) throw;\n    _;\n  }\n\n\n  //\n  // Abstract functions\n  //\n\n  /**\n   * Check if the current invested breaks our cap rules.\n   *\n   *\n   * The child contract must define their own cap setting rules.\n   * We allow a lot of flexibility through different capping strategies (ETH, token count)\n   * Called from invest().\n   *\n   * @param weiAmount The amount of wei the investor tries to invest in the current transaction\n   * @param tokenAmount The amount of tokens we try to give to the investor in the current transaction\n   * @param weiRaisedTotal What would be our total raised balance after this transaction\n   * @param tokensSoldTotal What would be our total sold tokens count after this transaction\n   *\n   * @return true if taking this investment would break our cap rules\n   */\n  function isBreakingCap(uint weiAmount, uint tokenAmount, uint weiRaisedTotal, uint tokensSoldTotal) constant returns (bool limitBroken);\n\n  function isBreakingInvestorCap(address receiver, uint tokenAmount) constant returns (bool limitBroken);\n\n  /**\n   * Check if the current crowdsale is full and we can no longer sell any tokens.\n   */\n  function isCrowdsaleFull() public constant returns (bool);\n\n  /**\n   * Create new tokens or transfer issued tokens to the investor depending on the cap model.\n   */\n  function assignTokens(address receiver, uint tokenAmount) private;\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n\n\n/**\n * Define interface for releasing the token transfer after a successful crowdsale.\n */\ncontract ReleasableToken is ERC20, Ownable {\n\n  /* The finalizer contract that allows unlift the transfer limits on this token */\n  address public releaseAgent;\n\n  /** A crowdsale contract can release us to the wild if ICO success. If false we are are in transfer lock up period.*/\n  bool public released = false;\n\n  /** Map of agents that are allowed to transfer tokens regardless of the lock down period. These are crowdsale contracts and possible the team multisig itself. */\n  mapping (address => bool) public transferAgents;\n\n  /**\n   * Limit token transfer until the crowdsale is over.\n   *\n   */\n  modifier canTransfer(address _sender) {\n\n    if(!released) {\n        if(!transferAgents[_sender]) {\n            throw;\n        }\n    }\n\n    _;\n  }\n\n  /**\n   * Set the contract that can call release and make the token transferable.\n   *\n   * Design choice. Allow reset the release agent to fix fat finger mistakes.\n   */\n  function setReleaseAgent(address addr) onlyOwner inReleaseState(false) public {\n\n    // We don't do interface check here as we might want to a normal wallet address to act as a release agent\n    releaseAgent = addr;\n  }\n\n  /**\n   * Owner can allow a particular address (a crowdsale contract) to transfer tokens despite the lock up period.\n   */\n  function setTransferAgent(address addr, bool state) onlyOwner inReleaseState(false) public {\n    transferAgents[addr] = state;\n  }\n\n  /**\n   * One way function to release the tokens to the wild.\n   *\n   * Can be called only from the release agent that is the final ICO contract. It is only called if the crowdsale has been success (first milestone reached).\n   */\n  function releaseTokenTransfer() public onlyReleaseAgent {\n    released = true;\n  }\n\n  /** The function can be called only before or after the tokens have been releasesd */\n  modifier inReleaseState(bool releaseState) {\n    if(releaseState != released) {\n        throw;\n    }\n    _;\n  }\n\n  /** The function can be called only by a whitelisted release agent. */\n  modifier onlyReleaseAgent() {\n    if(msg.sender != releaseAgent) {\n        throw;\n    }\n    _;\n  }\n\n  function transfer(address _to, uint _value) canTransfer(msg.sender) returns (bool success) {\n    // Call StandardToken.transfer()\n   return super.transfer(_to, _value);\n  }\n\n  function transferFrom(address _from, address _to, uint _value) canTransfer(_from) returns (bool success) {\n    // Call StandardToken.transferForm()\n    return super.transferFrom(_from, _to, _value);\n  }\n\n}\n\n\n/**\n * A finalize agent that does nothing.\n *\n * - Token transfer must be manually released by the owner\n */\ncontract NullFinalizeAgentExt is FinalizeAgent {\n\n  CrowdsaleExt public crowdsale;\n\n  function NullFinalizeAgentExt(CrowdsaleExt _crowdsale) {\n    crowdsale = _crowdsale;\n  }\n\n  /** Check that we can release the token */\n  function isSane() public constant returns (bool) {\n    return true;\n  }\n\n  /** Called once by crowdsale finalize() if the sale was success. */\n  function finalizeCrowdsale() public {\n  }\n\n}\n"
            },
            "pricingStrategy" : {
                "abiConstructor" : [],
                "addr" : [],
                "abi" : [
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isPricingStrategy",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isUpdatable",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "calculatePrice",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "value"
                            },
                            {
                                "type" : "uint256",
                                "name" : "weiRaised"
                            },
                            {
                                "type" : "uint256",
                                "name" : "tokensSold"
                            },
                            {
                                "type" : "address",
                                "name" : "msgSender"
                            },
                            {
                                "type" : "uint256",
                                "name" : "decimals"
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "lastCrowdsale",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setLastCrowdsale",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "updateRate",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "newOneTokenInWei"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "oneTokenInWei",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "owner",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isSane",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "crowdsale"
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isPresalePurchase",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "purchaser"
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "transferOwnership",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "newOwner"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "constructor",
                        "payable" : false,
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "_oneTokenInWei"
                            },
                            {
                                "type" : "bool",
                                "name" : "_isUpdatable"
                            }
                        ]
                    },
                    {
                        "type" : "event",
                        "name" : "RateChanged",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "newOneTokenInWei",
                                "indexed" : false
                            }
                        ],
                        "anonymous" : false
                    },
                    {
                        "type" : "event",
                        "name" : "OwnershipTransferred",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "previousOwner",
                                "indexed" : true
                            },
                            {
                                "type" : "address",
                                "name" : "newOwner",
                                "indexed" : true
                            }
                        ],
                        "anonymous" : false
                    }
                ],
                "bin" : "6060604052341561000c57fe5b6040516040806105b68339810160405280516020909101515b5b60008054600160a060020a03191633600160a060020a03161790555b60005433600160a060020a0390811691161461005e5760006000fd5b6000821161006c5760006000fd5b60018290556002805460ff19168215151790555b5b50505b610523806100936000396000f300606060405236156100935763ffffffff60e060020a60003504166304bbc25581146100955780630e1d2ec8146100b957806318a4155e146100dd5780634f97f97f1461011757806357dc26581461014357806369ea17711461016157806384e3ac94146101765780638da5cb5b146101985780638e768288146101c4578063f14ae17d146101f4578063f2fde38b14610224575bfe5b341561009d57fe5b6100a5610242565b604080519115158252519081900360200190f35b34156100c157fe5b6100a5610248565b604080519115158252519081900360200190f35b34156100e557fe5b610105600435602435604435600160a060020a0360643516608435610251565b60408051918252519081900360200190f35b341561011f57fe5b6101276102ec565b60408051600160a060020a039092168252519081900360200190f35b341561014b57fe5b61015f600160a060020a0360043516610300565b005b341561016957fe5b61015f60043561034e565b005b341561017e57fe5b61010561043a565b60408051918252519081900360200190f35b34156101a057fe5b610127610440565b60408051600160a060020a039092168252519081900360200190f35b34156101cc57fe5b6100a5600160a060020a036004351661044f565b604080519115158252519081900360200190f35b34156101fc57fe5b6100a5600160a060020a0360043516610457565b604080519115158252519081900360200190f35b341561022c57fe5b61015f600160a060020a036004351661045f565b005b60015b90565b60025460ff1681565b6000600082600a0a90506001548773__:SafeMathLibExt_______________________631d3b9edf9091846000604051602001526040518363ffffffff1660e060020a028152600401808381526020018281526020019250505060206040518083038186803b15156102bf57fe5b6102c65a03f415156102cd57fe5b50506040515190508115156102de57fe5b0491505b5095945050505050565b6002546101009004600160a060020a031681565b60005433600160a060020a0390811691161461031c5760006000fd5b6002805474ffffffffffffffffffffffffffffffffffffffff001916610100600160a060020a038416021790555b5b50565b6000805433600160a060020a0390811691161461036b5760006000fd5b60025460ff16151561037d5760006000fd5b600260019054906101000a9004600160a060020a0316905080600160a060020a031663b3f05b976000604051602001526040518163ffffffff1660e060020a028152600401809050602060405180830381600087803b15156103db57fe5b6102c65a03f115156103e957fe5b5050604051511590506103fc5760006000fd5b60018290556040805183815290517f595a30f13a69b616c4d568e2a2b7875fdfe86e4300a049953c76ee278f8f3f109181900360200190a15b5b5050565b60015481565b600054600160a060020a031681565b60015b919050565b60005b919050565b60005433600160a060020a0390811691161461047b5760006000fd5b600160a060020a03811615156104915760006000fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b505600a165627a7a723058208376711f247f0272593f3cf3492e8828713b8981bfa0dec31f8f961bfd0dfc7f0029",
                "src" : "// Created using ICO Wizard https://github.com/oraclesorg/ico-wizard by Oracles Network \npragma solidity ^0.4.11;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  uint256 public totalSupply;\n  function balanceOf(address who) public constant returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address public owner;\n\n\n  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  function Ownable() {\n    owner = msg.sender;\n  }\n\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(msg.sender == owner);\n    _;\n  }\n\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address newOwner) onlyOwner public {\n    require(newOwner != address(0));\n    OwnershipTransferred(owner, newOwner);\n    owner = newOwner;\n  }\n\n}\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n/*\n * Haltable\n *\n * Abstract contract that allows children to implement an\n * emergency stop mechanism. Differs from Pausable by causing a throw when in halt mode.\n *\n *\n * Originally envisioned in FirstBlood ICO contract.\n */\ncontract Haltable is Ownable {\n  bool public halted;\n\n  modifier stopInEmergency {\n    if (halted) throw;\n    _;\n  }\n\n  modifier stopNonOwnersInEmergency {\n    if (halted && msg.sender != owner) throw;\n    _;\n  }\n\n  modifier onlyInEmergency {\n    if (!halted) throw;\n    _;\n  }\n\n  // called by the owner on emergency, triggers stopped state\n  function halt() external onlyOwner {\n    halted = true;\n  }\n\n  // called by the owner on end of emergency, returns to normal state\n  function unhalt() external onlyOwner onlyInEmergency {\n    halted = false;\n  }\n\n}\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Finalize agent defines what happens at the end of succeseful crowdsale.\n *\n * - Allocate tokens for founders, bounties and community\n * - Make tokens transferable\n * - etc.\n */\ncontract FinalizeAgent {\n\n  function isFinalizeAgent() public constant returns(bool) {\n    return true;\n  }\n\n  /** Return true if we can run finalizeCrowdsale() properly.\n   *\n   * This is a safety check function that doesn't allow crowdsale to begin\n   * unless the finalizer has been set up properly.\n   */\n  function isSane() public constant returns (bool);\n\n  /** Called once by crowdsale finalize() if the sale was success. */\n  function finalizeCrowdsale();\n\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n\n\n\n\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public constant returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\n\n/**\n * A token that defines fractional units as decimals.\n */\ncontract FractionalERC20Ext is ERC20 {\n\n  uint public decimals;\n  uint public minCap;\n\n}\n\n\n\n/**\n * Abstract base contract for token sales.\n *\n * Handle\n * - start and end dates\n * - accepting investments\n * - minimum funding goal and refund\n * - various statistics during the crowdfund\n * - different pricing strategies\n * - different investment policies (require server side customer id, allow only whitelisted addresses)\n *\n */\ncontract CrowdsaleExt is Haltable {\n\n  /* Max investment count when we are still allowed to change the multisig address */\n  uint public MAX_INVESTMENTS_BEFORE_MULTISIG_CHANGE = 5;\n\n  using SafeMathLibExt for uint;\n\n  /* The token we are selling */\n  FractionalERC20Ext public token;\n\n  /* How we are going to price our offering */\n  PricingStrategy public pricingStrategy;\n\n  /* Post-success callback */\n  FinalizeAgent public finalizeAgent;\n\n  /* tokens will be transfered from this address */\n  address public multisigWallet;\n\n  /* if the funding goal is not reached, investors may withdraw their funds */\n  uint public minimumFundingGoal;\n\n  /* the UNIX timestamp start date of the crowdsale */\n  uint public startsAt;\n\n  /* the UNIX timestamp end date of the crowdsale */\n  uint public endsAt;\n\n  /* the number of tokens already sold through this contract*/\n  uint public tokensSold = 0;\n\n  /* How many wei of funding we have raised */\n  uint public weiRaised = 0;\n\n  /* Calculate incoming funds from presale contracts and addresses */\n  uint public presaleWeiRaised = 0;\n\n  /* How many distinct addresses have invested */\n  uint public investorCount = 0;\n\n  /* How much wei we have returned back to the contract after a failed crowdfund. */\n  uint public loadedRefund = 0;\n\n  /* How much wei we have given back to investors.*/\n  uint public weiRefunded = 0;\n\n  /* Has this crowdsale been finalized */\n  bool public finalized;\n\n  /* Do we need to have unique contributor id for each customer */\n  bool public requireCustomerId;\n\n  bool public isWhiteListed;\n\n  address[] public joinedCrowdsales;\n  uint public joinedCrowdsalesLen = 0;\n\n  address public lastCrowdsale;\n\n  /**\n    * Do we verify that contributor has been cleared on the server side (accredited investors only).\n    * This method was first used in FirstBlood crowdsale to ensure all contributors have accepted terms on sale (on the web).\n    */\n  bool public requiredSignedAddress;\n\n  /* Server side address that signed allowed contributors (Ethereum addresses) that can participate the crowdsale */\n  address public signerAddress;\n\n  /** How much ETH each address has invested to this crowdsale */\n  mapping (address => uint256) public investedAmountOf;\n\n  /** How much tokens this crowdsale has credited for each investor address */\n  mapping (address => uint256) public tokenAmountOf;\n\n  struct WhiteListData {\n    bool status;\n    uint minCap;\n    uint maxCap;\n  }\n\n  //is crowdsale updatable\n  bool public isUpdatable;\n\n  /** Addresses that are allowed to invest even before ICO offical opens. For testing, for ICO partners, etc. */\n  mapping (address => WhiteListData) public earlyParticipantWhitelist;\n\n  /** This is for manul testing for the interaction from owner wallet. You can set it to any value and inspect this in blockchain explorer to see that crowdsale interaction works. */\n  uint public ownerTestValue;\n\n  /** State machine\n   *\n   * - Preparing: All contract initialization calls and variables have not been set yet\n   * - Prefunding: We have not passed start time yet\n   * - Funding: Active crowdsale\n   * - Success: Minimum funding goal reached\n   * - Failure: Minimum funding goal not reached before ending time\n   * - Finalized: The finalized has been called and succesfully executed\n   * - Refunding: Refunds are loaded on the contract for reclaim.\n   */\n  enum State{Unknown, Preparing, PreFunding, Funding, Success, Failure, Finalized, Refunding}\n\n  // A new investment was made\n  event Invested(address investor, uint weiAmount, uint tokenAmount, uint128 customerId);\n\n  // Refund was processed for a contributor\n  event Refund(address investor, uint weiAmount);\n\n  // The rules were changed what kind of investments we accept\n  event InvestmentPolicyChanged(bool newRequireCustomerId, bool newRequiredSignedAddress, address newSignerAddress);\n\n  // Address early participation whitelist status changed\n  event Whitelisted(address addr, bool status);\n\n  // Crowdsale start time has been changed\n  event StartsAtChanged(uint newStartsAt);\n\n  // Crowdsale end time has been changed\n  event EndsAtChanged(uint newEndsAt);\n\n  function CrowdsaleExt(address _token, PricingStrategy _pricingStrategy, address _multisigWallet, uint _start, uint _end, uint _minimumFundingGoal, bool _isUpdatable, bool _isWhiteListed) {\n\n    owner = msg.sender;\n\n    token = FractionalERC20Ext(_token);\n\n    setPricingStrategy(_pricingStrategy);\n\n    multisigWallet = _multisigWallet;\n    if(multisigWallet == 0) {\n        throw;\n    }\n\n    if(_start == 0) {\n        throw;\n    }\n\n    startsAt = _start;\n\n    if(_end == 0) {\n        throw;\n    }\n\n    endsAt = _end;\n\n    // Don't mess the dates\n    if(startsAt >= endsAt) {\n        throw;\n    }\n\n    // Minimum funding goal can be zero\n    minimumFundingGoal = _minimumFundingGoal;\n\n    isUpdatable = _isUpdatable;\n\n    isWhiteListed = _isWhiteListed;\n  }\n\n  /**\n   * Don't expect to just send in money and get tokens.\n   */\n  function() payable {\n    throw;\n  }\n\n  /**\n   * Make an investment.\n   *\n   * Crowdsale must be running for one to invest.\n   * We must have not pressed the emergency brake.\n   *\n   * @param receiver The Ethereum address who receives the tokens\n   * @param customerId (optional) UUID v4 to track the successful payments on the server side\n   *\n   */\n  function investInternal(address receiver, uint128 customerId) stopInEmergency private {\n\n    // Determine if it's a good time to accept investment from this participant\n    if(getState() == State.PreFunding) {\n      // Are we whitelisted for early deposit\n      throw;\n    } else if(getState() == State.Funding) {\n      // Retail participants can only come in when the crowdsale is running\n      // pass\n      if(isWhiteListed) {\n        if(!earlyParticipantWhitelist[receiver].status) {\n          throw;\n        }\n      }\n    } else {\n      // Unwanted state\n      throw;\n    }\n\n    uint weiAmount = msg.value;\n\n    // Account presale sales separately, so that they do not count against pricing tranches\n    uint tokenAmount = pricingStrategy.calculatePrice(weiAmount, weiRaised - presaleWeiRaised, tokensSold, msg.sender, token.decimals());\n\n    if(tokenAmount == 0) {\n      // Dust transaction\n      throw;\n    }\n\n    if(isWhiteListed) {\n      if(tokenAmount < earlyParticipantWhitelist[receiver].minCap && tokenAmountOf[receiver] == 0) {\n        // tokenAmount < minCap for investor\n        throw;\n      }\n      if(tokenAmount > earlyParticipantWhitelist[receiver].maxCap) {\n        // tokenAmount > maxCap for investor\n        throw;\n      }\n\n      // Check that we did not bust the investor's cap\n      if (isBreakingInvestorCap(receiver, tokenAmount)) {\n        throw;\n      }\n    } else {\n      if(tokenAmount < token.minCap() && tokenAmountOf[receiver] == 0) {\n        throw;\n      }\n    }\n\n    if(investedAmountOf[receiver] == 0) {\n       // A new investor\n       investorCount++;\n    }\n\n    // Update investor\n    investedAmountOf[receiver] = investedAmountOf[receiver].plus(weiAmount);\n    tokenAmountOf[receiver] = tokenAmountOf[receiver].plus(tokenAmount);\n\n    // Update totals\n    weiRaised = weiRaised.plus(weiAmount);\n    tokensSold = tokensSold.plus(tokenAmount);\n\n    if(pricingStrategy.isPresalePurchase(receiver)) {\n        presaleWeiRaised = presaleWeiRaised.plus(weiAmount);\n    }\n\n    // Check that we did not bust the cap\n    if(isBreakingCap(weiAmount, tokenAmount, weiRaised, tokensSold)) {\n      throw;\n    }\n\n    assignTokens(receiver, tokenAmount);\n\n    // Pocket the money\n    if(!multisigWallet.send(weiAmount)) throw;\n\n    if (isWhiteListed) {\n      uint num = 0;\n      for (var i = 0; i < joinedCrowdsalesLen; i++) {\n        if (this == joinedCrowdsales[i]) \n          num = i;\n      }\n\n      if (num + 1 < joinedCrowdsalesLen) {\n        for (var j = num + 1; j < joinedCrowdsalesLen; j++) {\n          CrowdsaleExt crowdsale = CrowdsaleExt(joinedCrowdsales[j]);\n          crowdsale.updateEarlyParicipantWhitelist(msg.sender, this, tokenAmount);\n        }\n      }\n    }\n\n    // Tell us invest was success\n    Invested(receiver, weiAmount, tokenAmount, customerId);\n  }\n\n  /**\n   * Preallocate tokens for the early investors.\n   *\n   * Preallocated tokens have been sold before the actual crowdsale opens.\n   * This function mints the tokens and moves the crowdsale needle.\n   *\n   * Investor count is not handled; it is assumed this goes for multiple investors\n   * and the token distribution happens outside the smart contract flow.\n   *\n   * No money is exchanged, as the crowdsale team already have received the payment.\n   *\n   * @param fullTokens tokens as full tokens - decimal places added internally\n   * @param weiPrice Price of a single full token in wei\n   *\n   */\n  function preallocate(address receiver, uint fullTokens, uint weiPrice) public onlyOwner {\n\n    uint tokenAmount = fullTokens * 10**token.decimals();\n    uint weiAmount = weiPrice * fullTokens; // This can be also 0, we give out tokens for free\n\n    weiRaised = weiRaised.plus(weiAmount);\n    tokensSold = tokensSold.plus(tokenAmount);\n\n    investedAmountOf[receiver] = investedAmountOf[receiver].plus(weiAmount);\n    tokenAmountOf[receiver] = tokenAmountOf[receiver].plus(tokenAmount);\n\n    assignTokens(receiver, tokenAmount);\n\n    // Tell us invest was success\n    Invested(receiver, weiAmount, tokenAmount, 0);\n  }\n\n  /**\n   * Allow anonymous contributions to this crowdsale.\n   */\n  function investWithSignedAddress(address addr, uint128 customerId, uint8 v, bytes32 r, bytes32 s) public payable {\n     bytes32 hash = sha256(addr);\n     if (ecrecover(hash, v, r, s) != signerAddress) throw;\n     if(customerId == 0) throw;  // UUIDv4 sanity check\n     investInternal(addr, customerId);\n  }\n\n  /**\n   * Track who is the customer making the payment so we can send thank you email.\n   */\n  function investWithCustomerId(address addr, uint128 customerId) public payable {\n    if(requiredSignedAddress) throw; // Crowdsale allows only server-side signed participants\n    if(customerId == 0) throw;  // UUIDv4 sanity check\n    investInternal(addr, customerId);\n  }\n\n  /**\n   * Allow anonymous contributions to this crowdsale.\n   */\n  function invest(address addr) public payable {\n    if(requireCustomerId) throw; // Crowdsale needs to track participants for thank you email\n    if(requiredSignedAddress) throw; // Crowdsale allows only server-side signed participants\n    investInternal(addr, 0);\n  }\n\n  /**\n   * Invest to tokens, recognize the payer and clear his address.\n   *\n   */\n  function buyWithSignedAddress(uint128 customerId, uint8 v, bytes32 r, bytes32 s) public payable {\n    investWithSignedAddress(msg.sender, customerId, v, r, s);\n  }\n\n  /**\n   * Invest to tokens, recognize the payer.\n   *\n   */\n  function buyWithCustomerId(uint128 customerId) public payable {\n    investWithCustomerId(msg.sender, customerId);\n  }\n\n  /**\n   * The basic entry point to participate the crowdsale process.\n   *\n   * Pay for funding, get invested tokens back in the sender address.\n   */\n  function buy() public payable {\n    invest(msg.sender);\n  }\n\n  /**\n   * Finalize a succcesful crowdsale.\n   *\n   * The owner can triggre a call the contract that provides post-crowdsale actions, like releasing the tokens.\n   */\n  function finalize() public inState(State.Success) onlyOwner stopInEmergency {\n\n    // Already finalized\n    if(finalized) {\n      throw;\n    }\n\n    // Finalizing is optional. We only call it if we are given a finalizing agent.\n    if(address(finalizeAgent) != 0) {\n      finalizeAgent.finalizeCrowdsale();\n    }\n\n    finalized = true;\n  }\n\n  /**\n   * Allow to (re)set finalize agent.\n   *\n   * Design choice: no state restrictions on setting this, so that we can fix fat finger mistakes.\n   */\n  function setFinalizeAgent(FinalizeAgent addr) onlyOwner {\n    finalizeAgent = addr;\n\n    // Don't allow setting bad agent\n    if(!finalizeAgent.isFinalizeAgent()) {\n      throw;\n    }\n  }\n\n  /**\n   * Set policy do we need to have server-side customer ids for the investments.\n   *\n   */\n  function setRequireCustomerId(bool value) onlyOwner {\n    requireCustomerId = value;\n    InvestmentPolicyChanged(requireCustomerId, requiredSignedAddress, signerAddress);\n  }\n\n  /**\n   * Set policy if all investors must be cleared on the server side first.\n   *\n   * This is e.g. for the accredited investor clearing.\n   *\n   */\n  function setRequireSignedAddress(bool value, address _signerAddress) onlyOwner {\n    requiredSignedAddress = value;\n    signerAddress = _signerAddress;\n    InvestmentPolicyChanged(requireCustomerId, requiredSignedAddress, signerAddress);\n  }\n\n  /**\n   * Allow addresses to do early participation.\n   *\n   * TODO: Fix spelling error in the name\n   */\n  function setEarlyParicipantWhitelist(address addr, bool status, uint minCap, uint maxCap) onlyOwner {\n    if (!isWhiteListed) throw;\n    earlyParticipantWhitelist[addr] = WhiteListData({status:status, minCap:minCap, maxCap:maxCap});\n    Whitelisted(addr, status);\n  }\n\n  function setEarlyParicipantsWhitelist(address[] addrs, bool[] statuses, uint[] minCaps, uint[] maxCaps) onlyOwner {\n    if (!isWhiteListed) throw;\n    for (uint iterator = 0; iterator < addrs.length; iterator++) {\n      setEarlyParicipantWhitelist(addrs[iterator], statuses[iterator], minCaps[iterator], maxCaps[iterator]);\n    }\n  }\n\n  function updateEarlyParicipantWhitelist(address addr, address contractAddr, uint tokensBought) {\n    if (tokensBought < earlyParticipantWhitelist[addr].minCap) throw;\n    if (!isWhiteListed) throw;\n    if (addr != msg.sender && contractAddr != msg.sender) throw;\n    uint newMaxCap = earlyParticipantWhitelist[addr].maxCap;\n    newMaxCap = newMaxCap.minus(tokensBought);\n    earlyParticipantWhitelist[addr] = WhiteListData({status:earlyParticipantWhitelist[addr].status, minCap:0, maxCap:newMaxCap});\n  }\n\n  function updateJoinedCrowdsales(address addr) onlyOwner {\n    joinedCrowdsales[joinedCrowdsalesLen++] = addr;\n  }\n\n  function setLastCrowdsale(address addr) onlyOwner {\n    lastCrowdsale = addr;\n  }\n\n  function clearJoinedCrowdsales() onlyOwner {\n    joinedCrowdsalesLen = 0;\n  }\n\n  function updateJoinedCrowdsalesMultiple(address[] addrs) onlyOwner {\n    clearJoinedCrowdsales();\n    for (uint iter = 0; iter < addrs.length; iter++) {\n      if(joinedCrowdsalesLen == joinedCrowdsales.length) {\n          joinedCrowdsales.length += 1;\n      }\n      joinedCrowdsales[joinedCrowdsalesLen++] = addrs[iter];\n      if (iter == addrs.length - 1)\n        setLastCrowdsale(addrs[iter]);\n    }\n  }\n\n  function setStartsAt(uint time) onlyOwner {\n    if (finalized) throw;\n\n    if (!isUpdatable) throw;\n\n    if(now > time) {\n      throw; // Don't change past\n    }\n\n    if(time > endsAt) {\n      throw;\n    }\n\n    CrowdsaleExt lastCrowdsaleCntrct = CrowdsaleExt(lastCrowdsale);\n    if (lastCrowdsaleCntrct.finalized()) throw;\n\n    startsAt = time;\n    StartsAtChanged(startsAt);\n  }\n\n  /**\n   * Allow crowdsale owner to close early or extend the crowdsale.\n   *\n   * This is useful e.g. for a manual soft cap implementation:\n   * - after X amount is reached determine manual closing\n   *\n   * This may put the crowdsale to an invalid state,\n   * but we trust owners know what they are doing.\n   *\n   */\n  function setEndsAt(uint time) onlyOwner {\n    if (finalized) throw;\n\n    if (!isUpdatable) throw;\n\n    if(now > time) {\n      throw; // Don't change past\n    }\n\n    if(startsAt > time) {\n      throw;\n    }\n\n    CrowdsaleExt lastCrowdsaleCntrct = CrowdsaleExt(lastCrowdsale);\n    if (lastCrowdsaleCntrct.finalized()) throw;\n\n    uint num = 0;\n    for (var i = 0; i < joinedCrowdsalesLen; i++) {\n      if (this == joinedCrowdsales[i]) \n        num = i;\n    }\n\n    if (num + 1 < joinedCrowdsalesLen) {\n      for (var j = num + 1; j < joinedCrowdsalesLen; j++) {\n        CrowdsaleExt crowdsale = CrowdsaleExt(joinedCrowdsales[j]);\n        if (time > crowdsale.startsAt()) throw;\n      }\n    }\n\n    endsAt = time;\n    EndsAtChanged(endsAt);\n  }\n\n  /**\n   * Allow to (re)set pricing strategy.\n   *\n   * Design choice: no state restrictions on the set, so that we can fix fat finger mistakes.\n   */\n  function setPricingStrategy(PricingStrategy _pricingStrategy) onlyOwner {\n    pricingStrategy = _pricingStrategy;\n\n    // Don't allow setting bad agent\n    if(!pricingStrategy.isPricingStrategy()) {\n      throw;\n    }\n  }\n\n  /**\n   * Allow to change the team multisig address in the case of emergency.\n   *\n   * This allows to save a deployed crowdsale wallet in the case the crowdsale has not yet begun\n   * (we have done only few test transactions). After the crowdsale is going\n   * then multisig address stays locked for the safety reasons.\n   */\n  function setMultisig(address addr) public onlyOwner {\n\n    // Change\n    if(investorCount > MAX_INVESTMENTS_BEFORE_MULTISIG_CHANGE) {\n      throw;\n    }\n\n    multisigWallet = addr;\n  }\n\n  /**\n   * Allow load refunds back on the contract for the refunding.\n   *\n   * The team can transfer the funds back on the smart contract in the case the minimum goal was not reached..\n   */\n  function loadRefund() public payable inState(State.Failure) {\n    if(msg.value == 0) throw;\n    loadedRefund = loadedRefund.plus(msg.value);\n  }\n\n  /**\n   * Investors can claim refund.\n   *\n   * Note that any refunds from proxy buyers should be handled separately,\n   * and not through this contract.\n   */\n  function refund() public inState(State.Refunding) {\n    uint256 weiValue = investedAmountOf[msg.sender];\n    if (weiValue == 0) throw;\n    investedAmountOf[msg.sender] = 0;\n    weiRefunded = weiRefunded.plus(weiValue);\n    Refund(msg.sender, weiValue);\n    if (!msg.sender.send(weiValue)) throw;\n  }\n\n  /**\n   * @return true if the crowdsale has raised enough money to be a successful.\n   */\n  function isMinimumGoalReached() public constant returns (bool reached) {\n    return weiRaised >= minimumFundingGoal;\n  }\n\n  /**\n   * Check if the contract relationship looks good.\n   */\n  function isFinalizerSane() public constant returns (bool sane) {\n    return finalizeAgent.isSane();\n  }\n\n  /**\n   * Check if the contract relationship looks good.\n   */\n  function isPricingSane() public constant returns (bool sane) {\n    return pricingStrategy.isSane(address(this));\n  }\n\n  /**\n   * Crowdfund state machine management.\n   *\n   * We make it a function and do not assign the result to a variable, so there is no chance of the variable being stale.\n   */\n  function getState() public constant returns (State) {\n    if(finalized) return State.Finalized;\n    else if (address(finalizeAgent) == 0) return State.Preparing;\n    else if (!finalizeAgent.isSane()) return State.Preparing;\n    else if (!pricingStrategy.isSane(address(this))) return State.Preparing;\n    else if (block.timestamp < startsAt) return State.PreFunding;\n    else if (block.timestamp <= endsAt && !isCrowdsaleFull()) return State.Funding;\n    else if (isMinimumGoalReached()) return State.Success;\n    else if (!isMinimumGoalReached() && weiRaised > 0 && loadedRefund >= weiRaised) return State.Refunding;\n    else return State.Failure;\n  }\n\n  /** This is for manual testing of multisig wallet interaction */\n  function setOwnerTestValue(uint val) onlyOwner {\n    ownerTestValue = val;\n  }\n\n  /** Interface marker. */\n  function isCrowdsale() public constant returns (bool) {\n    return true;\n  }\n\n  //\n  // Modifiers\n  //\n\n  /** Modified allowing execution only if the crowdsale is currently running.  */\n  modifier inState(State state) {\n    if(getState() != state) throw;\n    _;\n  }\n\n\n  //\n  // Abstract functions\n  //\n\n  /**\n   * Check if the current invested breaks our cap rules.\n   *\n   *\n   * The child contract must define their own cap setting rules.\n   * We allow a lot of flexibility through different capping strategies (ETH, token count)\n   * Called from invest().\n   *\n   * @param weiAmount The amount of wei the investor tries to invest in the current transaction\n   * @param tokenAmount The amount of tokens we try to give to the investor in the current transaction\n   * @param weiRaisedTotal What would be our total raised balance after this transaction\n   * @param tokensSoldTotal What would be our total sold tokens count after this transaction\n   *\n   * @return true if taking this investment would break our cap rules\n   */\n  function isBreakingCap(uint weiAmount, uint tokenAmount, uint weiRaisedTotal, uint tokensSoldTotal) constant returns (bool limitBroken);\n\n  function isBreakingInvestorCap(address receiver, uint tokenAmount) constant returns (bool limitBroken);\n\n  /**\n   * Check if the current crowdsale is full and we can no longer sell any tokens.\n   */\n  function isCrowdsaleFull() public constant returns (bool);\n\n  /**\n   * Create new tokens or transfer issued tokens to the investor depending on the cap model.\n   */\n  function assignTokens(address receiver, uint tokenAmount) private;\n}\n\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Interface for defining crowdsale pricing.\n */\ncontract PricingStrategy {\n\n  /** Interface declaration. */\n  function isPricingStrategy() public constant returns (bool) {\n    return true;\n  }\n\n  /** Self check if all references are correctly set.\n   *\n   * Checks that pricing strategy matches crowdsale parameters.\n   */\n  function isSane(address crowdsale) public constant returns (bool) {\n    return true;\n  }\n\n  /**\n   * @dev Pricing tells if this is a presale purchase or not.\n     @param purchaser Address of the purchaser\n     @return False by default, true if a presale purchaser\n   */\n  function isPresalePurchase(address purchaser) public constant returns (bool) {\n    return false;\n  }\n\n  /**\n   * When somebody tries to buy tokens for X eth, calculate how many tokens they get.\n   *\n   *\n   * @param value - What is the value of the transaction send in as wei\n   * @param tokensSold - how much tokens have been sold this far\n   * @param weiRaised - how much money has been raised this far in the main token sale - this number excludes presale\n   * @param msgSender - who is the investor of this transaction\n   * @param decimals - how many decimal units the token has\n   * @return Amount of tokens the investor receives\n   */\n  function calculatePrice(uint value, uint weiRaised, uint tokensSold, address msgSender, uint decimals) public constant returns (uint tokenAmount);\n}\n\n/**\n * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net\n *\n * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt\n */\n\n\n\n/**\n * Safe unsigned safe math.\n *\n * https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736#.750gwtwli\n *\n * Originally from https://raw.githubusercontent.com/AragonOne/zeppelin-solidity/master/contracts/SafeMathLib.sol\n *\n * Maintained here until merged to mainline zeppelin-solidity.\n *\n */\nlibrary SafeMathLibExt {\n\n  function times(uint a, uint b) returns (uint) {\n    uint c = a * b;\n    assert(a == 0 || c / a == b);\n    return c;\n  }\n\n  function divides(uint a, uint b) returns (uint) {\n    assert(b > 0);\n    uint c = a / b;\n    assert(a == b * c + a % b);\n    return c;\n  }\n\n  function minus(uint a, uint b) returns (uint) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  function plus(uint a, uint b) returns (uint) {\n    uint c = a + b;\n    assert(c>=a);\n    return c;\n  }\n\n}\n\n\n/**\n * Fixed crowdsale pricing - everybody gets the same price.\n */\ncontract FlatPricingExt is PricingStrategy, Ownable {\n\n  using SafeMathLibExt for uint;\n\n  /* How many weis one token costs */\n  uint public oneTokenInWei;\n\n  bool public isUpdatable;\n\n  address public lastCrowdsale;\n\n  // Crowdsale rate has been changed\n  event RateChanged(uint newOneTokenInWei);\n\n  function FlatPricingExt(uint _oneTokenInWei, bool _isUpdatable) onlyOwner {\n    require(_oneTokenInWei > 0);\n    oneTokenInWei = _oneTokenInWei;\n\n    isUpdatable = _isUpdatable;\n  }\n\n  function setLastCrowdsale(address addr) onlyOwner {\n    lastCrowdsale = addr;\n  }\n\n  function updateRate(uint newOneTokenInWei) onlyOwner {\n    if (!isUpdatable) throw;\n\n    CrowdsaleExt lastCrowdsaleCntrct = CrowdsaleExt(lastCrowdsale);\n    if (lastCrowdsaleCntrct.finalized()) throw;\n\n    oneTokenInWei = newOneTokenInWei;\n    RateChanged(newOneTokenInWei);\n  }\n\n  /**\n   * Calculate the current price for buy in amount.\n   *\n   */\n  function calculatePrice(uint value, uint weiRaised, uint tokensSold, address msgSender, uint decimals) public constant returns (uint) {\n    uint multiplier = 10 ** decimals;\n    return value.times(multiplier) / oneTokenInWei;\n  }\n\n}\n"
            },
            "crowdsale" : {
                "abiConstructor" : [],
                "addr" : [],
                "abi" : [
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "ownerTestValue",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "requireCustomerId",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : true,
                        "outputs" : [],
                        "name" : "invest",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : "limitBroken"
                            }
                        ],
                        "name" : "isBreakingInvestorCap",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            },
                            {
                                "type" : "uint256",
                                "name" : "tokenAmount"
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "updateJoinedCrowdsalesMultiple",
                        "inputs" : [
                            {
                                "type" : "address[]",
                                "name" : "addrs"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : "sane"
                            }
                        ],
                        "name" : "isPricingSane",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "endsAt",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setEarlyParicipantWhitelist",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            },
                            {
                                "type" : "bool",
                                "name" : "status"
                            },
                            {
                                "type" : "uint256",
                                "name" : "minCap"
                            },
                            {
                                "type" : "uint256",
                                "name" : "maxCap"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isUpdatable",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "minimumFundingGoal",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint8",
                                "name" : ""
                            }
                        ],
                        "name" : "getState",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setFinalizeAgent",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : true,
                        "outputs" : [],
                        "name" : "investWithSignedAddress",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            },
                            {
                                "type" : "uint128",
                                "name" : "customerId"
                            },
                            {
                                "type" : "uint8",
                                "name" : "v"
                            },
                            {
                                "type" : "bytes32",
                                "name" : "r"
                            },
                            {
                                "type" : "bytes32",
                                "name" : "s"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "investedAmountOf",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "finalizeAgent",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setMaximumSellableTokens",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "tokens"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "preallocate",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "receiver"
                            },
                            {
                                "type" : "uint256",
                                "name" : "fullTokens"
                            },
                            {
                                "type" : "uint256",
                                "name" : "weiPrice"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "maximumSellableTokens",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "weiRaised",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isCrowdsale",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "finalize",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "lastCrowdsale",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setPricingStrategy",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "_pricingStrategy"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "tokensSold",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setLastCrowdsale",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "refund",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "signerAddress",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "weiRefunded",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "halt",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "MAX_INVESTMENTS_BEFORE_MULTISIG_CHANGE",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setEndsAt",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "time"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "pricingStrategy",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "loadedRefund",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setEarlyParicipantsWhitelist",
                        "inputs" : [
                            {
                                "type" : "address[]",
                                "name" : "addrs"
                            },
                            {
                                "type" : "bool[]",
                                "name" : "statuses"
                            },
                            {
                                "type" : "uint256[]",
                                "name" : "minCaps"
                            },
                            {
                                "type" : "uint256[]",
                                "name" : "maxCaps"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : "reached"
                            }
                        ],
                        "name" : "isMinimumGoalReached",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setRequireCustomerId",
                        "inputs" : [
                            {
                                "type" : "bool",
                                "name" : "value"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "clearJoinedCrowdsales",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : true,
                        "outputs" : [],
                        "name" : "loadRefund",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setOwnerTestValue",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "val"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "owner",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "multisigWallet",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "tokenAmountOf",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : true,
                        "outputs" : [],
                        "name" : "buyWithCustomerId",
                        "inputs" : [
                            {
                                "type" : "uint128",
                                "name" : "customerId"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : "limitBroken"
                            }
                        ],
                        "name" : "isBreakingCap",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "weiAmount"
                            },
                            {
                                "type" : "uint256",
                                "name" : "tokenAmount"
                            },
                            {
                                "type" : "uint256",
                                "name" : "weiRaisedTotal"
                            },
                            {
                                "type" : "uint256",
                                "name" : "tokensSoldTotal"
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : true,
                        "outputs" : [],
                        "name" : "buy",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : "sane"
                            }
                        ],
                        "name" : "isFinalizerSane",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "startsAt",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "finalized",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "halted",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "joinedCrowdsales",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setStartsAt",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "time"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : "status"
                            },
                            {
                                "type" : "uint256",
                                "name" : "minCap"
                            },
                            {
                                "type" : "uint256",
                                "name" : "maxCap"
                            }
                        ],
                        "name" : "earlyParticipantWhitelist",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "unhalt",
                        "inputs" : [],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "requiredSignedAddress",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "updateEarlyParicipantWhitelist",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            },
                            {
                                "type" : "address",
                                "name" : "contractAddr"
                            },
                            {
                                "type" : "uint256",
                                "name" : "tokensBought"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isCrowdsaleFull",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "investorCount",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "updateJoinedCrowdsales",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "joinedCrowdsalesLen",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setRequireSignedAddress",
                        "inputs" : [
                            {
                                "type" : "bool",
                                "name" : "value"
                            },
                            {
                                "type" : "address",
                                "name" : "_signerAddress"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "bool",
                                "name" : ""
                            }
                        ],
                        "name" : "isWhiteListed",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : true,
                        "outputs" : [],
                        "name" : "investWithCustomerId",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            },
                            {
                                "type" : "uint128",
                                "name" : "customerId"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "transferOwnership",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "newOwner"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [],
                        "name" : "setMultisig",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : true,
                        "outputs" : [],
                        "name" : "buyWithSignedAddress",
                        "inputs" : [
                            {
                                "type" : "uint128",
                                "name" : "customerId"
                            },
                            {
                                "type" : "uint8",
                                "name" : "v"
                            },
                            {
                                "type" : "bytes32",
                                "name" : "r"
                            },
                            {
                                "type" : "bytes32",
                                "name" : "s"
                            }
                        ],
                        "constant" : false
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "uint256",
                                "name" : ""
                            }
                        ],
                        "name" : "presaleWeiRaised",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "function",
                        "payable" : false,
                        "outputs" : [
                            {
                                "type" : "address",
                                "name" : ""
                            }
                        ],
                        "name" : "token",
                        "inputs" : [],
                        "constant" : true
                    },
                    {
                        "type" : "constructor",
                        "payable" : false,
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "_token"
                            },
                            {
                                "type" : "address",
                                "name" : "_pricingStrategy"
                            },
                            {
                                "type" : "address",
                                "name" : "_multisigWallet"
                            },
                            {
                                "type" : "uint256",
                                "name" : "_start"
                            },
                            {
                                "type" : "uint256",
                                "name" : "_end"
                            },
                            {
                                "type" : "uint256",
                                "name" : "_minimumFundingGoal"
                            },
                            {
                                "type" : "uint256",
                                "name" : "_maximumSellableTokens"
                            },
                            {
                                "type" : "bool",
                                "name" : "_isUpdatable"
                            },
                            {
                                "type" : "bool",
                                "name" : "_isWhiteListed"
                            }
                        ]
                    },
                    {
                        "type" : "fallback",
                        "payable" : true
                    },
                    {
                        "type" : "event",
                        "name" : "MaximumSellableTokensChanged",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "newMaximumSellableTokens",
                                "indexed" : false
                            }
                        ],
                        "anonymous" : false
                    },
                    {
                        "type" : "event",
                        "name" : "Invested",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "investor",
                                "indexed" : false
                            },
                            {
                                "type" : "uint256",
                                "name" : "weiAmount",
                                "indexed" : false
                            },
                            {
                                "type" : "uint256",
                                "name" : "tokenAmount",
                                "indexed" : false
                            },
                            {
                                "type" : "uint128",
                                "name" : "customerId",
                                "indexed" : false
                            }
                        ],
                        "anonymous" : false
                    },
                    {
                        "type" : "event",
                        "name" : "Refund",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "investor",
                                "indexed" : false
                            },
                            {
                                "type" : "uint256",
                                "name" : "weiAmount",
                                "indexed" : false
                            }
                        ],
                        "anonymous" : false
                    },
                    {
                        "type" : "event",
                        "name" : "InvestmentPolicyChanged",
                        "inputs" : [
                            {
                                "type" : "bool",
                                "name" : "newRequireCustomerId",
                                "indexed" : false
                            },
                            {
                                "type" : "bool",
                                "name" : "newRequiredSignedAddress",
                                "indexed" : false
                            },
                            {
                                "type" : "address",
                                "name" : "newSignerAddress",
                                "indexed" : false
                            }
                        ],
                        "anonymous" : false
                    },
                    {
                        "type" : "event",
                        "name" : "Whitelisted",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "addr",
                                "indexed" : false
                            },
                            {
                                "type" : "bool",
                                "name" : "status",
                                "indexed" : false
                            }
                        ],
                        "anonymous" : false
                    },
                    {
                        "type" : "event",
                        "name" : "StartsAtChanged",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "newStartsAt",
                                "indexed" : false
                            }
                        ],
                        "anonymous" : false
                    },
                    {
                        "type" : "event",
                        "name" : "EndsAtChanged",
                        "inputs" : [
                            {
                                "type" : "uint256",
                                "name" : "newEndsAt",
                                "indexed" : false
                            }
                        ],
                        "anonymous" : false
                    },
                    {
                        "type" : "event",
                        "name" : "OwnershipTransferred",
                        "inputs" : [
                            {
                                "type" : "address",
                                "name" : "previousOwner",
                                "indexed" : true
                            },
                            {
                                "type" : "address",
                                "name" : "newOwner",
                                "indexed" : true
                            }
                        ],
                        "anonymous" : false
                    }
                ],
                "bin" : ""
            }
        }
}

const userRole = {
    "roles" : [
    {roleId : 1, roleName : "Admin"},
    {roleId : 2, roleName : "Developer"},
    {roleId : 3, roleName : "Tester"},
    {roleId : 4, roleName : "Business Developer"},
    {roleId : 5, roleName : "Project Manager"},
    {roleId : 6, roleName : "Team Manager"},
    {roleId : 7, roleName : "Team Lead"},
    {roleId : 8, roleName : "Super Admin"},
    {roleId : 9, roleName : "Desinger"}]
}

const hostingServer ={
    // for local tseting server
    // serverName : 'http://103.201.142.41:4000/',
    // serverUiName  : 'http://103.201.142.41:90/krptual_dist/#/login'


    // serverName : 'https://www.kryptual.com:4000/',
    // serverUiName  : 'https://www.kryptual.com/Kryptual_signup/login'
    basePath : 'http://192.168.0.115:8070/',
    serverName : 'https://www.kryptual.com:4000/',
    serverUiName  : 'https://www.kryptual.com/en/#/login'
    

    // serverUiName : 'http://103.201.142.41:90/Cryptual/cryptual/#/login',
    // serverName : 'https://bug-tracker-web.herokuapp.com'
}
const companyETHaddress = "0xwjdjhwdhjdksdjd";
const ethplorer = 'https://api.ethplorer.io/';
const readABIfromEtherscan = 'http://api-ropsten.etherscan.io/api?module=contract&action=getabi&';

const ssl = {
    certificate : '../../../../../etc/ssl/www_kryptual_com.crt',
    key         : '../../../../../etc/ssl/private/server.key'
}

var obj = { 
    gmailSMTPCredentials:gmailSMTPCredentials, 
    twilioCredentials: twilioCredentials,
    smsCredentials:smsCredentials,
    imagePaths: imagePaths,
    rpiCredentials:rpiCredentials,
    pagination: pagination,
    coinPayment : coinPayment,
    ETHnodeURL : ETHnodeURL,
    // pagination: pagination,
    hostingServer: hostingServer,
    userRole : userRole,
    ssl : ssl,
    ethplorer : ethplorer,
    dummyAbi : dummyAbi,
    readABIfromEtherscan :readABIfromEtherscan,
    companyETHaddress : companyETHaddress
};

module.exports = obj;
