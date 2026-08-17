import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Statistic, List, Badge, Button, Typography, Spin } from 'antd';
import { 
  ShopOutlined, 
  HourglassOutlined, 
  CheckCircleOutlined, 
  CloseCircleOutlined,
  RightOutlined
} from '@ant-design/icons';
import { getShops, getNotifications } from '../services/admin.api';
import type { AdminListing, AdminNotification } from '../services/admin.api';

const { Title, Text } = Typography;

interface DashboardOverviewProps {
  onSelectKey: (key: string) => void;
  onSelectListing: (id: string) => void;
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ onSelectKey, onSelectListing }) => {
  const [loading, setLoading] = useState(true);
  const [shops, setShops] = useState<AdminListing[]>([]);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [shopsData, notifsData] = await Promise.all([
          getShops(),
          getNotifications()
        ]);
        setShops(shopsData);
        setNotifications(notifsData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Spin size="large" tip="Loading statistics..." />
      </div>
    );
  }

  const total = shops.length;
  const pending = shops.filter(s => s.status === 'pending').length;
  const approved = shops.filter(s => s.status === 'approved').length;
  const rejected = shops.filter(s => s.status === 'rejected').length;

  const pendingNotifs = notifications.filter(n => !n.isRead);

  return (
    <div className="space-y-6">
      <div>
        <Title level={3} className="!m-0 text-slate-800">এডমিন ওভারভিউ (Dashboard)</Title>
        <Text className="text-slate-500">দোকান খুঁজি পোর্টালের লিস্টিং ও সাম্প্রতিক নোটিফিকেশন তথ্য</Text>
      </div>

      {/* Stats Cards */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card 
            hoverable 
            onClick={() => onSelectKey('listings')}
            className="rounded-2xl border-slate-100 shadow-sm transition-all hover:shadow-md"
          >
            <Statistic
              title="সর্বমোট লিস্টিং"
              value={total}
              prefix={<ShopOutlined className="text-blue-500 mr-2 bg-blue-50 p-2.5 rounded-xl" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card 
            hoverable 
            onClick={() => onSelectKey('listings')}
            className="rounded-2xl border-slate-100 shadow-sm transition-all hover:shadow-md"
          >
            <Statistic
              title="যাচাইকরণের পেন্ডিং"
              value={pending}
              valueStyle={{ color: '#cf9f02' }}
              prefix={<HourglassOutglassIcon />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card 
            hoverable 
            onClick={() => onSelectKey('listings')}
            className="rounded-2xl border-slate-100 shadow-sm transition-all hover:shadow-md"
          >
            <Statistic
              title="অনুমোদিত লিস্টিং"
              value={approved}
              valueStyle={{ color: '#3f8600' }}
              prefix={<CheckCircleOutlined className="text-emerald-500 mr-2 bg-emerald-50 p-2.5 rounded-xl" />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card 
            hoverable 
            onClick={() => onSelectKey('listings')}
            className="rounded-2xl border-slate-100 shadow-sm transition-all hover:shadow-md"
          >
            <Statistic
              title="বাতিলকৃত লিস্টিং"
              value={rejected}
              valueStyle={{ color: '#cf1322' }}
              prefix={<CloseCircleOutlined className="text-red-500 mr-2 bg-red-50 p-2.5 rounded-xl" />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        {/* Pending Notifications List */}
        <Col xs={24} lg={16}>
          <Card 
            title={
              <div className="flex justify-between items-center py-1">
                <span className="font-bold text-slate-800">যাচাইকরণের নোটিফিকেশন ফিড</span>
                <Badge count={pendingNotifs.length} className="site-badge-count-4" />
              </div>
            }
            className="rounded-2xl border-slate-100 shadow-sm min-h-[300px]"
          >
            {notifications.length === 0 ? (
              <div className="py-12 text-center text-slate-400">
                কোনো পেন্ডিং নোটিফিকেশন নেই।
              </div>
            ) : (
              <List
                itemLayout="horizontal"
                dataSource={notifications.slice(0, 5)}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button 
                        type="link" 
                        icon={<RightOutlined />} 
                        onClick={() => onSelectListing(item.relatedListingId)}
                      >
                        রিভিউ করুন
                      </Button>
                    ]}
                    className="hover:bg-slate-50/50 px-2 rounded-xl transition-all"
                  >
                    <List.Item.Meta
                      avatar={
                        <Badge dot={!item.isRead} status="processing">
                          <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center font-bold">
                            Review
                          </div>
                        </Badge>
                      }
                      title={<span className={item.isRead ? 'text-slate-500' : 'font-semibold text-slate-800'}>{item.message}</span>}
                      description={<span className="text-xs text-slate-400">{new Date(item.createdAt).toLocaleString('bn-BD')}</span>}
                    />
                  </List.Item>
                )}
              />
            )}
            {notifications.length > 5 && (
              <div className="text-center pt-4 border-t border-slate-100">
                <Button type="text" onClick={() => onSelectKey('notifications')} className="text-blue-500 font-medium">
                  সব নোটিফিকেশন দেখুন
                </Button>
              </div>
            )}
          </Card>
        </Col>

        {/* Quick Help Card */}
        <Col xs={24} lg={8}>
          <Card 
            title={<span className="font-bold text-slate-800">এডমিন নির্দেশিকা</span>}
            className="rounded-2xl border-slate-100 shadow-sm"
          >
            <div className="space-y-4 text-sm text-slate-600">
              <p>
                দোকান খুঁজি এডমিন প্যানেলে আপনাকে স্বাগতম। আপনি এখান থেকে মালিকদের জমা দেওয়া বাণিজ্যিক স্পেস (দোকান/শোরুম/অফিস) লিস্টিং যাচাই করে অনুমোদন দিতে পারেন।
              </p>
              <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 text-xs space-y-2">
                <div className="font-semibold text-blue-800">রিভিউ প্রসেস:</div>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>পেন্ডিং লিস্টিং এর ডিটেইল ছবি ও বর্ণনা চেক করুন।</li>
                  <li>মালিকের তথ্য ও লোকেশন সঠিক মনে হলে **অনুমোদন** দিন।</li>
                  <li>কোনো ছবি অস্পষ্ট হলে উপযুক্ত কারণ উল্লেখ করে **বাতিল** করুন।</li>
                </ul>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

// Helper Component for Pending icon styling
const HourglassOutglassIcon = () => (
  <HourglassOutlined className="text-amber-500 mr-2 bg-amber-50 p-2.5 rounded-xl" />
);

export default DashboardOverview;
