import React, { useEffect, useState } from 'react';
import { Table, Tabs, Tag, Button, Card, Typography, Spin, Image } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { getShops } from '../services/admin.api';
import type { AdminListing } from '../services/admin.api';

const { Title, Text } = Typography;

interface ListingsManagementProps {
  onSelectListing: (id: string) => void;
}

const ListingsManagement: React.FC<ListingsManagementProps> = ({ onSelectListing }) => {
  const [loading, setLoading] = useState(true);
  const [shops, setShops] = useState<AdminListing[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');

  const fetchListings = async (status: string) => {
    setLoading(true);
    try {
      const data = await getShops(status);
      setShops(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings(activeTab);
  }, [activeTab]);

  const columns = [
    {
      title: 'ছবি',
      dataIndex: 'images',
      key: 'images',
      width: 90,
      render: (images: string[]) => (
        <Image
          src={images[0] || 'https://placehold.co/100x100?text=No+Photo'}
          alt="Shop Cover"
          width={64}
          height={64}
          className="object-cover rounded-xl border border-slate-100"
          fallback="https://placehold.co/100x100?text=No+Photo"
          preview={false}
        />
      )
    },
    {
      title: 'বিজ্ঞাপনের শিরোনাম',
      dataIndex: 'title',
      key: 'title',
      render: (title: string, record: AdminListing) => (
        <div className="max-w-[280px]">
          <div className="font-semibold text-slate-800 line-clamp-2">{title}</div>
          <div className="text-xs text-slate-400 mt-0.5">ID: {record.id}</div>
        </div>
      )
    },
    {
      title: 'মালিকের তথ্য',
      key: 'owner',
      render: (_: any, record: AdminListing) => (
        <div>
          <div className="font-medium text-slate-700">{record.ownerName}</div>
          <div className="text-xs text-slate-400">{record.ownerEmail}</div>
        </div>
      )
    },
    {
      title: 'লোকেশন',
      key: 'location',
      render: (_: any, record: AdminListing) => (
        <div>
          <div className="text-sm font-medium text-slate-700">{record.area}</div>
          <div className="text-xs text-slate-400">{record.city}</div>
        </div>
      )
    },
    {
      title: 'মূল্য (টাকা)',
      key: 'price',
      render: (_: any, record: AdminListing) => (
        <div>
          <div className="font-bold text-slate-800">
            {record.price.toLocaleString('bn-BD')} ৳
          </div>
          <span className="text-[10px] bg-slate-100 text-slate-500 font-bold px-1.5 py-0.5 rounded-md uppercase">
            {record.priceUnit}
          </span>
        </div>
      )
    },
    {
      title: 'জমার তারিখ',
      dataIndex: 'submittedAt',
      key: 'submittedAt',
      render: (date: string) => {
        return <span className="text-sm text-slate-500">{new Date(date).toLocaleDateString('bn-BD')}</span>;
      }
    },
    {
      title: 'স্ট্যাটাস',
      dataIndex: 'status',
      key: 'status',
      width: 110,
      render: (status: string) => {
        let color = 'gold';
        let label = 'পেন্ডিং';
        if (status === 'approved') {
          color = 'success';
          label = 'অনুমোদিত';
        } else if (status === 'rejected') {
          color = 'error';
          label = 'বাতিলকৃত';
        }
        return <Tag color={color} className="font-semibold px-2 py-0.5 rounded-md border-0">{label}</Tag>;
      }
    },
    {
      title: 'অ্যাকশন',
      key: 'action',
      width: 100,
      render: (_: any, record: AdminListing) => (
        <Button 
          type="primary" 
          ghost 
          icon={<EyeOutlined />}
          onClick={() => onSelectListing(record.id)}
          className="rounded-lg text-xs"
        >
          রিভিউ
        </Button>
      )
    }
  ];

  const tabItems = [
    { key: 'all', label: 'সব লিস্টিং' },
    { key: 'pending', label: 'পেন্ডিং' },
    { key: 'approved', label: 'অনুমোদিত' },
    { key: 'rejected', label: 'বাতিলকৃত' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <Title level={3} className="!m-0 text-slate-800">দোকান লিস্টিং ম্যানেজমেন্ট</Title>
          <Text className="text-slate-500">মালিকদের সাবমিট করা দোকান বিজ্ঞাপনগুলোর তালিকা ও অনুমোদন নিয়ন্ত্রণ</Text>
        </div>
      </div>

      <Card className="rounded-2xl border-slate-100 shadow-sm">
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab} 
          items={tabItems}
          className="mb-4"
        />

        {loading ? (
          <div className="py-24 text-center">
            <Spin size="large" tip="লিস্টিং লোড হচ্ছে..." />
          </div>
        ) : (
          <Table 
            dataSource={shops} 
            columns={columns} 
            rowKey="id"
            pagination={{
              pageSize: 5,
              showSizeChanger: false,
              hideOnSinglePage: true,
              itemRender: (_, type, originalElement) => {
                if (type === 'prev') return <Button size="small">পূর্ববর্তী</Button>;
                if (type === 'next') return <Button size="small">পরবর্তী</Button>;
                return originalElement;
              }
            }}
            className="custom-table"
          />
        )}
      </Card>
    </div>
  );
};

export default ListingsManagement;
