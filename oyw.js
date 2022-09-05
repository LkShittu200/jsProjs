/* document.querySelector(".para").innerHTML = "Lukman";

*/

const btn = document.querySelector(".btn");
const person = document.querySelector(".person");
const quote = document.querySelector(".quote");

const quotes = [
  {
    quote: `"The Struggles along the way are only meant to shape you for your purpose."`,
    person: `Chadwick Boseman`,
  },
  {
    quote: `"Victory attained by violence is tantamount to a defeat, for it's momentary."`,
    person: `Mahatma Gandhi`,
  },
  {
    quote: `"The oppressor would not be so strong if he did not have accomplices among the oppressed."`,
    person: `Simeon de Beauvoir`,
  },
  {
    quote: `"Dreams don't work unless you do."`,
    person: `John C. Maxwell`,
  },
  {
    quote: `"Everything that rises sets, and everything that grows, grows old."`,
    person: `Sallust`,
  },
  {
    quote: `"Everything you want is on the other side of fear."`,
    person: `Jack Canfield`,
  },
  {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck"`,
    person: `Dalai Lama`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person;
});
