# Bingo

Play a game of bingo against a computer to see if you can win.

### Odds of winning v1.0

While I coded the game to be equally random for the player and the computer, tests and player feedback has shown that the computer is more likely to win.

### How to play

Go to: [Bingo](https://domenick97.github.io/Bingo/) (https://domenick97.github.io/Bingo/)

> The bingo project is under major UI re-construction and might be unavailable at the links above.  

**or**

Download repo  
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
* The app will automatically reload if you change any of the source files.


### How to deploy with GitHub Pages
```
npm deploy
```

### Deploying to Heroku
To deploy the lastest verison of the bingo server first login to Heroku using the Heroku CLI
```
heroku login
```
Then deploy the lastest verison of master to Heroku
```
git push heroku master
```

To check logs for errors or debugging purposes
```
heroku logs --tail
```

### Versions
Angular CLI: 9.1.7  
Node: 14.4.0  
Angular: 9.1.9
Heroku CLI: 7.42.1
