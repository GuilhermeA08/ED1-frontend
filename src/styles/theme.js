import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#F2F2F2","#415E64")(props),
      //   height: "100vh",
      },
      // '#__next': {
      //    height: "100vh",
      // }
    })
  },
});

export default theme;