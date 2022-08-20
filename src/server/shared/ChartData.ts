import { Entity, Fields } from "remult";

@Entity("chart_data", {
  allowApiCrud: true,
})
export class ChartData {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  title = "";

  @Fields.integer()
  value? = 0;

  @Fields.string()
  suffix? = "";

  @Fields.string()
  prefix? = "";

  @Fields.object()
  data?: number[] = [];

  @Fields.integer()
  percent? = 0;
}
