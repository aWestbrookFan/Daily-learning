/**
 @desc:假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢
 @author:sww
 @date 2021-03-20
 */


var climbStairs = function (n) {
    let dp = [];
    dp[0] = 0, dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n];
};

console.log(climbStairs(5))


