import fetch from 'node-fetch'

globalThis.fetch = fetch
const apiUrl = 'https://word-guessing-game.onrender.com'

    
    async function getJson(url) {
        let response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let data = await response.json()
        let gameId = data.game.id
        //let gameBlanks = data.game.blanks
        return "Your Game ID is: " + gameId + "."
    }
    
    function processData(data) {
         console.log(data)
    }
    
    async function main() {
        const data = await getJson(apiUrl)
        processData(data)
    }
    
    main().then();

//const gameId = game.id

// function createGame(){ //CREATE GAME POST REQUEST
//     const data = "";
// fetch(apiUrl, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
//   //console.log(data.game.id, "game id is here")
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// }
// console.log(createGame())


// function getGame(){ //CURRENT STATE OF GAME GET REQUEST
    
//     fetch('https://word-guessing-game.onrender.com/y1av9gnqjwn', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//     }
//     console.log(getGame())

    // function guessLetter(){ //CREATE GAME POST REQUEST
    //     const data = {};
    // fetch('https://word-guessing-game.onrender.com/y1av9gnqjwn/L', {
    //   method: 'PUT', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   //console.log(data.game.id, "game id is here")
    //   return data
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
    // }
    // console.log(guessLetter())

    // async function createGame(){ //CREATE GAME POST REQUEST
    //     const response = await fetch('https://word-guessing-game.onrender.com')
    //     const game = await response.json()
    //     return game
    // }
    
    // createGame().then(game => {
    //     game
    // })
    
    // console.log(createGame())


    //let apiUrl = "https://word-guessing-game.onrender.com"

    // async function getJson(url) {
    //     let response = await fetch(url)
    //     let data = await response.json()
    //     return data
    // }

    // async function main() {
    //     jsondata = await getJson(apiUrl)
    //     console.log(jsondata)
    // }


    // function postData(apiUrl, cb) {
    //     const options = {
    //         method: 'POST'
    //     }
    //     fetch(apiUrl, options)
    //       .then(response => response.json())
    //       .then(result => cb(result));
    //   }
      
    //   const grabId = postData(apiUrl, (data) => console.log({ data }))

    //   console.log(grabId)

    // let jsondata;  
    // function postData(url, cb)  {
    // const options = {
    //             method: 'POST'
    //         }
    // fetch(apiUrl, options).then(
    //     function(u){ return u.json();}
    //   ).then(
    //     function(json){
    //       jsondata = json;
    //       console.log(jsondata)
    //     }
    //   )
    // }
    //   console.log(postData())

    //   function getData() {
    //       fetch(apiUrl).then(
    //         function(u){ return u.json();}
    //       ).then(
    //         function(json){
    //           jsondata = json
    //           console.log(jsondata)
    //         }
    //       )
    //   }

    //   console.log(getData())

    // function createGame(){ //CREATE GAME POST REQUEST
    //     const data = {};
    // fetch(apiUrl, {
    //   method: 'POST', // or 'PUT'
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(getGame())
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
    // }
    // console.log(createGame())
    
    
    // function getGame(game){ //CURRENT STATE OF GAME GET REQUEST
        
    //     fetch(`https://word-guessing-game.onrender.com/`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('Success:', data);
    //       console.log(data.game.id)
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    //     }
    //     console.log(getGame())

    

    // async function getGame() {
    //     let response = await fetch(apiUrl, {
    //         method: 'GET'
    //     });
    //     let data = await response.json()
    //     //let gameId = data.game.id
    //     return data;
    // }

    // console.log(getGame())