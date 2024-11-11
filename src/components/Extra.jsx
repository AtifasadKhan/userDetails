import {Modal} from "antd";

const ExtraDetails = ({isModalOpen, handleOk, handleCancel, extraDetails}) => {
    return (
        <Modal title="More Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p><b>Street </b> {extraDetails.street}</p>
            <p><b>Suite </b> {extraDetails.suite}</p>
            <p><b>City </b> {extraDetails.city}</p>
            <p><b>Zipcode </b> {extraDetails.zipcode}</p>
        </Modal>
    )
}

export default ExtraDetails