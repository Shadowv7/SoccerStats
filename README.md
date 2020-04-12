# Soccer Stats

### Installation
```
npm i soccer-stats
```
### Example

```js
const Soccer = require("soccer-stats")

// Get best players
Soccer.fetchBestPlayers().then((players) => {
  console.log(players);
})
/*
Top {
  forwardPodium: [
    { 
      name: 'Lionel Messi', 
      nationality: 'Argentine', 
      score: '100' 
    },
    { 
      name: 'Robert Lewandowski', 
      nationality: 'Pologne', 
      score: '95' 
    },
    { 
      name: 'Kylian Mbappé', 
      nationality: 'France', 
      score: '91'
    }
  ],
  offensiveMidfieldersPodium: [
    { 
     name: 'Sadio Mané', 
     nationality: 'Sénégal', 
     score: '100' 
    },
    { 
      name: 'Raheem Sterling',
      nationality: 'Angleterre',
      score: '99' 
    },
    { 
      name: 'Pizzi', 
      nationality: 'Portugal', 
      score: '84' 
    }
  ],
  centralMidfieldersPodium: [
    { 
      name: 'Kevin De Bruyne', 
      nationality: 'Belgique', 
      score: '100' 
    },
    { 
      name: 'Hans Vanaken', 
      nationality: 'Belgique', 
      score: '85' 
    },
    { 
      name: 'Dani Parejo', 
      nationality: 'Espagne', 
      score: '75'
    }
  ],
  centralDefendersPodium: [
    { 
      name: 'Virgil van Dijk', 
      nationality: 'Pays-Bas', 
      score: '100' 
    },
    { 
      name: 'Joe Gomez', 
      nationality: 'Angleterre', 
      score: '62' 
    },
    { 
      name: 'David Alaba', 
      nationality: 'Autriche', 
      score: '58' 
    }
  ],
  lateralDefendersPodium: [
    {
      name: 'Trent Alexander-Arnold',
      nationality: 'Angleterre',
      score: '100'
    },
    {
      name: 'Andrew Robertson', 
      nationality: 'Ecosse', 
      score: '76' 
    },
    {
     name: 'Alex Telles', 
     nationality: 'Brésil', 
     score: '70'
    }
  ],
  goalKeeperPodium: [
    {
     name: 'Alisson Becker',
     nationality: 'Brésil',
     score: '100'
    },
    {
      name: 'Marc-André ter Stegen',
      nationality: 'Allemagne',
      score: '90'
    },
    { 
     name: 'Diego Alves',
     nationality: 'Brésil',
     score: '83'
    }
  ]
}
*/
```# SoccerStats
