import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookDetails } from "./index";
import { baseImg } from "@/shared/const/assets";

export default {
  title: "entities/Book/BookDetails",
  component: BookDetails,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BookDetails>;

const Template: ComponentStory<typeof BookDetails> = (args) => <BookDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    id: "1",
    title: "Тихий Дон",
    authors: ["Михаил Шолохов", "Автор 2"],
    categories: ["Роман", "Роман-эпопея"],
    image: baseImg,
    description: "lorem ipsum samet abet"
  }
};
