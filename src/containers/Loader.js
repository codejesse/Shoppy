import styled from "styled-components";

const LoaderWrapper = styled.div`
   height: auto;
`;

export const LoaderImage = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20rem;
   animation: zoom-in-zoom-out 2s ease-out infinite;
   & {
    @keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.5, 1.5);
  }
  100% {
    transform: scale(1, 1);
  }
}
   }
`;

const Loader = () => {
    return (
        <LoaderWrapper>
            <LoaderImage>
                <img src="/Loader.png" width="130px" height="130px" alt="loader-pic" />
            </LoaderImage>
        </LoaderWrapper>
    );
}

export default Loader;