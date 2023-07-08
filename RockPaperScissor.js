
               
                let score = (JSON.parse(localStorage.getItem('score')));            
                if(score === null){
                    score = {
                    wins : 0,
                    losses : 0,
                    tie : 0

                    };
                }

                updateScore();

                let randomNumber; 
                
                let result = '';
                function pickComputerMove(){
                    randomNumber=Math.random();

                if(randomNumber>0 && randomNumber<1/3)
                {
                    computermove ='rock';
                    
                }
                else if(randomNumber>=1/3 && randomNumber<2/3)
                {
                    computermove ='paper';
                    
                }
                else if(randomNumber>=2/3 && randomNumber<1){
                    computermove ='scissors';
                   
                }
                return(computermove);
            
                }
                function playgame(playermove){
                    pickComputerMove();

                    if(playermove==='rock'){

                        if(computermove === 'rock'){
                            result = 'Tie.';
                        }else if(computermove === 'paper'){
                            result = 'You Loss.';
                        }else if(computermove === 'scissors'){
                            result = 'You Win.';
                        }

                    }
                    else if(playermove === 'paper'){
                        if(computermove === 'rock'){
                            result = 'You Win.';}
                        else if(computermove === 'paper'){
                            result = 'Tie.';
                        }else if(computermove === 'scissors'){
                            result = 'You Loss.';
                        }

                    }

                    else if(playermove === 'scissors'){
                        if(computermove === 'rock'){
                            result = 'You Loss.';}
                        else if(computermove === 'paper'){
                            result = 'You Win.';
                        }else if(computermove === 'scissors'){
                            result = 'Tie.';
                        }

                    }
                    if(result ==='You Win.'){
                        score.wins+= 1;
                    }
                    else if(result === 'You Loss.'){
                        score.losses+=1;

                    }
                    else if(result ==='Tie.'){
                        score.tie+=1;
                    }
                    localStorage.setItem('score',JSON.stringify(score));


                    document.querySelector('.js-move') .innerHTML =
                     `You
                    <img src="images/${playermove}-emoji.png" class="icon-moves">
                    <img src="images/${computermove}-emoji.png" class="icon-moves">
                    Computer`;
                   updateScore();

                   document.querySelector('.js-result')
                   .innerHTML = result;

                }

                function updateScore(){
                    document.querySelector('.js-score')
                    .innerHTML = `Wins:${score.wins} , Losses:${score.losses} , Tie:${score.tie}`; 

                }
                
            