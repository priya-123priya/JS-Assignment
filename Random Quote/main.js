var quotes =['The secret of getting ahead is getting started – Mark Twain',
'Its hard to beat a person who never gives up- Babe Ruth',
'Do one thing every day that scares you ― Eleanor Roosevelt',
'Its no use going back to yesterday, because I was a different person then― Lewis Carroll',
'Happiness is not something ready made. It comes from your own actions― Dalai Lama XIV',
'Whatever you are, be a good one― Abraham Lincoln',
'The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances',
'Impossible is just an opinion – Paulo Coelho',
'Magic is believing in yourself. If you can make that happen, you can make anything happen– Johann Wolfgang Von Goethe',
'Don’t be afraid to give up the good to go for the great– John D. Rockefeller',
'If something is important enough, even if the odds are stacked against you, you should still do it– Elon Musk',
        ];

      var btn = document.getElementById("btn");
      var output = document.getElementById("output");
       
        function getQuote()
        {  var number = quotes[Math.floor(Math.random()*quotes.length)];
            document.getElementById("output").innerHTML = number; 
        }
