import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Box,
    Heading,
    Avatar,
    Text
} from "@chakra-ui/react";
import Link from "next/link";

export default function BlogItem({ title, author_name, author_avatar, post_body }) {
  return (
    <Card p={[3, 3]} shadow="md" border="1px">
      <CardHeader>
        <Link href="#0">
          <Heading size="lg" textTransform="uppercase">
            Taking Care of the Mess
          </Heading>
        </Link>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          mt={1}
        >
          <Avatar name="George Harrison Ford" />
          <Heading size="sm" ml={3}>
            George Harrison Ford
          </Heading>
        </Box>
      </CardHeader>
      <CardBody>
        <Text>
          View a summary of all your clients over the last month. View a summary of all your clients over the last month. View a summary of all your clients over the last month. View a summary of all your clients over the last month.
        </Text>
      </CardBody>
      <CardFooter>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
        totam.
      </CardFooter>
    </Card>
  );
}
