import Link from "next/link";

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);
  console.log(photos, "poh");
  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`/photos/${id}`} passHref>
          {id}
        </Link>
      ))}
    </section>
  );
}
