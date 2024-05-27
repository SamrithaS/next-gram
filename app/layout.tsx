import "./global.css";
import { ClientComponent } from "../components/_ClientComponent";

export const metadata = {
  title: "NextGram",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://nextgram.vercel.app"),
};

export default function RootLayout(props: {
  children: React.ReactNode;
  // modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ClientComponent />
        {props.children}
        {/* {props.modal} */}
        <div id="modal-root" />
      </body>
    </html>
  );
}
