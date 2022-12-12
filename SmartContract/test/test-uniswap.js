// SPDX-License-Identifier: MIT
const IERC20 = artifacts.require("IERC20");
const TestUniswap = artifacts.require("TestUniswap");

contract('TestUniswap', async(accounts) => {
  const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const WBTC = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
  const BUSD = "0x4Fabb145d64652a948d72533023f6E7A623C7C53";
  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const DAI_WHALE="0xF977814e90dA44bFA03b6295A0616a897441aceC";
  const ETH_WHALE="0xDC1403aC8313eBaD89acD204092Dac65Ea81Fc40";
  
  const AMOUNT_IN = 1000;
  const AMOUNT_OUT_MIN = 1;
 const TOKEN_IN = DAI;
  const TOKEN_OUT= WBTC;
  const TO = accounts[0];
  const WHALE=accounts[0];
  
 
  
  /* 
  it("should get amount out min",async()=>{
    tokenIn = await IERC20.at(TOKEN_IN);
    tokenOut = await IERC20.at(TOKEN_OUT);
    testUniswap = await TestUniswap.new();
    console.log(`in ${tokenIn.address} and ${tokenOut.address} and ${AMOUNT_IN}`);
    x=await testUniswap.getAmountOutMin(tokenIn.address,tokenOut.address,AMOUNT_IN);
    console.log(`in ${AMOUNT_IN} and x: `, x);
    console.log(`in ${AMOUNT_IN} and x: `, x.toNumber());
    
  }) 
  */
  /*
  it("eth to token",async()=>{
    tokenOut = await IERC20.at(TOKEN_OUT); 
    let testUniswap = await TestUniswap.new();
   await testUniswap.swapFromETHToToken(tokenOut.address,AMOUNT_OUT_MIN,TO,{value:AMOUNT_IN, FROM:TO});
   console.log(`in ${AMOUNT_IN}`, WHALE);
    console.log(`out ${await tokenOut.balanceOf(TO)}`);
  })
  */
  /*
  it("swap token to token", async () => {
    tokenIn = await IERC20.at(TOKEN_IN);
    tokenOut = await IERC20.at(TOKEN_OUT);
    testUniswap = await TestUniswap.new();
    console.log(`in ${await tokenIn.balanceOf(TO)}`,AMOUNT_IN);
    await tokenIn.approve(testUniswap.address, AMOUNT_IN, { from: TO });
    console.log(tokenIn.address, tokenOut.address, AMOUNT_IN, AMOUNT_OUT_MIN, WHALE, TO)
     await testUniswap.swap(
       tokenIn.address,
       tokenOut.address,
       AMOUNT_IN,
       AMOUNT_OUT_MIN,
       TO,
       {
        from: TO,
       }
     );
  
    
     console.log(`in ${AMOUNT_IN} and ${await tokenIn.balanceOf(TO)}`);
     console.log(`out ${await tokenOut.balanceOf(TO)}`);
   });
   */
/*

it("token to eth",async()=>{
  tokenIn = await IERC20.at(TOKEN_IN);
  testUniswap = await TestUniswap.new();
  console.log(`in ${await tokenIn.balanceOf(TO)}`,AMOUNT_IN);
  await tokenIn.approve(testUniswap.address, AMOUNT_IN, { from: TO });

   await testUniswap.swapFromTokenToETH(
    token_eth.address,
     AMOUNT_IN,
     AMOUNT_OUT_MIN,
     TO,
     {
      from: TO,
     }
   );

   console.log(`out ${await token_eth.balanceOf(TO)}`);
 })
 */
});

0xFE724a829fdF12F7012365dB98730EEe33742ea2

0x57aC66399420f7C99F546A5a7C00e0D0Ff2679E1
