import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ResenaAPI } from "../api/ResenaApi";

const postResena = async (data) => {
  return await ResenaAPI.post(`create`, data);
};

const getResena = async () => {
  const response = await ResenaAPI.get("/getAll");
  return response.data;
};

export const useResena = () => {
  const queryClient = useQueryClient();
  const resenasQuery = useQuery({
    queryKey: ["get-resenas"],
    queryFn: getResena,
  });
  const resenaMutation = useMutation({
    mutationKey: ["create-resena"],
    mutationFn: (data) => postResena(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-resenas"] });
    },
  });

  return {
    resenaMutation,
    resenasQuery,
  };
};
