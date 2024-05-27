import Link from "next/link";
import { Modal } from "./modal";

export default function PhotoModal({ params }) {
  console.log(params.photos);
  return (
    <>
      {params?.photos?.length ? (
        <div>
          <Link href={`/photos/${+params.photos[1] + 1}`}>
            {params.photos[1]}
          </Link>{" "}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
