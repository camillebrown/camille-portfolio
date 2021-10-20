import React from 'react';
import { Flex } from '@chakra-ui/react';

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      mb={8}
      className="static-nav"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
