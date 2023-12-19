import { ref, watch } from "vue";
import { configureCompat } from "@vue/compat";
const theme = ref("bootstrap");

const setRootStyles = async (theme) => {
  let styles = "";
  let mode = 3;

  if (theme.value === "bootstrap") {
    styles = (await import("./bootstrap-theme")).default;
  } else {
    styles = (await import("./vuetify-theme")).default;
  }

  document.querySelector("#vendor-css").innerHTML = styles;

  configureCompat({
    MODE: mode,
    GLOBAL_EXTEND: true,
    INSTANCE_LISTENERS: true
  });
};

export default function useTheme() {
  const setup = () => {
    watch(theme, () => {
      setRootStyles(theme);
    });

    setRootStyles(theme);
  };

  return {
    theme,
    setup
  };
}
