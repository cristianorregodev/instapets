import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
export const useLoginMutation = () => {
  const [login, { loading: mutationLoading, error: mutationError }] =
    useMutation(LOGIN);

  return { login, mutationLoading, mutationError };
};
