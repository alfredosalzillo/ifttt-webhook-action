const input = (key: string) => Deno.env.get(`INPUT_${key}`);

const eventName = input('EVENT');
const key = input('key');
const value1 = input('value1');
const value2 = input('value2');
const value3 = input('value3');

console.log(`calling webhook for ${eventName} with`, value1, value2, value3);

await fetch(`https://maker.ifttt.com/trigger/${eventName}/with/key/${key}`, {
  method: 'POST',
  body: JSON.stringify({ value1, value2, value3 }),
});
