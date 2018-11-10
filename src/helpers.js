export function formatCounters(string) {
  let count = string
  const s = string
  if (Number(s) > 1000000000) { count = s.slice(0, -9) + "B" }
  else if (Number(s) > 1000000) { count = s.slice(0, -6) + "M" }
  else if (Number(s) > 100000) { count = s.slice(0, -3) + "K" }
  else if (Number(s) > 10000) { count = s.slice(0, -3) + "K" }
  else if (Number(s) > 1000) { count = s.slice(0, -3) + "." + s.slice(1, -2) + "K" }
  return count
}


export function formatDuration(string) {
  return string
  // return string.replace('PT', '').replace('M', ':').replace('S', '')
}
