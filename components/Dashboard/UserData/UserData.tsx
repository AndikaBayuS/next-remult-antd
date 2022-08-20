import { Row, Col, Card } from "antd";
import UserChart from "./UserChart/UserChart";
import UserTable from "./UserTable/UserTable";

export const UserData = () => {
  return (
    <Row gutter={16} style={{ marginTop: "16px" }}>
      <Col span={15}>
        <UserTable />
      </Col>
      <Col span={9}>
        <UserChart />
      </Col>
    </Row>
  );
};
