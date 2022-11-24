import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import BlogItem from "./BlogItem";
import { getPostsAsync, deletePost, showPosts } from "../../../redux/blogSlice"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Blog() {
  const posts = useSelector(showPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

  let post = {
    title: "Taking Care of the Mess",
    author_name: "George Harrison Ford",
    author_avatar: "https://via.placeholder.com/150/92c952",
    post_body: "View a summary of all your clients over the last month. View a summary of all your clients over the last month. View a summary of all your clients over the last month. View a summary of all your clients over the last month.",
  };

  return (
    <>
      <Flex flexDirection="column" minW={365} maxW={800} mx="auto">
        <Heading mb={5}>Our Blog Posts</Heading>

        <Stack display="flex" flexDirection="column">
          <BlogItem
            title={post.title}
            author_name={post.author_name}
            author_avatar={post.author_avatar}
            post_body={post.post_body}
          />
          <BlogItem
            title={post.title}
            author_name={post.author_name}
            author_avatar={post.author_avatar}
            post_body={post.post_body}
          />
          <BlogItem
            title={post.title}
            author_name={post.author_name}
            author_avatar={post.author_avatar}
            post_body={post.post_body}
          />
        </Stack>
      </Flex>
    </>
  );
}
