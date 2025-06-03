import { useMutation } from "@tanstack/react-query";
import { ResenaAPI } from "../api/ResenaApi";

const postResena = async (data) => {
  return await ResenaAPI.post(`create`, data);
};

export const useResena = () => {
  const resenaMutation = useMutation({
    mutationKey: ["create-resena"],
    mutationFn: (data) => postResena(data),
  });

  return {
    resenaMutation,
  };
};
