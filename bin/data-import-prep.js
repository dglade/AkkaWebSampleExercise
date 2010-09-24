/* Use (and create) a database named stocks_yahoo_NYSE */
use stocks_yahoo_NYSE;

var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
<<<<<<< HEAD
var i=0;
=======
>>>>>>> 12b0c4b5fa46c4f71ba330492b5852d53b6e4db7
for (i=0; i<str.length; i=i+1) {
   var nextChar = str[i];
   print("Creating collections "+nextChar+"_prices and "+nextChar+"_dividends")
   db.createCollection(""+nextChar+"_prices");
   db.createCollection(""+nextChar+"_dividends");
}
