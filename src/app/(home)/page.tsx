import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-4 text-sm font-medium text-fd-muted-foreground">
        Svelte for Lightning TV apps
      </p>
      <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
        Build high-performance TV interfaces with Lightning.
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-fd-muted-foreground">
        Svelte TV brings Svelte's component model to renderer-native,
        focus-driven interfaces for Canvas and WebGL.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/docs"
          className="rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
        >
          Get Started
        </Link>
        <Link
          href="/docs/essentials/focus"
          className="rounded-md border px-4 py-2 text-sm font-medium"
        >
          Learn the Basics
        </Link>
      </div>
    </main>
  );
}
