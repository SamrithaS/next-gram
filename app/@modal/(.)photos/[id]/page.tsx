import { Modal } from "./modal";
import Link from "next/link";
export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      {" "}
      <Link href={`/photos/${+photoId + 1}`}> {photoId}</Link>
    </Modal>
  );
}
