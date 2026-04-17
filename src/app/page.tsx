"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [appName, setAppName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/app-name")
      .then((res) => res.json())
      .then((data) => {
        setAppName(data.appName);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex h-full min-h-screen items-center justify-center bg-background text-foreground">
      <main>
        {loading ? (
          <div className="text-lg text-muted-foreground">加载中...</div>
        ) : (
          <h1 className="text-4xl font-bold">{appName}</h1>
        )}
      </main>
    </div>
  );
}
