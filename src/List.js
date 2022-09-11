import { useState } from "react";

import { Space, Table, Tag, Modal, Input, Tabs, Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const List = () => {
  const [isediting, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const [data, setData] = useState([
    {
      id: 1,

      name: "Terry Smith",
      email: "smith@mail.com",
      roles: ["Manager", "Admin", "Auditor"],
    },
    {
      id: 2,

      name: "Sheldon Cole",
      email: "sheldon@mail.com",
      roles: ["Manager", "Auditor"],
    },
    {
      id: 3,

      name: "Jon Doe",
      email: "job@mail.com",
      roles: ["Admin", "Auditor"],
    },
    {
      id: 4,

      name: "M Clarke",
      email: "clarke@mail.com",
      roles: ["Auditor"],
    },
    {
      id: 5,

      name: "Harry",
      email: "harry@mail.com",
      roles: ["Manager", "Admin", "Auditor"],
    },
    {
      id: 6,

      name: "Elanora",
      email: "elanora@mail.com",
      roles: ["Admin", "Auditor"],
    },
    {
      id: 7,

      name: "Assanta Heller",
      email: "heller@mail.com",
      roles: ["Manager", "Admin", "Auditor"],
    },
    {
      id: 8,

      name: "Harry Brook",
      email: "brook@mail.com",
      roles: ["Auditor"],
    },
    {
      id: 9,

      name: "Trace",
      email: "trace@mail.com",
      roles: ["Manager", "Admin", "Auditor"],
    },
    {
      id: 10,

      name: "Noah",
      email: "noah@mail.com",
      roles: ["Admin", "Auditor"],
    },
    {
      id: 11,

      name: "Jane",
      email: "jane@mail.com",
      roles: ["Manager", "Admin", "Auditor"],
    },
    {
      id: 12,

      name: "Tbag",
      email: "tbag@mail.com",
      roles: ["Auditor"],
    },
    {
      id: 13,

      name: "Oliver",
      email: "oliver@mail.com",
      roles: ["Manager", "Admin", "Auditor"],
    },
    {
      id: 14,

      name: "Michel",
      email: "michel@mail.com",
      roles: ["Manager"],
    },
  ]);

  const columns = [
    {
      key: 1,
      title: "",
      render: () => <Avatar gap={2} size={32} icon={<UserOutlined />}></Avatar>,
    },
    {
      key: 2,
      title: "Name",
      dataIndex: "name",
      
    },
    {
      key: 3,
      title: "Email",
      dataIndex: "email",
      
    },

    {
      key: 4,
      title: "Roles",
      
      dataIndex: "roles",
      render: (_, { roles }) => (
        <>
          {Array.isArray(roles)
            ? roles.map((item, index) => {
                let color = item === "Manager" ? "red" : "yellow";

                return (
                  <Tag color={color} key={index}>
                    {item}
                  </Tag>
                );
              })
            : roles.split(",").map((item, index) => {
              
                let color = item === "Manager" ? "red" : "yellow";

                return (
                  <Tag color={color} key={index}>
                    {item}
                  </Tag>
                );
              })}
        </>
      ),
    },
    {
      key: 5,
      title: "Action",
      
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => editRecord(record)}>Edit</a>
          <a onClick={() => deleteRecord(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  const deleteRecord = (record) => {
    Modal.confirm({
      title: "Are You Sure To Delete This Record ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setData((prev) => {
          return prev.filter((item) => item.id !== record.id);
        });
      },
    });
  };

  const editRecord = (record) => {
    setIsEditing(true);
    setEditItem({ ...record });
  };
  const reset = () => {
    setIsEditing(false);
    setEditItem(null);
  };

  return (
    <div>
      <Table key={data.id} dataSource={data} columns={columns}>
        
      </Table>

      <Modal
        title="Edit Record"
        open={isediting}
        okText="Save"
        onCancel={() => {
          reset();
        }}
        onOk={() => {
          setData((prev) => {
            return prev.map((item) => {
              if (item.id === editItem.id) {
                return editItem;
              } else {
                return item;
              }
            });
          });
          reset();
        }}
      >
        <Tabs defaultActiveKey="tab1">
          <Tabs.TabPane tab="Edit User" key='1'>
            <Input
              value={editItem?.name}
              onChange={(e) => {
                setEditItem((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
            ></Input>

            <Input
              value={editItem?.email}
              onChange={(e) => {
                setEditItem((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            ></Input>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Edit Role" key="2">
            <Input
              value={editItem?.roles}
              onChange={(e) => {
                setEditItem((prev) => {
                  return { ...prev, roles: e.target.value };
                });
              }}
            ></Input>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default List;
