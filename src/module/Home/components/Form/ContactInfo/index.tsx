import React, { useState } from 'react';

import { Form, Input, Button, AutoComplete } from 'antd';
import { MaskedInput } from 'antd-mask-input';

import IFormInput from 'common/constants/form_type';
import { location, ILocation } from 'common/constants/location';

const { Option } = AutoComplete;

interface Props {
  nextPage?: () => void;
  previousPage?: () => void;
  data: IFormInput | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInput | undefined>>;
  preview?: boolean;
}

const ContactInfo: React.FC<Props> = ({
  nextPage,
  setData,
  data,
  previousPage,
  preview = false,
}) => {
  const [locationForm, setLocationForm] = useState<ILocation[]>();
  const [autocompleteDisabled, setAutocompleteDisabled] = useState<boolean>(false);

  const onFinish = (values: IFormInput) => {
    setData((oldData) => ({ ...oldData, ...values }));
    if (nextPage) {
      nextPage();
    }
  };
  const changeValue = (value: Record<string, string | number>) => {
    setData((oldData) => ({ ...oldData, ...value }));
  };
  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  const onSearch = (
    type: 'district' | 'amphoe' | 'province' | 'zipcode',
    value: string | number,
  ) => {
    if (data?.sub_district && data?.district && data?.province && data?.post_code) {
      setLocationForm(
        locationForm?.filter((loc) => loc[type].toString().startsWith(value.toString())),
      );
    } else {
      setLocationForm(
        location.filter((loc) => loc[type].toString().startsWith(value.toString())),
      );
    }
  };
  const onSelect = (
    value: string,
    option: Record<string, Array<string>>,
    type: 'district' | 'amphoe' | 'province' | 'zipcode',
  ) => {
    const filterData = {
      sub_district: option.children[2],
      province: option.children[4],
      post_code: option.children[6].toString(),
    };
    if (data?.sub_district && data?.district && data?.province && data?.post_code) {
      setLocationForm(
        locationForm?.filter((loc) => loc[type].toString().startsWith(value.toString())),
      );
    } else {
      setLocationForm(
        location.filter((loc) => loc[type].toString().startsWith(value.toString())),
      );
    }
    setData((oldData) => ({
      ...oldData,
      ...filterData,
    }));
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      autoComplete="off"
      initialValues={data}
      onFinish={onFinish}
      onValuesChange={changeValue}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        label="ที่อยู่ปัจจุบัน (ที่ติดต่อได้)"
        name="current_address"
        rules={[{ required: true, message: 'ระบุ' }]}>
        <Input.TextArea rows={4} placeholder="ที่อยู่ปัจจุบัน" disabled={preview} />
      </Form.Item>
      <Form.Item
        label="แขวง / ตำบล "
        name="district"
        rules={[{ required: true, message: 'ระบุ' }]}>
        <AutoComplete
          disabled={preview}
          onSearch={(txt) => onSearch('district', txt)}
          onSelect={(e, option) => onSelect(e, option, 'district')}
          placeholder="แขวง / ตำบล">
          {locationForm?.map((loc, index) => (
            <Option key={loc.district + index.toString()} value={loc.district}>
              {loc.district} &gt;&gt; {loc.amphoe} &gt;&gt; {loc.province} &gt;&gt;
              {loc.zipcode}
            </Option>
          ))}
        </AutoComplete>
      </Form.Item>
      <Form.Item
        label="อำเภอ "
        name="sub_district"
        rules={[{ required: true, message: 'ระบุ' }]}>
        <AutoComplete
          disabled={preview}
          onSearch={(txt) => onSearch('amphoe', txt)}
          onSelect={(e, option) => onSelect(e, option, 'amphoe')}
          placeholder="อำเภอ">
          {locationForm?.map((loc, index) => (
            <Option key={loc.amphoe + index.toString()} value={loc.amphoe}>
              {loc.district} &gt;&gt; {loc.amphoe} &gt;&gt; {loc.province} &gt;&gt;
              {loc.zipcode}
            </Option>
          ))}
        </AutoComplete>
      </Form.Item>

      <Form.Item
        label="จังหวัด"
        name="province"
        rules={[{ required: true, message: 'ระบุ' }]}>
        <AutoComplete
          disabled={preview}
          onFocus={() => {
            if (!autocompleteDisabled) {
              let i;
              const el = document.getElementsByClassName(
                'ant-select-selection-search-input',
              );
              for (i = 0; i < el.length; i++) {
                el[i].setAttribute('autocomplete', 'off');
              }
              setAutocompleteDisabled(true);
            }
          }}
          onSelect={(e, option) => onSelect(e, option, 'province')}
          onSearch={(txt) => onSearch('province', txt)}
          placeholder="จังหวัด"
          value={data?.province}>
          {locationForm?.map((loc, index) => (
            <Option key={loc.province + index.toString()} value={loc.province}>
              {loc.district} &gt;&gt; {loc.amphoe} &gt;&gt; {loc.province} &gt;&gt;
              {loc.zipcode}
            </Option>
          ))}
        </AutoComplete>
      </Form.Item>

      <Form.Item
        label="รหัสไปรษณีย์"
        name="post_code"
        rules={[
          { len: 5, message: 'รหัสไปรษณีย์ต้องมี 5 อักษร' },
          { required: true, message: 'ระบุ' },
        ]}>
        <AutoComplete
          disabled={preview}
          onFocus={() => {
            if (!autocompleteDisabled) {
              let i;
              const el = document.getElementsByClassName(
                'ant-select-selection-search-input',
              );
              for (i = 0; i < el.length; i++) {
                el[i].setAttribute('autocomplete', 'new-password');
              }
              setAutocompleteDisabled(true);
            }
          }}
          onSelect={(e, option) => onSelect(e, option, 'zipcode')}
          onSearch={(txt) => onSearch('zipcode', txt)}
          placeholder="รหัสไปรษณีย์">
          {locationForm?.map((loc, index) => (
            <Option key={loc.zipcode + index} value={loc.zipcode.toString()}>
              {loc.district} &gt;&gt; {loc.amphoe} &gt;&gt; {loc.province} &gt;&gt;
              {loc.zipcode}
            </Option>
          ))}
        </AutoComplete>
      </Form.Item>

      <Form.Item
        label="เบอร์โทรศัพท์"
        name="phone_number"
        rules={[{ required: true, message: 'ระบุ' }]}>
        <MaskedInput
          disabled={preview}
          mask="111-111-1111"
          name="phone_number"
          placeholder="เบอร์โทรศัพท์"
        />
      </Form.Item>

      {!preview && (
        <Form.Item>
          <div className="space-x-4 hidden justify-center md:flex">
            <Button onClick={previousPage} style={{ width: '156px' }}>
              ย้อนกลับ
            </Button>
            <Button type="primary" htmlType="submit" style={{ width: '156px' }}>
              ถัดไป
            </Button>
          </div>
          <div className="flex space-x-4 md:hidden">
            <Button onClick={previousPage}>ย้อนกลับ</Button>
            <Button type="primary" htmlType="submit" block>
              ถัดไป
            </Button>
          </div>
        </Form.Item>
      )}
    </Form>
  );
};

export default ContactInfo;
