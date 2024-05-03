export interface CartItemProps {
  _id: string;
  image: string;
  title: string;
  instructor: string;
  language: string;
  price: number;
  duration: string;
  sections: [
    {
      _id: string;
      title: string;
      lectures: [
        {
          _id: string;
          title: string;
        }
      ];
    }
  ];
  skillLevel: string;
}

export interface CartListProps {
  cartCourses: CartItemProps[];
}
