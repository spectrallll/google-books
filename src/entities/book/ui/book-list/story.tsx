import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookList } from "./index";
import { baseImg } from "@/shared/const/assets";

export default {
  title: "entities/Book/BookList",
  component: BookList,
  argTypes: { backgroundColor: { control: "color" }, }, } as ComponentMeta<typeof BookList>;
const Template: ComponentStory<typeof BookList> = (args) => <BookList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    { id: "1", title: "Тихий Дон", authors: ["Михаил Шолохов"], categories: ["Роман"], image: baseImg},
    { id: "2", title: "Тихий Дон", authors: ["Михаил Шолохов"], categories: ["Роман"], image: baseImg} ,
    { id: "3", title: "Тихий Дон", authors: ["Михаил Шолохов"], categories: ["Роман"], image: baseImg},
    { id: "4", title: "Тихий Дон", authors: ["Михаил Шолохов"], categories: ["Роман"], image: baseImg}
  ]
};
export const Loading = Template.bind({});
Loading.args = { isLoading: true, data: [] }
export const LoadingWithData = Template.bind({});
LoadingWithData.args = {
  isLoading: true,
  data: [
    { id: "1", title: "Тихий Дон", authors: ["Михаил Шолохов"], categories: ["Роман"], image: baseImg},
    { id: "2", title: "Тихий Дон", authors: ["Михаил Шолохов"], categories: ["Роман"], image: baseImg} ,
    { id: "3", title: "Тихий Дон", authors: ["Михаил Шолохов"], categories: ["Роман"], image: baseImg},
    { id: "4", title: "Тихий Дон", authors: ["Михаил Шолохов"], categories: ["Роман"],  image: baseImg}
  ]
}