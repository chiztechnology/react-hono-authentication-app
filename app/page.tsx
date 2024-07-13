import { Metadata } from "next";
import ProfilePage from "./profile/page";

export const metadata: Metadata = {
  title: "Authentication app",
  description: "build with react & hono proxy server",
};


export default function Home() {
  return (
    <>
      <ProfilePage/>
    </>
  );
}
