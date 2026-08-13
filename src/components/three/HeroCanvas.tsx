import { Component, useEffect, useState, lazy, Suspense, type ReactNode } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

class ErrorBoundaryLite extends Component<
  { children: ReactNode; onError: () => void },
  { crashed: boolean }
> {
  override state = { crashed: false };
  static getDerivedStateFromError() {
    return { crashed: true };
  }
  override componentDidCatch() {
    this.props.onError();
  }
  override render() {
    return this.state.crashed ? null : this.props.children;
  }
}

function Fallback({ dim }: { dim: boolean }) {
  return (
    <div
      className="absolute inset-0 transition-opacity duration-1000"
      style={{ opacity: dim ? 0.35 : 1 }}
    >
      <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-strong opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border opacity-60" />
      <div
        className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "var(--gradient-accent)", opacity: 0.22 }}
      />
    </div>
  );
}

/** Lazily mounts the WebGL scene on the client only, with a CSS fallback. */
export function HeroCanvas() {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const supported = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(window.WebGLRenderingContext && canvas.getContext("webgl2"));
      } catch {
        return false;
      }
    })();
    if (!supported) {
      setFailed(true);
      return;
    }
    const timer = window.setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Fallback dim={ready && !failed} />
      {ready && !failed ? (
        <Suspense fallback={null}>
          <ErrorBoundaryLite onError={() => setFailed(true)}>
            <HeroScene />
          </ErrorBoundaryLite>
        </Suspense>
      ) : null}
    </div>
  );
}
