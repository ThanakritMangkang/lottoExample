import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [reward, setReward] = useState(null);
  const [objectReward, setObjectReward] = useState([]);
  const [value, setValue] = useState();
  const [results, setResults] = useState(null);

  function GenerateReward() {
    const f_Reward = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const f_Reward_1 = f_Reward + 1;
    const f_Reward_2 = f_Reward - 1;

    const S_Reward_1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const S_Reward_2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const S_Reward_3 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

    const f_Reward_R = f_Reward.toString().slice(1, 3);
    const rw = {
      f_Reward: f_Reward.toString(),
      f_Reward_1: f_Reward_1.toString(),
      f_Reward_2: f_Reward_2.toString(),
      S_Reward_1: S_Reward_1.toString(),
      S_Reward_2: S_Reward_2.toString(),
      S_Reward_3: S_Reward_3.toString(),
      f_Reward_R: f_Reward_R,
    };

    let ObjectReward = [];
    Object.keys(rw).map((key) => {
      if (key.includes("f_Reward")) {
        if (key.includes("f_Reward_")) {
          if (key.includes("f_Reward_R")) {
            return ObjectReward.push({
              name: "รางวัลข้างเคียงรางวัลที่ 1 (2 ตัวท้าย)",
              value: rw[key],
            });
          }

          return ObjectReward.push({
            name: "รางวัลข้างเคียงรางวัลที่ 1",
            value: rw[key],
          });
        }

        return ObjectReward.push({ name: "รางวัลที่ 1", value: rw[key] });
      } else if (key.includes("S_Reward")) {
        return ObjectReward.push({ name: "รางวัลที่ 2", value: rw[key] });
      } else {
        return "";
      }
    });
    setObjectReward(ObjectReward);
    setReward(rw);
  }

  function SearchReward() {
    if (objectReward.length > 0 && value) {
      const res = objectReward.find((f) => f.value === value);
      if (res) {
        setResults(res);
      } else {
        setResults({ name: "เสียใจด้วยคุณไม่ถูกรางวัล", value: "" });
      }
    }
  }

  function onChangeValue(event) {
    const value = event.target.value;
    setValue(value);
  }
  return (
    <VStack minH="100vh" p="2em">
      <Container minW={"container.xl"}>
        <Box borderRadius="md" bg="#000" w="100%" p={4}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            color="cyan.400"
          >
            ผลการตรวจรางวัลล็อตเตอรี่ Diversition
          </Text>
        </Box>
        <Button
          margin={6}
          onClick={() => GenerateReward()}
          variant="outline"
          colorScheme="cyan"
          fontSize="xl"
          fontWeight="bold"
        >
          ดำเนินการสุ่มรางวัล
        </Button>
        <TableContainer py="1em">
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td
                  borderBottom="1px solid #fff"
                  borderRight="1px solid #000"
                  borderTop="1px solid #000"
                  borderLeft="1px solid #000"
                  bg="#000"
                  color="cyan.400"
                  colSpan={2}
                  fontSize="xl"
                  fontWeight="bold"
                >
                  รางวัลที่ 1
                </Td>
                <Td border="1px solid #000" colSpan={2}>
                  <Text textAlign="center">{reward?.f_Reward || "-"}</Text>
                </Td>
              </Tr>
              <Tr>
                <Td
                  borderBottom="1px solid #fff"
                  borderRight="1px solid #000"
                  borderLeft="1px solid #000"
                  bg="#000"
                  color="cyan.400"
                  colSpan={2}
                  fontSize="md"
                  fontWeight="bold"
                >
                  รางวัลเลขข้างเคียงรางวัลที่ 1
                </Td>
                <Td border="1px solid #000">
                  <Text textAlign="center">{reward?.f_Reward_1 || "-"}</Text>
                </Td>
                <Td border="1px solid #000">
                  <Text textAlign="center">{reward?.f_Reward_2 || "-"}</Text>
                </Td>
              </Tr>
              <Tr>
                <Td
                  borderBottom="1px solid #fff"
                  borderLeft="1px solid #000"
                  bg="#000"
                  color="cyan.400"
                  fontSize="md"
                  fontWeight="bold"
                >
                  รางวัลที่ 2
                </Td>
                <Td
                  border="1px solid #fff"
                  borderRight="1px solid #000"
                  bg="#000"
                  color="cyan.400"
                  fontWeight="bold"
                >
                  <Text textAlign="center">{reward?.S_Reward_1 || "-"}</Text>
                </Td>
                <Td border="1px solid #000">
                  <Text textAlign="center">{reward?.S_Reward_2 || "-"}</Text>
                </Td>
                <Td border="1px solid #000">
                  <Text textAlign="center">{reward?.S_Reward_3 || "-"}</Text>
                </Td>
              </Tr>
              <Tr>
                <Td
                  borderBottom="1px solid #000"
                  borderLeft="1px solid #000"
                  bg="#000"
                  color="cyan.400"
                  colSpan={2}
                  fontSize="md"
                  fontWeight="bold"
                >
                  รางวัลข้างเคียงรางวัลที่ 1
                </Td>
                <Td border="1px solid #000" colSpan={2}>
                  <Text textAlign="center">{reward?.f_Reward_R || "-"}</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Card>
          <CardHeader bg="cyan.400" color="#fff" fontWeight={600} fontSize="xl">
            ตรวจรางวัลล็อตเตอรรี่ Diversition
          </CardHeader>
          <CardBody>
            <Grid pb="1em" width="50%" templateColumns="repeat(3, 1fr)">
              <GridItem>
                <Text w="9em" m={1}>เลขล็อตเตอรี่: </Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Input init
                  border="3px solid cyan"
                  value={value}
                  onChange={onChangeValue}
                  type="text"
                ></Input>
              </GridItem>
            </Grid>
            {results && (
              <Grid pb="1em" width="50%" templateColumns="repeat(3, 1fr)">
                <GridItem></GridItem>
                <GridItem colSpan={2}>
                  {results.value !== "" && "ยินดีด้วยคุณถูก "}
                  {results.name + " " + results.value}
                </GridItem>
              </Grid>
            )}
            <Grid pb="1em" width="50%" templateColumns="repeat(3, 1fr)">
              <GridItem></GridItem>
              <GridItem colSpan={2}>
                <Button onClick={() => SearchReward()} border="2px solid #000">
                  ค้นหา
                </Button>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </Container>
    </VStack>
  );
}

export default App;
