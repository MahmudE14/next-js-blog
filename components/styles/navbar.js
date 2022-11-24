import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 10;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height .5s, line-height: .5s;
`
