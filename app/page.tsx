"use client";

import BackToTop from "@/components/BackToTop";
import NavBar from "@/components/NavBar";
import client from "@/tina/__generated__/client";
import { useEffect, useState } from "react";
import HomePage from "../components/HomePage";

export default function Home() {
  const [graphQLResponse, setGraphQLResponse] = useState<any>();

  useEffect(() => {
    const fetchContent = async () => {
      const result = await client.queries.page({
        relativePath: "home.md",
      });
      setGraphQLResponse(result);
    };
    fetchContent();
  }, []);

  return (
    <main>
      {graphQLResponse ? (
        <>
          <NavBar />
          <div className="w-full md:max-w-2xl mx-auto px-8">
            <HomePage data={graphQLResponse} />
          </div>
          <BackToTop />
        </>
      ) : (
        <div className="w-full min-h-screen flex justify-center items-center">
          Loading...
        </div>
      )}
    </main>
  );
}
