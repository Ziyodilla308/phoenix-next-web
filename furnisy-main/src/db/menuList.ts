export type MegamenuType = {
  id: string | number;
  menus: {
    id: string | number;
    title?: string;
    items: {
      id: string | number;
      label: string;
      path: string;
      img?: string;
    }[];
  }[];
};

export type menuType = {
  id: string | number;
  label: string;
  path: string;
  dropdownList?: {
    id: string | number;
    label: string;
    path: string;
  }[];
  megaMenu?: MegamenuType[];
};

export const menuList: menuType[] = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  // {
  //   id: 2,
  //   label: "Shop",
  //   path: "/shop",
  // },
  {
    id: 5,
    label: "Pages",
    path: "#",
    megaMenu: [
      // {
      //   id: 1,
      //   menus: [
      //     {
      //       id: 0,
      //       title: "Информационный центр",
      //       items: [
      //         // {
      //         //   id: 4,
      //         //   label: "Блог",
      //         //   path: "/product-details",
      //         // },
      //       ],
      //     },
      //   ],
      // },
      {
        id: 2,
        menus: [
          {
            id: 0,
            title: "Продукты",
            items: [
              {
                id: 1,
                label: "Гладильное оборудование",
                path: "/ironing-equipment",
              },
              {
                id: 2,
                label: "SHING LING",
                path: "https://shingling.com.tw/en/product-2/",
              },
              {
                id: 3,
                label: "Автоматические машины",
                path: "/auto-machine",
              },
              {
                id: 4,
                label: "Компютеризированные лазерные машины",
                path: "/computerized-laser-machines",
              },
              {
                id: 5,
                label: "Автомазированное проектирование",
                path: "/automated-design",
              },
              {
                id: 6,
                label: "Раскройные машины",
                path: "/cutting-machines",
              },
              {
                id: 7,
                label: "Пресс",
                path: "/press",
              },
              {
                id: 8,
                label: "Вспомогательные машины",
                path: "/auxiliary-machines",
              },
              {
                id: 9,
                label: "Аксессуары и запасные части",
                path: "/accessories-and-spare-parts",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Contact",
    path: "/contact-us",
  },
];
