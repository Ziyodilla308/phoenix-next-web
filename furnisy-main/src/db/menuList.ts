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
      {
        id: 1,
        menus: [
          {
            id: 0,
            title: "Информационный центр",
            items: [
              {
                id: 4,
                label: "Блог",
                path: "/product-details",
              },
            ],
          },
        ],
      },
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
                path: "/about-us",
              },
              {
                id: 2,
                label: "SHING LING",
                path: "/contact-us",
              },
              {
                id: 3,
                label:
                  "Автоматическая карманная окантовочная машина с лазерной резкой",
                path: "/cart",
              },
              {
                id: 4,
                label: "Компютеризированные лазерные машины",
                path: "/checkout",
              },
              {
                id: 5,
                label: "Автомазированное проектирование",
                path: "/wishlist",
              },
              {
                id: 6,
                label: "Раскройные машины",
                path: "/compare",
              },
              {
                id: 7,
                label: "Пресс",
                path: "/compare",
              },
              {
                id: 8,
                label: "Вспомогательные машины",
                path: "/compare",
              },
              {
                id: 9,
                label: "Аксессуары и запасные части",
                path: "/compare",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        menus: [
          {
            id: 0,
            title: "Контакты",
            items: [
              {
                id: 88,
                label: "Контакт",
                path: "/register",
              },
            ],
          },
        ],
      },
    ],
  },
];
