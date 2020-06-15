const input = (key: string) => Deno.env.get(`INPUT_${key}`);

const eventName = input('EVENT');
const key = input('KEY');
const value1 = input('VALUE1');
const value2 = input('VALUE2');
const value3 = input('VALUE3');

console.log(`calling webhook for ${eventName} with`, value1, value2, value3);

await fetch(`https://maker.ifttt.com/trigger/${eventName}/with/key/${key}`, {
  method: 'POST',
  body: JSON.stringify({ value1, value2, value3 }),
});
