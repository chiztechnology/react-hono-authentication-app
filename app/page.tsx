'use client'
import { Metadata } from "next";
import ProfilePage from "./profile/page";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Authentication app",
//   description: "build with react & hono proxy server",
// };


export default function Home() {

  const user = useSelector<RootState, any>(state => state.user);
  const router = useRouter();
  user.userId === 0 ? router.push('/signin') : router.push('/profile')

}
