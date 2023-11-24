export async function onRequestGet(context) {
  return new Response({ foo: "bar" });
}
