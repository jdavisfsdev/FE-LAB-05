export async function getQuote() {
  const res = await fetch('https://officeapi.dev/api/quotes/random');
  const json = await res.json();
  console.log(json);
  return json;
}

