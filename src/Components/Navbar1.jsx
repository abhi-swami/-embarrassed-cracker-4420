

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";


const Links = ["Offers", "Fanbook", "DownLoad App","TriBe Membership"];
const Links1 = ["Contact Us","Track order"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("lightcoral"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar1() {

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex alignItems={"center"} justifyContent={"space-around"}>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              fontSize={"xs"}
              display={{ base: "none", md: "flex" }}
              >
                 
              {Links.map((link) =>
                link==="DownLoad App"?
                  (<NavLink key={link}><FontAwesomeIcon icon={faDownload}/>{"   "}{  link}</NavLink>):(<NavLink key={link}> {link}</NavLink>)

                  )}
            </HStack>
          </HStack>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              fontSize={"xs"}
              display={{ base: "none", md: "flex" }}
            >
              {Links1.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
