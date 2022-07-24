import * as React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import CustomDrawer from "./Drawer/CustomDrawer";
import { useDisclosure } from "@chakra-ui/hooks";
import { ColorModeSwitcher } from "../../styles/themes/ColorModeSwitcher";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ReactComponent as LogoBlack } from "./../../images/logo/static/shaastra_tm_logo_black.svg";
import { ReactComponent as LogoWhite } from "./../../images/logo/static/shaastra_tm_logo_white.svg";
// import LogoBlack from "./../../images/logo/static/shaastra_tm_logo_black.svg";
// import LogoWhite from "./../../images/logo/static/shaastra_tm_logo_white.svg";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";

interface Props {}

const Header = (props: Props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const drawerOpenHandler = () => {
    onOpen();
  };

  const HeaderLogo = useColorModeValue(LogoBlack, LogoWhite);
  const height = useBreakpointValue({ base: "56", lg: "66" });
  return (
    <Flex
      w="100%"
      position="absolute"
      p={3}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      height="min"
      zIndex="2"
    >
      <CustomDrawer onClose={onClose} isOpen={isOpen} />
      <Link to="/">
        <HeaderLogo height={height} width="auto" />
      </Link>
      <Box>
        <ColorModeSwitcher justifySelf="flex-end" />
        <HamburgerIcon
          w={{ base: 6, lg: 8 }}
          h={{ base: 6, lg: 8 }}
          m={3}
          onClick={drawerOpenHandler}
        />
      </Box>
    </Flex>
  );
};

export default Header;
