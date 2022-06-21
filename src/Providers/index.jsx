import { MenuSelectControlProvider } from "./MenuSelectControl";
import { ThemeControlProvider } from "./ThemeControl";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeControlProvider>
        <MenuSelectControlProvider>{children}</MenuSelectControlProvider>
      </ThemeControlProvider>
    </>
  );
};

export default Providers;
