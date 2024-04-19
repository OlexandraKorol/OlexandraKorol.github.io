import styled from "@emotion/styled";

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <ErrorMessageText>
      {message}
    </ErrorMessageText>
  );
}

const ErrorMessageText = styled.span`
  color: #fd5c63;
  font-size: 10
`