# bet-slip

I wanted to write a couple points on where I would improve this application. There is a fair bit I would improve on this but wasn't able to address within the time frame.

With testing I would have set unit and integration tests with jest.

For state management I have a top level component with a hash table of the selected bets and boolean which gets updated when the bet has been placed.

I wasn't sure wether to use Redux with this application as it seems quite simple on the surface. That being siad there are definitely a few arguments in favour of using some kind state management library.

Another feature I would have added would have been typescript. I would have added it from the start but I wanted to get moving on devlopeing the structure and components of this app.

Final update would have been routing between the betslip and receipt with react router. Using state to toggle between components seemed like it would keep things simple but having routing would have been a better approach.
