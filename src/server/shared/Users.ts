import { Entity, Fields } from "remult";

@Entity("users", {
  allowApiCrud: true,
})
export class Users {
  @Fields.uuid()
  id!: string;

  @Fields.string()
  key!: string;

  @Fields.string()
  name = "";

  @Fields.integer()
  age = 0;

  @Fields.string()
  address = "";

  @Fields.object()
  tags: string[] = [];
}
