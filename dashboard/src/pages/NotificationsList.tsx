import React, { useEffect, useState } from 'react';
import { Card, List, Button, Badge, Typography, Spin, message } from 'antd';
import { CheckOutlined, BellOutlined, RightOutlined } from '@ant-design/icons';
import { getNotifications, markNotificationRead } from '../services/admin.api';
import type { AdminNotification } from '../services/admin.api';

const { Title, Text } = Typography;

interface NotificationsListProps {
  onSelectListing: (id: string) => void;
}

const NotificationsList: React.FC<NotificationsListProps> = ({ onSelectListing }) => {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);

  const loadNotifications = async () => {
    setLoading(true);
    try {
      const data = await getNotifications();
      setNotifications(data);
    } catch (err) {
      console.error(err);
      message.error("নোটিফিকেশন লোড করতে ব্যর্থ হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const handleMarkAsRead = async (id: string, relatedListingId: string) => {
    try {
      await markNotificationRead(id);
      // Navigate to the shop review
      onSelectListing(relatedListingId);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarkAllRead = async () => {
    try {
      const unread = notifications.filter(n => !n.isRead);
      await Promise.all(unread.map(n => markNotificationRead(n.id)));
      message.success("সব নোটিফিকেশন পড়া হয়েছে বলে চিহ্নিত করা হয়েছে");
      loadNotifications();
    } catch (err) {
      console.error(err);
      message.error("ব্যর্থ হয়েছে");
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <Title level={3} className="!m-0 text-slate-800">এডমিন নোটিফিকেশন লগ</Title>
          <Text className="text-slate-500">দোকান খুঁজি লিস্টিং সংক্রান্ত সকল সিস্টেম নোটিফিকেশন ফিড</Text>
        </div>
        {unreadCount > 0 && (
          <Button 
            type="primary" 
            ghost
            icon={<CheckOutlined />} 
            onClick={handleMarkAllRead}
            className="rounded-xl font-semibold text-xs h-10"
          >
            সব পঠিত চিহ্নিত করুন
          </Button>
        )}
      </div>

      <Card className="rounded-2xl border-slate-100 shadow-sm min-h-[400px]">
        {loading ? (
          <div className="py-24 text-center">
            <Spin size="large" tip="নোটিফিকেশন লোড হচ্ছে..." />
          </div>
        ) : notifications.length === 0 ? (
          <div className="py-24 text-center text-slate-400">
            <BellOutlined className="text-4xl mb-4 text-slate-350" />
            <p>আপনার ড্যাশবোর্ডে কোনো সিস্টেম নোটিফিকেশন নেই।</p>
          </div>
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button 
                    type="link" 
                    icon={<RightOutlined />} 
                    onClick={() => handleMarkAsRead(item.id, item.relatedListingId)}
                  >
                    রিভিউ করুন
                  </Button>
                ]}
                className={`hover:bg-slate-50 px-4 py-3 rounded-2xl transition-all mb-2 border border-slate-100 ${!item.isRead ? 'bg-sky-50/10 border-sky-100/50' : 'bg-white'}`}
              >
                <List.Item.Meta
                  avatar={
                    <Badge dot={!item.isRead} status="processing" className="mt-1">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${!item.isRead ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                        Review
                      </div>
                    </Badge>
                  }
                  title={
                    <span 
                      onClick={() => handleMarkAsRead(item.id, item.relatedListingId)}
                      className={`cursor-pointer hover:text-blue-500 text-sm ${!item.isRead ? 'font-bold text-slate-800' : 'text-slate-500'}`}
                    >
                      {item.message}
                    </span>
                  }
                  description={
                    <span className="text-[11px] text-slate-400 block mt-1">
                      জমা: {new Date(item.createdAt).toLocaleString('bn-BD')}
                    </span>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Card>
    </div>
  );
};

export default NotificationsList;
