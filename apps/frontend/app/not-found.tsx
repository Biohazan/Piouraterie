import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Pas trouver</h2>
      <p>Could not find requested ? `</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
