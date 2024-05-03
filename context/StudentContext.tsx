import { usePostHttp } from "@/hooks/usePostHttp";
import { StudentContextType } from "@/types/student/StudentContextType";
import { getAuthData } from "@/utils/helpers";
import { createContext, useState } from "react";
import useSwr from "swr";

export const StudentContext = createContext<StudentContextType>({
  studentData: {
    _id: "",
    cart: {
      items: [],
      totalAmount: 0,
    },
    favorites: [],
    courses: [],
    first_name: "",
    last_name: "",
  },
  filterData: {
    category: "",
    skillLevel: "",
    language: "",
    duration: "",
  },
  setFilterData: () => {},
  addToFavorites: (id) => {},
  purchaseCourseBuy: () => {},
  // toggleCart: () => {},
  // addToFavorites: () => {},
});

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const StudentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filterData, setFilterData] = useState({
    category: "",
    skillLevel: "",
    language: "",
    duration: "",
  });

  const { sendRequest, isLoading, message } = usePostHttp();

  const authData = getAuthData();
  const studentId = authData?.id;
  const { data: studentData } = useSwr(`/api/student/${studentId}`, fetcher);

  async function addToFavorites(id: string) {
    await sendRequest(
      "POST",
      `/api/courses/${id}/${studentData?._id}/move-to-favorites`
    );
  }

  async function purchaseCourseBuy() {
    const response = await sendRequest(
      "POST",
      `/api/courses/student/${studentData?._id}`
    );

    if (response) {
      alert(response.message);
    }
  }

  return (
    <StudentContext.Provider
      value={{
        studentData,
        filterData,
        setFilterData,
        addToFavorites,
        purchaseCourseBuy,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
