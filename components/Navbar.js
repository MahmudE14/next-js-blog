import { Box, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import { StickNav } from "./styles/navbar";
import Link from "next/link";

export default function Navbar() {
    const { colorMode } = useColorMode();

    const navHoverBg = {
        light: "gray.600",
        dark: "gray.300"
    }

    const bgColor ={
        ligt: "white",
        black: "#171717"
    }

    return (
        <>
            <StickNav
                flexDir="row"
                justifyContent="space-between"
                alignItems="center"
                maxW="800px"
                minW="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box display="flex">
                    {/* <Text>JSON Blog</Text> */}
                    <Link href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}
                            /* _hover={{ backgroundColor: navHoverBg[colorMode] }} */
                        >Home</Button>
                    </Link>
                    <Link href="/blog" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>Blog</Button>
                    </Link>
                </Box>
                <DarkModeSwitch />
            </StickNav>
        </>
    )
}
