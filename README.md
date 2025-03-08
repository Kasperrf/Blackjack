My very first standalone project.

Live version here: https://kasperrf.github.io/Blackjack/

> javascript-exercises@1.0.0 test
> jest findTheOldest.spec.js

 FAIL  12_findTheOldest/findTheOldest.spec.js
  findTheOldest
    ✕ finds the person with the greatest age! (3 ms)
    ○ skipped finds the oldest person if yearOfDeath field is undefined on a non-oldest person
    ○ skipped finds the oldest person if yearOfDeath field is undefined for the oldest person

  ● findTheOldest › finds the person with the greatest age!

    expect(received).toBe(expected) // Object.is equality

    Expected: "Ray"
    Received: undefined

      20 |       },
      21 |     ]
    > 22 |     expect(findTheOldest(people).name).toBe('Ray');
         |                                        ^
      23 |   });
      24 |   test.skip('finds the oldest person if yearOfDeath field is undefined on a non-oldest person', () => {
      25 |     const people = [

      at Object.toBe (12_findTheOldest/findTheOldest.spec.js:22:40)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 skipped, 3 total
Snapshots:   0 total
Time:        0.213 s, estimated 1 s
Ran all test suites matching /findTheOldest.spec.js/i.
