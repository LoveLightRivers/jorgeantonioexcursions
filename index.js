import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Jorge Antonio Excursions</h1>
      <p>Explore the 7 Bays of Huatulco by boat with snorkeling, sunset views, and sport fishing.</p>
      <ul>
        <li><Link href="/en">View in English</Link></li>
        <li><Link href="/es">Ver en Español</Link></li>
        <li><Link href="/fr">Voir en Français</Link></li>
      </ul>
    </main>
  );
}