# groupfundsblockchain
DApps regarding group ether funds (voting and lottery system)

This is a project to test out fundamental blockchain principles, working with data structures and connecting smart contracts to a frontend (in order to use them without needing Remix IDE).

First, decide whether you want to choose the lottery or voting DApp.

<img width="1399" alt="Screen Shot 2022-09-07 at 03 04 08" src="https://user-images.githubusercontent.com/57327789/188766238-856d3069-b754-4d2d-88c4-09285f083cf9.png">

Lottery:

This DApp consists of entering a lottery by sending 0.02 Ether to the pot. The contract deployer will be in charge of picking a winner once there's more than one participant in the lottery.

<img width="1386" alt="Screen Shot 2022-09-07 at 02 32 15" src="https://user-images.githubusercontent.com/57327789/188766266-22eac0bf-b89d-4b4a-a783-5c019ca37740.png">

You will have to transfer ether to enter the lottery.

<img width="1384" alt="Screen Shot 2022-09-07 at 02 37 03" src="https://user-images.githubusercontent.com/57327789/188766271-75a3a82d-804e-4db5-ad2f-7c08f3c91b28.png">

You will get a view of how much each player contributed to the lottery (every player is allowed to contribute more than once), and a history of previous lottery winners if any.

<img width="1416" alt="Screen Shot 2022-09-07 at 02 32 32" src="https://user-images.githubusercontent.com/57327789/188766281-efbc25b6-b7c0-483c-b333-41e4b6f8f323.png">

Once the button pickWinner is pressed by the account that deployed the smart contract (the lottery will purposefully throw an error if someone other than the contract owner tries to pickWinner), a winner will be chosen and the pot will be transferred to them.
A new winner will appear in the Lottery History.

<img width="1368" alt="Screen Shot 2022-09-07 at 02 36 48" src="https://user-images.githubusercontent.com/57327789/188766287-e1886fcf-a0ab-4f0b-a331-98bb65fde6c1.png">


Voting:

This DApp consists of sending 0.00002 Ether to a fund, and voting who should take all of the total funds. Only contributors of the fund are allowed to vote (the contract will purposefully throw an error if someone other than a contributor tries to vote).

<img width="1329" alt="Screen Shot 2022-08-28 at 12 36 54" src="https://user-images.githubusercontent.com/57327789/188767153-009d02e4-5148-494e-9148-70d4df03f630.png">

You can see a list of all contributors, and the option of voting for any contributor. Below you can see the votes received by contributors who were voted.

<img width="1287" alt="Screen Shot 2022-08-28 at 12 37 04" src="https://user-images.githubusercontent.com/57327789/188767164-01f46270-a1a3-4d5b-912b-8e4568c603d5.png">

When there are more than two contributors and a contributor receives more than half of the votes, all of the funds will be transferred to them and a new round of contributing Ether and voting will start. The page will display the winner of the previous voting round below.
