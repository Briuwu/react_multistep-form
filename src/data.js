export const trackerTitles = [
  {
    step: 1,
    title: "your info",
  },
  {
    step: 2,
    title: "select plan",
  },
  {
    step: 3,
    title: "add-ons",
  },
  {
    step: 4,
    title: "summary",
  },
];

export const pricing = {
  addons: [
    {
      id: 1,
      name: "Online service",
      desc: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      id: 2,
      name: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      id: 3,
      name: "Customizable profile",
      desc: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ],
  plans: [
    {
      id: 1,
      name: "Arcade",
      icon: "./assets/images/icon-arcade.svg",
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      id: 2,
      name: "Advanced",
      icon: "./assets/images/icon-advanced.svg",
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      id: 3,
      name: "Prop",
      icon: "./assets/images/icon-pro.svg",
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  ],
};
