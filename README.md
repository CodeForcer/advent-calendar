# Smart contracts for the LocalCoinSwap advent calendar giveaway

## Installation:
```
git clone https://github.com/CodeForcer/advent-calendar.git
cd advent-calendar
npm i
```

## Deployment:
```
truffle migrate --network <name>
```
Where `<name>` = "development" for the testing chain

## Testing:  
For testing a simple reset script has been created for genache which clears all settings and starts a local Eth chain. You can run this with:
```
chmod +x reset.sh
./reset.sh
```

Then in a seperate window:
```
truffle test
```