"use strict";

// Selectors for starting the game
const btnShow = document.querySelector(".show");
const game_area = document.querySelector(".game_area");

// Clicking the start button
btnShow.addEventListener("click", function () {
  if (document.querySelector(".game_area").classList.contains("hidden")) {
    game_area.classList.remove("hidden");
    game_area.scrollIntoView();
    btnShow.textContent = "Hide!";
  } else {
    game_area.classList.add("hidden");
    btnShow.textContent = "Start!";
  }
});

// Generate random card on button press and display this
let types = ["clubs", "diamonds", "hearts", "spades"];
let sum_player = 0;
let sum_dealer = 0;
let numberDealer1 = 0;
let typeDealer1 = 0;
let numberDealer2 = 0;
let typeDealer2 = 0;
let numberDealer3 = 0;
let typeDealer3 = 0;
let numberDealer4 = 0;
let typeDealer4 = 0;
let numberDealer5 = 0;
let typeDealer5 = 0;
let numberDealer6 = 0;
let typeDealer6 = 0;
let numberPlayer1 = 0;
let typePlayer1 = 0;
let numberPlayer2 = 0;
let typePlayer2 = 0;
let numberPlayer3 = 0;
let typePlayer3 = 0;
let numberPlayer4 = 0;
let typePlayer4 = 0;
let numberPlayer5 = 0;
let typePlayer5 = 0;
let numberPlayer6 = 0;
let typePlayer6 = 0;

let player_card_1_1 = false;
let player_card_1_2 = false;
let player_card_1_3 = false;
let player_card_1_4 = false;
let player_card_1_5 = false;
let player_card_1_6 = false;

let dealer_card_1_1 = false;
let dealer_card_1_2 = false;
let dealer_card_1_3 = false;
let dealer_card_1_4 = false;
let dealer_card_1_5 = false;
let dealer_card_1_6 = false;

// Creating a function to deal random cards
const deal_cards = function () {
  // Assigning card values and types
  numberDealer1 = Math.floor(Math.random() * 13) + 1;
  typeDealer1 = types[Math.floor(Math.random() * 3) + 1];
  numberDealer2 = Math.floor(Math.random() * 13) + 1;
  typeDealer2 = types[Math.floor(Math.random() * 3) + 1];
  numberDealer3 = Math.floor(Math.random() * 13) + 1;
  typeDealer3 = types[Math.floor(Math.random() * 3) + 1];
  numberDealer4 = Math.floor(Math.random() * 13) + 1;
  typeDealer4 = types[Math.floor(Math.random() * 3) + 1];
  numberDealer5 = Math.floor(Math.random() * 13) + 1;
  typeDealer5 = types[Math.floor(Math.random() * 3) + 1];
  numberDealer6 = Math.floor(Math.random() * 13) + 1;
  typeDealer6 = types[Math.floor(Math.random() * 3) + 1];
  numberPlayer1 = Math.floor(Math.random() * 13) + 1;
  typePlayer1 = types[Math.floor(Math.random() * 3) + 1];
  numberPlayer2 = Math.floor(Math.random() * 13) + 1;
  typePlayer2 = types[Math.floor(Math.random() * 3) + 1];
  numberPlayer3 = Math.floor(Math.random() * 13) + 1;
  typePlayer3 = types[Math.floor(Math.random() * 3) + 1];
  numberPlayer4 = Math.floor(Math.random() * 13) + 1;
  typePlayer4 = types[Math.floor(Math.random() * 3) + 1];
  numberPlayer5 = Math.floor(Math.random() * 13) + 1;
  typePlayer5 = types[Math.floor(Math.random() * 3) + 1];
  numberPlayer6 = Math.floor(Math.random() * 13) + 1;
  typePlayer6 = types[Math.floor(Math.random() * 3) + 1];

  // Making sure no duplicates are created
  while (
    (numberDealer1 == numberDealer2 && typeDealer1 == typeDealer2) ||
    (numberDealer1 == numberDealer3 && typeDealer1 == typeDealer3) ||
    (numberDealer1 == numberDealer4 && typeDealer1 == typeDealer4) ||
    (numberDealer1 == numberDealer5 && typeDealer1 == typeDealer5) ||
    (numberDealer1 == numberDealer6 && typeDealer1 == typeDealer6) ||
    (numberDealer2 == numberDealer3 && typeDealer2 == typeDealer3) ||
    (numberDealer2 == numberDealer4 && typeDealer2 == typeDealer4) ||
    (numberDealer2 == numberDealer5 && typeDealer2 == typeDealer5) ||
    (numberDealer2 == numberDealer6 && typeDealer2 == typeDealer6) ||
    (numberDealer3 == numberDealer4 && typeDealer3 == typeDealer4) ||
    (numberDealer3 == numberDealer5 && typeDealer3 == typeDealer5) ||
    (numberDealer3 == numberDealer6 && typeDealer3 == typeDealer6) ||
    (numberDealer4 == numberDealer5 && typeDealer4 == typeDealer5) ||
    (numberDealer4 == numberDealer6 && typeDealer4 == typeDealer6) ||
    (numberDealer5 == numberDealer6 && typeDealer5 == typeDealer6) ||
    (numberDealer1 == numberPlayer1 && typeDealer1 == typePlayer1) ||
    (numberDealer1 == numberPlayer2 && typeDealer1 == typePlayer2) ||
    (numberDealer1 == numberPlayer3 && typeDealer1 == typePlayer3) ||
    (numberDealer1 == numberPlayer4 && typeDealer1 == typePlayer4) ||
    (numberDealer1 == numberPlayer5 && typeDealer1 == typePlayer5) ||
    (numberDealer1 == numberPlayer6 && typeDealer1 == typePlayer6) ||
    (numberDealer2 == numberPlayer1 && typeDealer2 == typePlayer1) ||
    (numberDealer2 == numberPlayer2 && typeDealer2 == typePlayer2) ||
    (numberDealer2 == numberPlayer3 && typeDealer2 == typePlayer3) ||
    (numberDealer2 == numberPlayer4 && typeDealer2 == typePlayer4) ||
    (numberDealer2 == numberPlayer5 && typeDealer2 == typePlayer5) ||
    (numberDealer2 == numberPlayer6 && typeDealer2 == typePlayer6) ||
    (numberDealer3 == numberPlayer1 && typeDealer3 == typePlayer1) ||
    (numberDealer3 == numberPlayer2 && typeDealer3 == typePlayer2) ||
    (numberDealer3 == numberPlayer3 && typeDealer3 == typePlayer3) ||
    (numberDealer3 == numberPlayer4 && typeDealer3 == typePlayer4) ||
    (numberDealer3 == numberPlayer5 && typeDealer3 == typePlayer5) ||
    (numberDealer3 == numberPlayer6 && typeDealer3 == typePlayer6) ||
    (numberDealer4 == numberPlayer1 && typeDealer4 == typePlayer1) ||
    (numberDealer4 == numberPlayer2 && typeDealer4 == typePlayer2) ||
    (numberDealer4 == numberPlayer3 && typeDealer4 == typePlayer3) ||
    (numberDealer4 == numberPlayer4 && typeDealer4 == typePlayer4) ||
    (numberDealer4 == numberPlayer5 && typeDealer4 == typePlayer5) ||
    (numberDealer4 == numberPlayer6 && typeDealer4 == typePlayer6) ||
    (numberDealer5 == numberPlayer1 && typeDealer5 == typePlayer1) ||
    (numberDealer5 == numberPlayer2 && typeDealer5 == typePlayer2) ||
    (numberDealer5 == numberPlayer3 && typeDealer5 == typePlayer3) ||
    (numberDealer5 == numberPlayer4 && typeDealer5 == typePlayer4) ||
    (numberDealer5 == numberPlayer5 && typeDealer5 == typePlayer5) ||
    (numberDealer5 == numberPlayer6 && typeDealer5 == typePlayer6) ||
    (numberDealer6 == numberPlayer1 && typeDealer6 == typePlayer1) ||
    (numberDealer6 == numberPlayer2 && typeDealer6 == typePlayer2) ||
    (numberDealer6 == numberPlayer3 && typeDealer6 == typePlayer3) ||
    (numberDealer6 == numberPlayer4 && typeDealer6 == typePlayer4) ||
    (numberDealer6 == numberPlayer5 && typeDealer6 == typePlayer5) ||
    (numberDealer6 == numberPlayer6 && typeDealer6 == typePlayer6) ||
    (numberPlayer1 == numberPlayer2 && typePlayer1 == typePlayer2) ||
    (numberPlayer1 == numberPlayer3 && typePlayer1 == typePlayer3) ||
    (numberPlayer1 == numberPlayer4 && typePlayer1 == typePlayer4) ||
    (numberPlayer1 == numberPlayer5 && typePlayer1 == typePlayer5) ||
    (numberPlayer1 == numberPlayer6 && typePlayer1 == typePlayer6) ||
    (numberPlayer2 == numberPlayer3 && typePlayer2 == typePlayer3) ||
    (numberPlayer2 == numberPlayer4 && typePlayer2 == typePlayer4) ||
    (numberPlayer2 == numberPlayer5 && typePlayer2 == typePlayer5) ||
    (numberPlayer2 == numberPlayer6 && typePlayer2 == typePlayer6) ||
    (numberPlayer3 == numberPlayer4 && typePlayer3 == typePlayer4) ||
    (numberPlayer3 == numberPlayer5 && typePlayer3 == typePlayer5) ||
    (numberPlayer3 == numberPlayer6 && typePlayer3 == typePlayer6) ||
    (numberPlayer4 == numberPlayer5 && typePlayer4 == typePlayer5) ||
    (numberPlayer4 == numberPlayer6 && typePlayer4 == typePlayer6) ||
    (numberPlayer5 == numberPlayer6 && typePlayer5 == typePlayer6)
  ) {
    numberDealer1 = Math.floor(Math.random() * 13) + 1;
    typeDealer1 = types[Math.floor(Math.random() * 3) + 1];
    numberDealer2 = Math.floor(Math.random() * 13) + 1;
    typeDealer2 = types[Math.floor(Math.random() * 3) + 1];
    numberDealer3 = Math.floor(Math.random() * 13) + 1;
    typeDealer3 = types[Math.floor(Math.random() * 3) + 1];
    numberDealer4 = Math.floor(Math.random() * 13) + 1;
    typeDealer4 = types[Math.floor(Math.random() * 3) + 1];
    numberDealer5 = Math.floor(Math.random() * 13) + 1;
    typeDealer5 = types[Math.floor(Math.random() * 3) + 1];
    numberDealer6 = Math.floor(Math.random() * 13) + 1;
    typeDealer6 = types[Math.floor(Math.random() * 3) + 1];
    numberPlayer1 = Math.floor(Math.random() * 13) + 1;
    typePlayer1 = types[Math.floor(Math.random() * 3) + 1];
    numberPlayer2 = Math.floor(Math.random() * 13) + 1;
    typePlayer2 = types[Math.floor(Math.random() * 3) + 1];
    numberPlayer3 = Math.floor(Math.random() * 13) + 1;
    typePlayer3 = types[Math.floor(Math.random() * 3) + 1];
    numberPlayer4 = Math.floor(Math.random() * 13) + 1;
    typePlayer4 = types[Math.floor(Math.random() * 3) + 1];
    numberPlayer5 = Math.floor(Math.random() * 13) + 1;
    typePlayer5 = types[Math.floor(Math.random() * 3) + 1];
    numberPlayer6 = Math.floor(Math.random() * 13) + 1;
    typePlayer6 = types[Math.floor(Math.random() * 3) + 1];
  }
};

// Assigning elements variables
const btnHit = document.querySelector(".hit");
const btnHit2 = document.querySelector(".hit2");
const btnHit3 = document.querySelector(".hit3");
const btnHit4 = document.querySelector(".hit4");
const btnHit5 = document.querySelector(".hit5");
const btnStand = document.querySelector(".stand");
const btnDouble = document.querySelector(".double");
const btnSurrender = document.querySelector(".surrender");
const btnReplay = document.querySelector(".replay");
const dealer_status = document.querySelector(".dealer_status_text");
const playerCard = document.querySelectorAll(".playerCard");
const dealerCard = document.querySelectorAll(".dealerCard");

// First 2 cards dealer and player
btnHit.addEventListener("click", function () {
  // Deal cards
  deal_cards();

  // Make buttons visible
  dealer_status.classList.add("hidden");
  btnStand.classList.remove("hidden");
  btnSurrender.classList.remove("hidden");
  btnDouble.classList.remove("hidden");

  // Dealing dealer's cards
  dealerCard[0].classList.remove("hidden");
  dealerCard[0].src = `assets/${typeDealer1}_${numberDealer1}.png`;
  dealerCard[1].classList.remove("hidden");
  dealerCard[1].src = `assets/backside.png`;

  if (numberDealer1 > 10) {
    sum_dealer += 10;
  } else if (numberDealer1 == 1) {
    sum_dealer += 11;
  } else {
    sum_dealer += numberDealer1;
  }
  if (numberDealer2 > 10) {
    sum_dealer += 10;
  } else if (numberDealer2 == 1) {
    dealer_card_1_2 = true;
    sum_dealer += 11;
  } else {
    sum_dealer += numberDealer2;
  }

  if (numberDealer1 == 1 && numberDealer2 == 1) {
    dealer_card_1_1 = true;
    sum_dealer == 12;
  }

  console.log(`dealer sum is: ${sum_dealer}`);

  // Player #1 cards
  playerCard[0].classList.remove("hidden");
  playerCard[0].src = `assets/${typePlayer1}_${numberPlayer1}.png`;
  if (numberPlayer1 > 10) {
    sum_player += 10;
  } else if (numberPlayer1 == 1) {
    sum_player += 11;
  } else {
    sum_player += numberPlayer1;
  }

  // Player #2 cards
  playerCard[1].classList.remove("hidden");
  playerCard[1].src = `assets/${typePlayer2}_${numberPlayer2}.png`;
  if (numberPlayer2 > 10) {
    sum_player += 10;
  } else if (numberPlayer2 == 1) {
    sum_player += 11;
  } else {
    sum_player += numberPlayer2;
  }

  if (numberPlayer1 == 1 && numberPlayer2 == 1) {
    player_card_1_1 = true;
    sum_player = 12;
  }

  console.log(`player sum is: ${sum_player}`);

  // Removing old hit button, displaying new
  btnHit.classList.add("hidden");
  btnHit2.classList.remove("hidden");
  console.log(sum_player);
});

// Second hit, player card #3
btnHit2.addEventListener("click", function () {
  // Hiding double and surrender button
  btnDouble.classList.add("hidden");
  btnSurrender.classList.add("hidden");

  // Displaying cards
  playerCard[2].classList.remove("hidden");
  playerCard[2].src = `assets/${typePlayer3}_${numberPlayer3}.png`;

  if (numberPlayer3 > 10) {
    sum_player += 10;
  } else if (numberPlayer3 == 1) {
    sum_player += 11;
  } else {
    sum_player += numberPlayer3;
  }
  // Deciding if ace is 1 or 11
  if (sum_player > 21) {
    if (numberPlayer1 == 1 && player_card_1_1 == false) {
      sum_player -= 10;
      player_card_1_1 = true;
    } else if (numberPlayer2 == 1 && player_card_1_2 == false) {
      sum_player -= 10;
      player_card_1_2 = true;
    } else if (numberPlayer3 == 1 && player_card_1_3 == false) {
      sum_player -= 10;
      player_card_1_3 = true;
    }
  }

  // Checking for bust
  if (sum_player > 21) {
    dealer_status.classList.remove("hidden");
    dealer_status.textContent = "BUST, YOU LOSE!";
    btnReplay.classList.remove("hidden");
    btnHit2.classList.add("hidden");
    btnStand.classList.add("hidden");
  } else {
    btnHit2.classList.add("hidden");
    btnHit3.classList.remove("hidden");
  }
  console.log(sum_player);
});

// Third hit, player card #4
btnHit3.addEventListener("click", function () {
  playerCard[3].classList.remove("hidden");
  playerCard[3].src = `assets/${typePlayer4}_${numberPlayer4}.png`;

  if (numberPlayer4 > 10) {
    sum_player += 10;
  } else if (numberPlayer4 == 1) {
    sum_player += 11;
  } else {
    sum_player += numberPlayer4;
  }

  // Deciding if ace is 1 or 11
  if (sum_player > 21) {
    if (numberPlayer1 == 1 && player_card_1_1 == false) {
      sum_player -= 10;
      player_card_1_1 = true;
    } else if (numberPlayer2 == 1 && player_card_1_2 == false) {
      sum_player -= 10;
      player_card_1_2 = true;
    } else if (numberPlayer3 == 1 && player_card_1_3 == false) {
      sum_player -= 10;
      player_card_1_3 = true;
    } else if (numberPlayer4 == 1 && player_card_1_4 == false) {
      sum_player -= 10;
      player_card_1_4 = true;
    }
  }

  // Checking for bust
  if (sum_player > 21) {
    dealer_status.classList.remove("hidden");
    dealer_status.textContent = "BUST, YOU LOSE!";
    btnReplay.classList.remove("hidden");
    btnHit3.classList.add("hidden");
    btnStand.classList.add("hidden");
  } else {
    btnHit3.classList.add("hidden");
    btnHit4.classList.remove("hidden");
  }
  console.log(sum_player);
});

// Fourth hit, player card #5
btnHit4.addEventListener("click", function () {
  playerCard[4].classList.remove("hidden");
  playerCard[4].src = `assets/${typePlayer5}_${numberPlayer5}.png`;

  if (numberPlayer5 > 10) {
    sum_player += 10;
  } else if (numberPlayer5 == 1) {
    sum_player += 11;
  } else {
    sum_player += numberPlayer5;
  }

  // Deciding if ace is 1 or 11
  if (sum_player > 21) {
    if (numberPlayer1 == 1 && player_card_1_1 == false) {
      sum_player -= 10;
      player_card_1_1 = true;
    } else if (numberPlayer2 == 1 && player_card_1_2 == false) {
      sum_player -= 10;
      player_card_1_2 = true;
    } else if (numberPlayer3 == 1 && player_card_1_3 == false) {
      sum_player -= 10;
      player_card_1_3 = true;
    } else if (numberPlayer4 == 1 && player_card_1_4 == false) {
      sum_player -= 10;
      player_card_1_4 = true;
    } else if (numberPlayer5 == 1 && player_card_1_5 == false) {
      sum_player -= 10;
      player_card_1_5 = true;
    }
  }

  // Checking for bust
  if (sum_player > 21) {
    dealer_status.classList.remove("hidden");
    dealer_status.textContent = "BUST, YOU LOSE!";
    btnReplay.classList.remove("hidden");
    btnHit4.classList.add("hidden");
    btnStand.classList.add("hidden");
  } else {
    btnHit4.classList.add("hidden");
    btnHit5.classList.remove("hidden");
  }
  console.log(sum_player);
});

// Fifth hit, player card #6
btnHit5.addEventListener("click", function () {
  playerCard[5].classList.remove("hidden");
  playerCard[5].src = `assets/${typePlayer6}_${numberPlayer6}.png`;

  if (numberPlayer6 > 10) {
    sum_player += 10;
  } else if (numberPlayer6 == 1) {
    sum_player += 11;
  } else {
    sum_player += numberPlayer6;
  }

  // Deciding if ace is 1 or 11
  if (sum_player > 21) {
    if (numberPlayer1 == 1 && player_card_1_1 == false) {
      sum_player -= 10;
      player_card_1_1 = true;
    } else if (numberPlayer2 == 1 && player_card_1_2 == false) {
      sum_player -= 10;
      player_card_1_2 = true;
    } else if (numberPlayer3 == 1 && player_card_1_3 == false) {
      sum_player -= 10;
      player_card_1_3 = true;
    } else if (numberPlayer4 == 1 && player_card_1_4 == false) {
      sum_player -= 10;
      player_card_1_4 = true;
    } else if (numberPlayer5 == 1 && player_card_1_5 == false) {
      sum_player -= 10;
      player_card_1_5 = true;
    } else if (numberPlayer6 == 1 && player_card_1_6 == false) {
      sum_player -= 10;
      player_card_1_6 = true;
    }
  }

  // Checking for bust
  if (sum_player > 21) {
    dealer_status.classList.remove("hidden");
    dealer_status.textContent = "BUST, YOU LOSE!";
    btnReplay.classList.remove("hidden");
    btnHit5.classList.add("hidden");
    btnStand.classList.add("hidden");
  } else {
    btnHit5.classList.add("hidden");
  }
  console.log(sum_player);
});

// Play again button
btnReplay.addEventListener("click", function () {
  deal_cards();
  sum_player = 0;
  sum_dealer = 0;
  player_card_1_1 = false;
  player_card_1_2 = false;
  player_card_1_3 = false;
  player_card_1_4 = false;
  player_card_1_5 = false;
  player_card_1_6 = false;

  dealer_card_1_1 = false;
  dealer_card_1_2 = false;
  dealer_card_1_3 = false;
  dealer_card_1_4 = false;
  dealer_card_1_5 = false;
  dealer_card_1_6 = false;
  btnHit.classList.remove("hidden");
  btnHit2.classList.add("hidden");
  btnHit3.classList.add("hidden");
  btnHit4.classList.add("hidden");
  btnReplay.classList.add("hidden");
  dealer_status.textContent = "Ready to play!";
  playerCard[0].classList.add("hidden");
  playerCard[1].classList.add("hidden");
  playerCard[2].classList.add("hidden");
  playerCard[3].classList.add("hidden");
  playerCard[4].classList.add("hidden");
  playerCard[5].classList.add("hidden");
  dealerCard[0].classList.add("hidden");
  dealerCard[1].classList.add("hidden");
  dealerCard[2].classList.add("hidden");
  dealerCard[3].classList.add("hidden");
  dealerCard[4].classList.add("hidden");
  dealerCard[5].classList.add("hidden");
});
// Surrender button
btnSurrender.addEventListener("click", function () {
  deal_cards();
  sum_player = 0;
  sum_dealer = 0;
  player_card_1_1 = false;
  player_card_1_2 = false;
  player_card_1_3 = false;
  player_card_1_4 = false;
  player_card_1_5 = false;
  player_card_1_6 = false;

  dealer_card_1_1 = false;
  dealer_card_1_2 = false;
  dealer_card_1_3 = false;
  dealer_card_1_4 = false;
  dealer_card_1_5 = false;
  dealer_card_1_6 = false;

  btnHit.classList.remove("hidden");
  btnHit2.classList.add("hidden");
  btnHit3.classList.add("hidden");
  btnHit4.classList.add("hidden");
  btnReplay.classList.add("hidden");
  btnDouble.classList.add("hidden");
  btnStand.classList.add("hidden");
  btnSurrender.classList.add("hidden");
  dealer_status.textContent = "Ready to play!";
  playerCard[0].classList.add("hidden");
  playerCard[1].classList.add("hidden");
  playerCard[2].classList.add("hidden");
  playerCard[3].classList.add("hidden");
  playerCard[4].classList.add("hidden");
  playerCard[5].classList.add("hidden");
  dealerCard[0].classList.add("hidden");
  dealerCard[1].classList.add("hidden");
  dealerCard[2].classList.add("hidden");
  dealerCard[3].classList.add("hidden");
  dealerCard[4].classList.add("hidden");
  dealerCard[5].classList.add("hidden");
});

// Stand button
btnStand.addEventListener("click", function () {
  // Hide buttons
  btnHit.classList.add("hidden");
  btnHit2.classList.add("hidden");
  btnHit3.classList.add("hidden");
  btnHit4.classList.add("hidden");
  btnDouble.classList.add("hidden");
  btnStand.classList.add("hidden");
  btnSurrender.classList.add("hidden");
  btnReplay.classList.add("hidden");

  // If sum_player > sum_dealer draw card #3
  if (sum_player > sum_dealer) {
    dealerCard[1].src = `assets/${typeDealer2}_${numberDealer2}.png`;
    dealerCard[2].classList.remove("hidden");
    dealerCard[2].src = `assets/${typeDealer3}_${numberDealer3}.png`;

    // Adding card value to sum_dealer
    if (numberDealer3 > 10) {
      sum_dealer += 10;
    } else if (numberDealer3 == 1) {
      sum_dealer += 11;
    } else {
      sum_dealer += numberDealer3;
    }

    // Deciding if ace is 1 or 11
    if (sum_dealer > 21) {
      if (numberDealer1 == 1 && dealer_card_1_1 == false) {
        sum_dealer -= 10;
        dealer_card_1_1 = true;
      } else if (numberDealer2 == 1 && dealer_card_1_2 == false) {
        sum_dealer -= 10;
        dealer_card_1_2 = true;
      } else if (numberDealer3 == 1 && dealer_card_1_3 == false) {
        sum_dealer -= 10;
        dealer_card_1_3 = true;
      }
    }

    // Checking if dealer wins card #3
    if (sum_dealer > sum_player) {
      dealer_status.classList.remove("hidden");
      dealer_status.textContent = `Dealer wins!`;
      btnReplay.classList.remove("hidden");
      btnHit.classList.add("hidden");
      btnHit2.classList.add("hidden");
      btnHit3.classList.add("hidden");
      btnHit4.classList.add("hidden");
      btnHit5.classList.add("hidden");
      btnDouble.classList.add("hidden");
      btnStand.classList.add("hidden");
      btnSurrender.classList.add("hidden");
    }

    // Checking if dealer busts
    if (sum_dealer > 21) {
      dealer_status.classList.remove("hidden");
      dealer_status.textContent = `Dealer bust, player wins!`;
      btnReplay.classList.remove("hidden");
      btnHit.classList.add("hidden");
      btnHit2.classList.add("hidden");
      btnHit3.classList.add("hidden");
      btnHit4.classList.add("hidden");
      btnHit5.classList.add("hidden");
      btnDouble.classList.add("hidden");
      btnStand.classList.add("hidden");
      btnSurrender.classList.add("hidden");
    }

    // Checking for equal card #3
    if (sum_dealer == sum_player) {
      dealer_status.classList.remove("hidden");
      dealer_status.textContent = `Game is drawn!`;
      btnReplay.classList.remove("hidden");
      btnHit.classList.add("hidden");
      btnHit2.classList.add("hidden");
      btnHit3.classList.add("hidden");
      btnHit4.classList.add("hidden");
      btnHit5.classList.add("hidden");
      btnDouble.classList.add("hidden");
      btnStand.classList.add("hidden");
      btnSurrender.classList.add("hidden");
    }

    // If sum_player > sum_dealer draw card #4
    if (sum_player > sum_dealer) {
      dealerCard[3].classList.remove("hidden");
      dealerCard[3].src = `assets/${typeDealer4}_${numberDealer4}.png`;

      // Adding card value to sum_dealer
      if (numberDealer4 > 10) {
        sum_dealer += 10;
      } else if (numberDealer4 == 1) {
        sum_dealer += 11;
      } else {
        sum_dealer += numberDealer4;
      }

      // Deciding if ace is 1 or 11 if no 1
      if (sum_dealer > 21) {
        if (numberDealer1 == 1 && dealer_card_1_1 == false) {
          sum_dealer -= 10;
          dealer_card_1_1 = true;
        } else if (numberDealer2 == 1 && dealer_card_1_2 == false) {
          sum_dealer -= 10;
          dealer_card_1_2 = true;
        } else if (numberDealer3 == 1 && dealer_card_1_3 == false) {
          sum_dealer -= 10;
          dealer_card_1_3 = true;
        } else if (numberDealer4 == 1 && dealer_card_1_4 == false) {
          sum_dealer -= 10;
          dealer_card_1_4 = true;
        }
      }

      // Checking if dealer wins card #4
      if (sum_dealer > sum_player) {
        dealer_status.classList.remove("hidden");
        dealer_status.textContent = `Dealer wins!`;
        btnReplay.classList.remove("hidden");
        btnHit.classList.add("hidden");
        btnHit2.classList.add("hidden");
        btnHit3.classList.add("hidden");
        btnHit4.classList.add("hidden");
        btnHit5.classList.add("hidden");
        btnDouble.classList.add("hidden");
        btnStand.classList.add("hidden");
        btnSurrender.classList.add("hidden");
      }

      // Checking if dealer busts
      if (sum_dealer > 21) {
        dealer_status.classList.remove("hidden");
        dealer_status.textContent = `Dealer bust, player wins!`;
        btnReplay.classList.remove("hidden");
        btnHit.classList.add("hidden");
        btnHit2.classList.add("hidden");
        btnHit3.classList.add("hidden");
        btnHit4.classList.add("hidden");
        btnHit5.classList.add("hidden");
        btnDouble.classList.add("hidden");
        btnStand.classList.add("hidden");
        btnSurrender.classList.add("hidden");
      }

      // Checking for equal card #4
      if (sum_dealer == sum_player) {
        dealer_status.classList.remove("hidden");
        dealer_status.textContent = `Game is drawn!`;
        btnReplay.classList.remove("hidden");
        btnHit.classList.add("hidden");
        btnHit2.classList.add("hidden");
        btnHit3.classList.add("hidden");
        btnHit4.classList.add("hidden");
        btnHit5.classList.add("hidden");
        btnDouble.classList.add("hidden");
        btnStand.classList.add("hidden");
        btnSurrender.classList.add("hidden");
      }

      // If sum_player > sum_dealer draw card #5
      if (sum_player > sum_dealer) {
        dealerCard[4].classList.remove("hidden");
        dealerCard[4].src = `assets/${typeDealer5}_${numberDealer5}.png`;

        // Adding card value to sum_dealer
        if (numberDealer5 > 10) {
          sum_dealer += 10;
        } else if (numberDealer5 == 1) {
          sum_dealer += 11;
        } else {
          sum_dealer += numberDealer5;
        }

        // Deciding if ace is 1 or 11 if no 1
        if (sum_dealer > 21) {
          if (numberDealer1 == 1 && dealer_card_1_1 == false) {
            sum_dealer -= 10;
            dealer_card_1_1 = true;
          } else if (numberDealer2 == 1 && dealer_card_1_2 == false) {
            sum_dealer -= 10;
            dealer_card_1_2 = true;
          } else if (numberDealer3 == 1 && dealer_card_1_3 == false) {
            sum_dealer -= 10;
            dealer_card_1_3 = true;
          } else if (numberDealer4 == 1 && dealer_card_1_4 == false) {
            sum_dealer -= 10;
            dealer_card_1_4 = true;
          } else if (numberDealer5 == 1 && dealer_card_1_5 == false) {
            sum_dealer -= 10;
            dealer_card_1_5 = true;
          }
        }

        // Checking if dealer wins card #5
        if (sum_dealer > sum_player) {
          dealer_status.classList.remove("hidden");
          dealer_status.textContent = `Dealer wins!`;
          btnReplay.classList.remove("hidden");
          btnHit.classList.add("hidden");
          btnHit2.classList.add("hidden");
          btnHit3.classList.add("hidden");
          btnHit4.classList.add("hidden");
          btnHit5.classList.add("hidden");
          btnDouble.classList.add("hidden");
          btnStand.classList.add("hidden");
          btnSurrender.classList.add("hidden");
        }

        // Checking if dealer busts
        if (sum_dealer > 21) {
          dealer_status.classList.remove("hidden");
          dealer_status.textContent = `Dealer bust, player wins!`;
          btnReplay.classList.remove("hidden");
          btnHit.classList.add("hidden");
          btnHit2.classList.add("hidden");
          btnHit3.classList.add("hidden");
          btnHit4.classList.add("hidden");
          btnHit5.classList.add("hidden");
          btnDouble.classList.add("hidden");
          btnStand.classList.add("hidden");
          btnSurrender.classList.add("hidden");
        }
        // Checking for equal card #5
        if (sum_dealer == sum_player) {
          dealer_status.classList.remove("hidden");
          dealer_status.textContent = `Game is drawn!`;
          btnReplay.classList.remove("hidden");
          btnHit.classList.add("hidden");
          btnHit2.classList.add("hidden");
          btnHit3.classList.add("hidden");
          btnHit4.classList.add("hidden");
          btnHit5.classList.add("hidden");
          btnDouble.classList.add("hidden");
          btnStand.classList.add("hidden");
          btnSurrender.classList.add("hidden");
        }
        // If sum_player > sum_dealer draw card #6
        if (sum_player > sum_dealer) {
          dealerCard[5].classList.remove("hidden");
          dealerCard[5].src = `assets/${typeDealer6}_${numberDealer6}.png`;

          // Adding card value to sum_dealer
          if (numberDealer6 > 10) {
            sum_dealer += 10;
          } else if (numberDealer6 == 1) {
            sum_dealer += 11;
          } else {
            sum_dealer += numberDealer6;
          }

          // Deciding if ace is 1 or 11 if no 1
          if (sum_dealer > 21) {
            if (numberDealer1 == 1 && dealer_card_1_1 == false) {
              sum_dealer -= 10;
              dealer_card_1_1 = true;
            } else if (numberDealer2 == 1 && dealer_card_1_2 == false) {
              sum_dealer -= 10;
              dealer_card_1_2 = true;
            } else if (numberDealer3 == 1 && dealer_card_1_3 == false) {
              sum_dealer -= 10;
              dealer_card_1_3 = true;
            } else if (numberDealer4 == 1 && dealer_card_1_4 == false) {
              sum_dealer -= 10;
              dealer_card_1_4 = true;
            } else if (numberDealer5 == 1 && dealer_card_1_5 == false) {
              sum_dealer -= 10;
              dealer_card_1_5 = true;
            } else if (numberDealer6 == 1 && dealer_card_1_6 == false) {
              sum_dealer -= 10;
              dealer_card_1_6 = true;
            }
          }

          // Checking if dealer wins card #6
          if (sum_dealer > sum_player) {
            dealer_status.classList.remove("hidden");
            dealer_status.textContent = `Dealer wins!`;
            btnReplay.classList.remove("hidden");
            btnHit.classList.add("hidden");
            btnHit2.classList.add("hidden");
            btnHit3.classList.add("hidden");
            btnHit4.classList.add("hidden");
            btnHit5.classList.add("hidden");
            btnDouble.classList.add("hidden");
            btnStand.classList.add("hidden");
            btnSurrender.classList.add("hidden");
          }

          // Checking if dealer busts
          if (sum_dealer > 21) {
            dealer_status.classList.remove("hidden");
            dealer_status.textContent = `Dealer bust, player wins!`;
            btnReplay.classList.remove("hidden");
            btnHit.classList.add("hidden");
            btnHit2.classList.add("hidden");
            btnHit3.classList.add("hidden");
            btnHit4.classList.add("hidden");
            btnHit5.classList.add("hidden");
            btnDouble.classList.add("hidden");
            btnStand.classList.add("hidden");
            btnSurrender.classList.add("hidden");
          }

          // Checking for equal card #6
          if (sum_dealer == sum_player) {
            dealer_status.classList.remove("hidden");
            dealer_status.textContent = `Game is drawn!`;
            btnReplay.classList.remove("hidden");
            btnHit.classList.add("hidden");
            btnHit2.classList.add("hidden");
            btnHit3.classList.add("hidden");
            btnHit4.classList.add("hidden");
            btnHit5.classList.add("hidden");
            btnDouble.classList.add("hidden");
            btnStand.classList.add("hidden");
            btnSurrender.classList.add("hidden");
          }
        }
      }
    }
  }
  // Checking for equal card
  else if (sum_dealer == sum_player) {
    dealerCard[1].src = `assets/${typeDealer2}_${numberDealer2}.png`;
    dealer_status.classList.remove("hidden");
    dealer_status.textContent = `Game is drawn!`;
    btnReplay.classList.remove("hidden");
    btnHit.classList.add("hidden");
    btnHit2.classList.add("hidden");
    btnHit3.classList.add("hidden");
    btnHit4.classList.add("hidden");
    btnHit5.classList.add("hidden");
    btnDouble.classList.add("hidden");
    btnStand.classList.add("hidden");
    btnSurrender.classList.add("hidden");
  }

  // Checking if dealer busts
  else {
    dealerCard[1].src = `assets/${typeDealer2}_${numberDealer2}.png`;
    dealer_status.classList.remove("hidden");
    dealer_status.textContent = `Dealer wins!`;
    btnReplay.classList.remove("hidden");
    btnHit.classList.add("hidden");
    btnHit2.classList.add("hidden");
    btnHit3.classList.add("hidden");
    btnHit4.classList.add("hidden");
    btnHit5.classList.add("hidden");
    btnDouble.classList.add("hidden");
    btnStand.classList.add("hidden");
    btnSurrender.classList.add("hidden");
  }
});
