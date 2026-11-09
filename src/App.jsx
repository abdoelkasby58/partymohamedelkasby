import { lazy, Suspense, useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Cover from "./components/Cover";
const Countdown = lazy(() => import("./components/Countdown"));
const Events = lazy(() => import("./components/Events"));
const Location = lazy(() => import("./components/Location"));
const Final = lazy(() => import("./components/Final"));
const WishForm = lazy(() => import("./components/WishForm"));
const Petals = lazy(() => import("./components/Petals"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [opened, setOpened] = useState(false);
  const [coverGone, setCoverGone] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("lock", !opened);
    if (opened) window.scrollTo(0, 0);
    return ()=>{
      document.body.classList.remove("lock");

    }
  }, [opened]);

  return (
    <>
      <Petals />
      {opened && (
        <Suspense fallback={null}>
        <main>
          <Welcome />
          <Events />
          <Countdown />
          <Location />
          <Final />
          <WishForm />
          <Footer />
        </main>
        </Suspense>
      )}
      {!coverGone && (
        <Cover
          opened={opened}
          onOpen={() => setOpened(true)}
          onGone={() => setCoverGone(true)}
        />
      )}
    </>
  );
}
