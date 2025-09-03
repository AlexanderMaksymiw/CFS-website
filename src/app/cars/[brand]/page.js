"use client";
import { use } from "react";
import { useRouter } from "next/navigation";

export default function Cars({ params }) {
  // params is a special object provided by Mext.js App Router
  const router = useRouter();
  const resolvedParams = use(params); //unwrap the Promise "tells React wait for the real value of params" after this resolvedParams is a normal object

  return (
    <div>
      <h1 className="text-4x1 font-bold text-blue-500 mb-4">
        {resolvedParams.brand}
      </h1>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  ); // the onClick needs to be wrapped in an arrow function to stop it from running immediately.
}
