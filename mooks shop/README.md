shop items: 
bronze(5 -10 points)
stickers

Silver(10-20 points)
$1-$2 snack

Gold(20-40 points)
starbucks drink
purchase you fav yarn
study in bed pass

optional features
streak system: track study streaks, award bonus points
limited time items: items appear only during certain dates
Flash sales: random item discounts and weekly rorating deals
achievements: studied 5 days in a row = badge/ completed 10 pomodoros = bonus points

save user data to a json file and load it when the programs starts

treasure-shop/
│
├── index.html
├── styles/
│   └── style.css
├── scripts/
│   ├── app.js
│   ├── shop.js
│   ├── tasks.js
│   └── user.js
├── data/
│   ├── items.json
│   └── tasks.json
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
└── README.md

💗 3. scripts/
This folder holds all your logic, organized cleanly.
app.js
Your main controller file.
Handles:
- Loading data
- Updating UI
- Connecting buttons to functions
- Managing the user’s points
shop.js
Handles everything shop‑related.
- Displaying items
- Buying items
- Checking prices
- Sales or limited‑time items
- Filtering by tier (Bronze/Silver/Gold)
tasks.js
Handles point‑earning logic.
- Task list
- Awarding points
- Bonus rules
- Streak tracking (optional)
user.js
Handles user data.
- Points
- Inventory
- Purchase history
- Saving/loading from localStorage
This separation makes your code clean and professional.
