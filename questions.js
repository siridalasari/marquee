//1. How many films has Shah Rukh Khan acted in?
const filmsDetails = Deno.readTextFileSync("./final.csv");

const actedFilmsCount = (list) => {
 return (list.match(/Actor/g)).length;
}

console.log(actedFilmsCount(filmsDetails));

const countOfMoviesActedInYear = (list) => {
  const years = (list.match(/.*,[0-9]*,/g)).map(x => (/[0-9]*/).match(x));
  return years;
  //return (list.match(/.*,[0-9]*,/g)).slice(-1);
}

console.log(countOfMoviesActedInYear(filmsDetails));
























// // 1
// grep "Actor" finalSrk.csv| wc -l

// //2 most number of movies acted in a year and count
// grep "Actor" finalSrk.csv | cut -d"," -f2 | sort | uniq -c | sort |tail -n1

// //3 directors list under shar acted
// grep "Actor" | grep -o "[^,\!]*$" finalSrk.csv |sort |uniq

// //4 directors list with whom srk worked for more than once
// grep -o "[^,\!]*$" finalSrk.csv |sort | uniq -d 

// //5 frequent starting letter of movie
//  cut -c1 finalSrk.csv|sort | uniq -c |sort -r |head -n1 

// //6 year and name in desc order
// cut -d"," -f1,2 finalSrk.csv | sort -r | sort -s -t"," -k2

// //7th most frequent director
// grep -o "[^,]*$" finalSrk.csv |sort | uniq -c |sort -r|head -n1

// //8th most frequenly movie name starts with
// cut -d"," -f1 finalSrk.csv | cut -d" " -f1 |sort| uniq -c |sort -r | head -n2

// //9th most frequent word in movie names
// cut -d"," -f1 finalSrk.csv | tr ' ' '\n' |sort|uniq -c| sort |tail -n1 |grep -o "[^ ]*$"
