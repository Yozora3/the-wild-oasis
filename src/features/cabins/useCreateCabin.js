import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin has been succesfully created");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: () => {
      toast.error("New cabin could not be created");
    },
  });
  return { isCreating, createCabin };
}
