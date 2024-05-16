import { IAlertProps } from "../interfaces/alert";
import {
  BellRing,
  MessageSquareWarning,
  CircleX,
  BookCheck,
} from "lucide-react";

export const alertsData: IAlertProps[] = [
  {
    title: "Title 1",
    description: "description 1",
    Icon: BellRing,
    color: "rgb(23, 23, 23)",
  },
  {
    title: "Title 2",
    description: "description 2",
    Icon: MessageSquareWarning,
    color: "rgb(58, 7, 113)",
  },
  {
    title: "Title 3",
    description: "description 3",
    Icon: CircleX,
    color: "rgb(117, 5, 5)",
  },
  {
    title: "Title 4",
    description: "description 4",
    Icon: BookCheck,
    color: "rgb(15, 50, 1)",
  },
];
