import Navbar from "./Navbar";
import Footer from "./footer";
import { Box, Flex, Stack, useColorMode } from "@chakra-ui/react";
import styles from "../styles/global.module.scss";

export default function Layout({ children }) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box >
        <Navbar />
        <Stack as="main" p={2} spacing={8} justifyContent="center" alignItems="flex-start">
          {children}
        </Stack>
        <Footer />
      </Box>
    </>
  );
}
