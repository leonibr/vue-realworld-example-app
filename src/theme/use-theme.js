import { ref, watch } from "vue";
const theme = ref("bootstrap");
const mode = ref(3);

const setRootStyles = async (theme) => {
  let styles = "";

  if (theme.value === "bootstrap") {
    mode.value = 2;
    styles = (await import("./bootstrap-theme")).default;
  } else {
    mode.value = 3;
    styles = (await import("./vuetify-theme")).default;
  }
  document.querySelector("#vendor-css").innerHTML = styles;
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
