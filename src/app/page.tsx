export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('http://api.github.com/users/naathanferreira')
  const user = await response.json()

  return <h1>{JSON.stringify(user, null, 2)}</h1>
}
