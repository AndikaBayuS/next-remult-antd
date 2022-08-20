import { setUsers } from "@/src/redux/usersSlice";
import { remult } from "@/src/server/common";
import { Users } from "@/src/server/shared/Users";
import { Button, Card, Popconfirm, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface DataType {
  id: string;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const userRepo = remult.repo(Users);

async function fetchUsers() {
  return userRepo.find();
}

export const UserTable = () => {
  const users = useSelector((state: any) => state.users.data);
  const dispatch = useDispatch();

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              alert(JSON.stringify(record));
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title={`You sure want to delete ${record.name} ?`}
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchUsers().then((users) => {
      dispatch(setUsers(users));
    });
  }, [dispatch]);

  async function handleDelete(id: string) {
    userRepo.delete(id);
    fetchUsers().then((users) => {
      dispatch(setUsers(users));
    });
  }

  return (
    <Card title="User List" style={{ height: "100%" }}>
      <Table
        dataSource={users}
        columns={columns}
        size="middle"
        pagination={{ pageSize: 5, showSizeChanger: false }}
      />
    </Card>
  );
};

export default UserTable;
