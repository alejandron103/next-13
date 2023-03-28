export default function Post ({ params }: any) {
  const { id } = params
  return (
    <h1>Esto es un post {id}</h1>
  )
}
