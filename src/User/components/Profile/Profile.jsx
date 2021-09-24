import { Button, Col, Drawer, Input, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.scss";

const DescriptionItem = ({ title, content }) => (
  <div className='profile-wrapper'>
    <p className='profile-label'>{title}:</p>
    {content}
  </div>
);

function Profile({ visible, setVisible }) {
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.auth);

  return (
    <div className='profile'>
      <Drawer
        width={640}
        placement='right'
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}>
        <p
          className='site-description-item-profile-p'
          style={{ marginBottom: 24 }}>
          {`${profile.isAdmin ? "Admin" : "User"} `} Profile
        </p>

        <p className='site-description-item-profile-p profile-position'>{`${
          profile.isAdmin ? "Admin" : "Personal"
        } `}</p>

        <Row className='profile-row' gutter={[24, 32]}>
          <Col span={12}>
            <DescriptionItem
              title='Full Name'
              content={<Input defaultValue={profile.fullname} />}
            />
          </Col>

          <Col span={12}>
            <DescriptionItem
              title='Account'
              content={<Input defaultValue={profile.email} />}
            />
          </Col>
        </Row>

        <Row className='profile-row' gutter={[24, 32]}>
          <Col span={12}>
            <DescriptionItem
              title='Phone Number'
              content={<Input defaultValue={profile.phone} />}
            />
          </Col>
        </Row>

        <Row className='profile-row' gutter={[24, 32]}>
          <Col span={12}>
            <DescriptionItem
              title='Address'
              content={<Input defaultValue={profile.address} />}
            />
          </Col>
        </Row>

        <Row className='profile-row' gutter={[24, 32]}>
          <Button>Update</Button>
        </Row>
      </Drawer>
    </div>
  );
}

export default Profile;
