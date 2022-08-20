import { Progress, TinyArea, TinyColumn, TinyLine } from "@ant-design/plots";
import { Row, Card, Statistic, Col } from "antd";
import { AreaData } from "@/mock/data";

export const Summary = () => {
  const areaConfig = {
    height: 10,
    autoFit: true,
    data: AreaData,
    smooth: true,
    areaStyle: {
      fill: "#d6e3fd",
    },
  };

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card hoverable style={{ color: "black !important" }}>
          <Statistic
            title="SALES"
            value={87}
            suffix="%"
            valueStyle={{ fontWeight: "600" }}
          />
          <Progress
            percent={0.87}
            autoFit={true}
            height={10}
            color={["#5B8FF9", "#E8EDF3"]}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable>
          <Statistic
            title="REVENUE"
            value={68000}
            prefix="$"
            valueStyle={{ fontWeight: "600" }}
          />
          <TinyArea {...areaConfig} />
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable style={{ height: "100%" }}>
          <Statistic
            title="NEW CLIENTS"
            value={1545}
            valueStyle={{ fontWeight: "600" }}
          />
          <TinyColumn {...areaConfig} />
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable style={{ height: "100%" }}>
          <Statistic
            title="ACTIVE USER"
            value={8650}
            valueStyle={{ fontWeight: "600" }}
          />
          <TinyLine {...areaConfig} />
        </Card>
      </Col>
    </Row>
  );
};

export default Summary;
