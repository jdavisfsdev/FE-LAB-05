export async function getQuote() {
  const num = randNum();
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();
  return json.results[num + 1].name;
}

function randNum() {
  const number = Math.floor(Math.random() * 19);
  const random = Math.floor(Math.random() * 19);
  if(random !== number) {
    return random;
  }
}

