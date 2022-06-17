const baseUrl=location.origin
export default [
  [
    'Test Game',
    'https://ifdb.org/viewgame?id=xxxxxxxxxx',
    `${baseUrl}/if-games/ff.t3`
  ]
].map(([name, ifdb, url]) => ({ name, ifdb, url }))
