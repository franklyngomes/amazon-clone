import { useMutation } from "@tanstack/react-query";
import { SignUpApi } from "../functions/SignUpApi";
import { SignInApi } from "../functions/SignInApi";

export const SignUpQuery = () => {
  return useMutation({
    mutationFn: (formdata) => SignUpApi(formdata),
    onSuccess: (response) => { 
      toast.success(response?.data.message)
    },
    onError: (response) => {
      toast.error(response?.data?.message)
    }
  })
}
export const SignInQuery = () => {
  return useMutation({
    mutationFn: (formdata) => SignInApi(formdata),
    onSuccess: () => {}
  })
}