export default function makeColor() {
  const character = '0123456789abcdef'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += character[Math.floor(Math.random() * 16)]
  }
  return color
}
