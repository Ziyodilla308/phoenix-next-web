export type CategoryType = {
  id: number | string;
  categoryImg: string;
  categoryName: string;
  value?: string;
};

export const categoriesOneData: CategoryType[] = [
  {
    id: 1,
    categoryImg: "/images/pmt_automation/1IMG.png",
    categoryName: "FG-666EST-1",
  },
  {
    id: 2,
    categoryImg: "/images/pmt_automation/2IMG.png",
    categoryName: "FG-799-0",
  },
  {
    id: 3,
    categoryImg: "/images/pmt_automation/3IMG.png",
    categoryName: "FW-777",
  },
  {
    id: 4,
    categoryImg: "/images/pmt_automation/4IMG.png",
    categoryName: "SL-701-460",
  },
  {
    id: 5,
    categoryImg: "/images/pmt_automation/5IMG.png",
    categoryName: "SL-808T-4",
  },
];
