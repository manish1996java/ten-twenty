
export const getStatusStyle = (status: string) => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-100 font-bold text-green-700";
    case "INCOMPLETE":
      return "bg-yellow-100 font-bold text-yellow-700";
    case "MISSING":
      return "bg-pink-100 font-bold text-pink-700";
    default:
      return "";
  }
};

export const getAction = (status: string) => {
  if (status === "MISSING") return "Create";
  if (status === "INCOMPLETE") return "Update";
  return "View";
};