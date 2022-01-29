import { Box, Flex, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface ContinentInfoProps {
  description: string;
  qnt_country: number;
  qnt_language: number;
  qnt_city: number;
}

export function ContinentInfo({ 
  description, 
  qnt_country, 
  qnt_language, 
  qnt_city 
}: ContinentInfoProps) {
  return (
    <Flex
      maxWidth={1440}
      mx="auto"
      align="center"
      justifyContent="center"
      py="20"
      px="100"
      gap="10"
    >
      <Flex flex="1">
        <Text textAlign="justify">
          {description}
        </Text>
      </Flex>
      <Flex maxWidth="600">
        <HStack spacing="8">
          <Box align="center">
            <Text fontSize="48" color="yellow.500" fontWeight="600">{qnt_country}</Text>
            <Text fontSize="24" color="gray.600" fontWeight="600">países</Text>
          </Box>
          <Box align="center">
            <Text fontSize="48" color="yellow.500" fontWeight="600">{qnt_language}</Text>
            <Text fontSize="24" color="gray.600" fontWeight="600">líguas</Text>
          </Box>
          <Box align="center">
            <Text fontSize="48" color="yellow.500" fontWeight="600">{qnt_city}</Text>
            <Text fontSize="24" color="gray.600" fontWeight="600">
              cidades +100
              <Tooltip
                  label="100 cidades mais visitadas do mundo"
                  bg="gray.600"
                  color="gray.50"
                  display="inline-block"
                >
                  <span>
                    <Icon
                      as={FiInfo}
                      fontSize={["xs", "md"]}
                      opacity="0.5"
                      ml="5px"
                    />
                  </span>
                </Tooltip>
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
}