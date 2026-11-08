import { useEffect, useState } from "react";
import {
  Countdown,
  Events,
  Welcome,
  Location,
  Final,
  WishForm,
  Cover,
  Petals,
} from "./components";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [coverGone, setCoverGone] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("lock", !opened);
    if (opened) window.scrollTo(0, 0);
  }, [opened]);

  return (
    <>
      <Petals />
      {opened && (
        <main>
          <Welcome />
          <Events />
          <Countdown />
          <Location />
          <Final />
          <WishForm />
        </main>
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
