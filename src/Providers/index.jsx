import { ThemeControlProvider } from "./ThemeControl";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeControlProvider>{children}</ThemeControlProvider>
    </>
  );
};

export default Providers;
