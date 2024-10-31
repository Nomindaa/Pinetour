import { Destination, Header, Hero } from "./components";

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Hero />
      <Destination />
    </div>
  );
};
