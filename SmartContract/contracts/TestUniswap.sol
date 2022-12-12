// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
import "./interfaces/Uniswap.sol";
import "./interfaces/IERC20.sol";

contract TestUniswap {
    address private constant UNISWAP_V2_ROUTER=0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D; // to trade
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    function swap(
        address tokenIn, //token trading in
        address tokenOut, //token trading out
        uint256 amountIn, //amout of token trading in
        uint256 amountOutMin, //min of token we want trade out
        address to //address sending the output token to
    ) external {
        IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn); 
        IERC20(tokenIn).approve(UNISWAP_V2_ROUTER, amountIn); 

        address[] memory path;
       if (tokenIn == WETH || tokenOut == WETH) {
      path = new address[](2);
      path[0] = tokenIn;
      path[1] = tokenOut;
    } else {
      path = new address[](3);
      path[0] = tokenIn;
      path[1] = WETH;
      path[2] = tokenOut;
    }

        IUniswapV2RRouter(UNISWAP_V2_ROUTER).swapExactTokensForTokens(
            amountIn,
           amountOutMin,
           path,
          to,
         block.timestamp
      );
    }
    function getAmountOutMin(address tokenIn, address tokenOut, uint256 amountIn) public view returns(uint256){
        address[] memory path;

        
        if(tokenIn==WETH||tokenOut==WETH){
            path=new address[](2);
            path[0]=tokenIn;
            path[1]=tokenOut;
 
        }
        else{
            path=new address[](3);
            path[0]=tokenIn;
            path[1]=WETH;
            path[2]=tokenOut;

        }
        uint[] memory amountOutMins = IUniswapV2RRouter(UNISWAP_V2_ROUTER).getAmountsOut(amountIn, path);
        return amountOutMins[path.length-1]; 
    }
    function swapFromETHToToken(
        address tokenOut, //token trading out
        uint256 amountOutMin, //min of token we want trade out
        address to ) external payable{
            address[] memory path;
       if(tokenOut==WETH){
            path=new address[](1);
            path[0]=tokenOut;
 
        }
        else{
            path=new address[](2);
            path[0]=WETH;
            path[1]=tokenOut;

        }

            IUniswapV2RRouter(UNISWAP_V2_ROUTER).swapExactETHForTokens{value: msg.value}(amountOutMin,path,to,block.timestamp);
        }
    function swapFromTokenToETH(address tokenIn,
        uint256 amountIn,
        uint256 amountOutMin,
        address to) external{
            IERC20(tokenIn).transferFrom(msg.sender,address(this),amountIn);
            IERC20(tokenIn).approve(UNISWAP_V2_ROUTER,amountIn);
            address[] memory path;
              path = new address[](2);
        path[0] = tokenIn;
        path[1] = WETH;
        IUniswapV2RRouter(UNISWAP_V2_ROUTER).swapExactTokensForETH(amountIn,amountOutMin,path, to, block.timestamp);
            }
  
}
