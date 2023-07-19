import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";

import { App } from "@components";

const Home: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh">
      <App />
    </Flex>
  );
};

export default Home;
