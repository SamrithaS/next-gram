"use client";

import Link from "next/link";
import { ClientComponent } from "../../components/_ClientComponent";
import Page from "../_page";

export default function PhotoPage({ params }: any) {
  console.log(params, "params");

  // if (!params.photos) {
  //   return <Page />;
  // }

  return (
    <>
      <Page />
      {params?.photos?.[1] ? (
        <div>
          <a
            className="card"
            href={`/photos/${params.photos[1]}`}
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, "", `/photos/${params.photos[1]}`);
            }}
          >
            {params.photos[1]}
          </a>
          <ClientComponent />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
