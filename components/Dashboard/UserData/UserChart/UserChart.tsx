import { Users } from "@/src/server/shared/Users";
import { Column } from "@ant-design/plots";
import { Card } from "antd";
import { useSelector } from "react-redux";

export const UserChart = () => {
  const users = useSelector((state: any) => state.users.data);

  function filterAge(minAge: number, maxAge: number) {
    return users.filter(
      (user: Users) => user.age <= maxAge && user.age >= minAge
    ).length;
  }

  const data = [
    {
      type: "Age 17 - 20",
      value: filterAge(17, 20),
    },
    {
      type: "Age 21 - 30",
      value: filterAge(21, 30),
    },
    {
      type: "Age 31 - 40",
      value: filterAge(31, 40),
    },
    {
      type: "Age 41 - 50",
      value: filterAge(41, 50),
    },
    {
      type: "Age 51 - 60",
      value: filterAge(51, 60),
    },
    {
      type: "Age 61 - 70",
      value: filterAge(61, 70),
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "value",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    meta: {
      type: { alias: "Age" },
      value: { alias: "Total" },
    },
  } as const;

  return (
    <Card title="User Summary By Age">
      <Column {...config} />
    </Card>
  );
};

export default UserChart;
