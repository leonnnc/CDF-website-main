export type Course = {
  id: string;
  title: string;
  description: string;
  teacher: {
    name: string;
    image: string;
  };
  startDate: string;
  url: string;
};
