import { useMutation } from "@tanstack/react-query";
import { ContactoAPI } from "../api/ContactoApi";

const postContacto = async (data) => {
  return await ContactoAPI.post(`create`, data);
};

export const useContacto = () => {
  const contactoMutation = useMutation({
    mutationKey: ["create-contacto"],
    mutationFn: (data) => postContacto(data),
  });

  return {
    contactoMutation,
  };
};
