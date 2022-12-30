import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
export const useRegisterMutation = () => {
  const [registerMutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(REGISTER);

  return { registerMutation, mutationLoading, mutationError };
};
