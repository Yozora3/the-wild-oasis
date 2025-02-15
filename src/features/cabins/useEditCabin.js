import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin has been succesfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: () => {
      toast.error("New cabin could not be edited");
    },
  });
  return { isEditing, editCabin };
}
