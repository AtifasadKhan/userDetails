import {Button, Card, Table} from "antd";
import {useContext, useState} from 'react';
import {Datacontext} from "../contexts/datacontext.js";

import ExtraDetails from "./Extra.jsx";
import ThemeContext from "../contexts/themecontext.js";

const UserTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const [extraDetails, setExtraDetails] = useState([]);


    const value = useContext(Datacontext);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Company Name',
            dataIndex: 'company',
            key: 'company',
            render: item => item.name,
        },
        {
            title: 'Action',
            dataIndex: 'address',
            key: 'address',
            render: (item) =>
                    <Button type="primary"
                            onClick={() => {
                                setExtraDetails(item)
                                showModal();
                            }
                            }>
                   View
                    </Button>


        },

    ]




    const { themeClass, setThemeClass } = useContext(ThemeContext);
    const isDarkMode = themeClass === "dark";
    const onHandleClick = () => {
        setThemeClass(isDarkMode ? "light" : "dark");
    };



    return (
        <>
            <div className="flex flex-col items-center">

                <Button className="p-4 bg-slate-300 rounded-lg mt-6 text-slate-900" onClick={() => onHandleClick()}>
                    Change to {isDarkMode ? "light" : "dark"} mode
                </Button>
            </div>
            <Card title="User Management Dashboard" bordered={false}>

                <Table columns={columns} dataSource={value}/>
                <ExtraDetails isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}
                              extraDetails={extraDetails}/>
            </Card>
        </>
    )
}


export default UserTable;