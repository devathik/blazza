import React, { useEffect, useState } from 'react';
import { Card, Button, Tag, Space, Row, Col, Typography, Spin, Image, Descriptions, Modal, Input, message, Alert } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined, PhoneOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { getShopDetails, approveShop, rejectShop } from '../services/admin.api';
import type { AdminListing } from '../services/admin.api';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

interface ListingDetailProps {
  id: string;
  onBack: () => void;
}

const ListingDetail: React.FC<ListingDetailProps> = ({ id, onBack }) => {
  const [loading, setLoading] = useState(true);
  const [shop, setShop] = useState<AdminListing | null>(null);
  const [rejectModalVisible, setRejectModalVisible] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const loadShop = async () => {
    setLoading(true);
    try {
      const data = await getShopDetails(id);
      setShop(data);
    } catch (err) {
      console.error(err);
      message.error("লিস্টিং বিস্তারিত লোড করতে সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadShop();
  }, [id]);

  const handleApprove = async () => {
    setActionLoading(true);
    try {
      const success = await approveShop(id);
      if (success) {
        message.success("লিস্টিংটি সফলভাবে অনুমোদন দেওয়া হয়েছে!");
        loadShop();
      } else {
        message.error("অনুমোদন করতে ব্যর্থ হয়েছে");
      }
    } catch (err) {
      console.error(err);
      message.error("সার্ভার ত্রুটি");
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    if (!rejectReason.trim()) {
      message.warning("অনুগ্রহ করে বাতিলের কারণটি লিখুন");
      return;
    }
    setActionLoading(true);
    try {
      const success = await rejectShop(id, rejectReason.trim());
      if (success) {
        message.success("লিস্টিংটি বাতিল করা হয়েছে এবং মালিককে কারণটি পাঠানো হয়েছে!");
        setRejectModalVisible(false);
        setRejectReason('');
        loadShop();
      } else {
        message.error("লিস্টিং বাতিল করতে ব্যর্থ হয়েছে");
      }
    } catch (err) {
      console.error(err);
      message.error("সার্ভার ত্রুটি");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Spin size="large" tip="লিস্টিং বিস্তারিত লোড হচ্ছে..." />
      </div>
    );
  }

  if (!shop) {
    return (
      <div className="py-12 text-center">
        <ArrowLeftOutlined className="text-2xl cursor-pointer" onClick={onBack} />
        <p className="text-slate-400 mt-4">লিস্টিংটি পাওয়া যায়নি।</p>
      </div>
    );
  }

  const getStatusTag = (status: string) => {
    let color = 'gold';
    let label = 'পেন্ডিং লিস্টিং';
    if (status === 'approved') {
      color = 'success';
      label = 'অনুমোদিত লিস্টিং';
    } else if (status === 'rejected') {
      color = 'error';
      label = 'বাতিলকৃত লিস্টিং';
    }
    return <Tag color={color} className="font-bold px-3 py-1 text-sm rounded-full border-0">{label}</Tag>;
  };

  return (
    <div className="space-y-6">
      {/* Top action bar */}
      <div className="flex items-center gap-4">
        <Button 
          type="text" 
          icon={<ArrowLeftOutlined />} 
          onClick={onBack}
          className="hover:bg-slate-100 rounded-xl"
        >
          তালিকায় ফিরে যান
        </Button>
        <span className="text-slate-300">|</span>
        <span className="text-xs text-slate-400">লিস্টিং আইডি: {shop.id}</span>
      </div>

      {/* Main Info Card */}
      <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
        <Row gutter={[24, 24]}>
          {/* Details & Specs */}
          <Col xs={24} lg={14} className="space-y-6">
            <div className="space-y-2">
              {getStatusTag(shop.status)}
              <Title level={3} className="!m-0 text-slate-800 leading-snug">{shop.title}</Title>
              <Text className="text-slate-400 block text-xs">
                জমা দেওয়া হয়েছে: {new Date(shop.submittedAt).toLocaleString('bn-BD')}
              </Text>
            </div>

            {shop.status === 'rejected' && shop.rejectionReason && (
              <Alert
                message={<span className="font-bold text-red-800">বাতিলের কারণ (Rejection Reason)</span>}
                description={<span className="text-red-700">{shop.rejectionReason}</span>}
                type="error"
                showIcon
                icon={<InfoCircleOutlined />}
                className="rounded-2xl border-red-100"
              />
            )}

            {/* Specifications Descriptions */}
            <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100/50">
              <Title level={5} className="!mb-4 text-slate-700">গুরুত্বপূর্ণ স্পেসিফিকেশন</Title>
              <Descriptions column={{ xs: 1, sm: 2 }} size="small" className="custom-descriptions">
                <Descriptions.Item label="বিজ্ঞাপনের ধরণ">
                  <Tag className="font-semibold px-2 py-0.5 rounded border-0 bg-blue-50 text-blue-600">
                    {shop.listingType === 'rent' ? 'ভাড়া (Rent)' : shop.listingType === 'lease' ? 'লিজ (Lease)' : 'বিক্রি (Sale)'}
                  </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="মূল্য (টাকা)">
                  <span className="font-bold text-slate-800">{shop.price.toLocaleString('bn-BD')} ৳ ({shop.priceUnit})</span>
                </Descriptions.Item>
                <Descriptions.Item label="অগ্রিম/জামানত">
                  <span className="text-slate-700">{shop.advanceDeposit > 0 ? `${shop.advanceDeposit.toLocaleString('bn-BD')} ৳` : 'প্রযোজ্য নয় / ০ ৳'}</span>
                </Descriptions.Item>
                <Descriptions.Item label="দোকানের অবস্থা">
                  <span className="text-slate-700">
                    {shop.condition === 'New' ? 'নতুন (New)' : shop.condition === 'Used / Renovated' ? 'ব্যবহৃত / সংস্কারকৃত' : 'নির্মাণাধীন'}
                  </span>
                </Descriptions.Item>
                <Descriptions.Item label="সাইজ (বর্গফুট)">
                  <span className="text-slate-700 font-semibold">{shop.sizeSqft ? `${shop.sizeSqft} Sqft` : 'উল্লেখ নেই (ঐচ্ছিক)'}</span>
                </Descriptions.Item>
                <Descriptions.Item label="সম্মুখ প্রস্থ (ফুট)">
                  <span className="text-slate-700 font-semibold">{shop.frontWidthFt ? `${shop.frontWidthFt} Ft` : 'উল্লেখ নেই (ঐচ্ছিক)'}</span>
                </Descriptions.Item>
                <Descriptions.Item label="ফ্লোর নম্বর">
                  <span className="text-slate-700">{shop.floorLevel}</span>
                </Descriptions.Item>
                <Descriptions.Item label="ওয়াশরুম">
                  <span className="text-slate-700">{shop.washrooms === '0' ? 'নেই' : `${shop.washrooms}`}</span>
                </Descriptions.Item>
                <Descriptions.Item label="বিদ্যুৎ লোড (kW)">
                  <span className="text-slate-700 font-semibold">{shop.electricityLoadKw ? `${shop.electricityLoadKw} কিলোওয়াট` : 'উল্লেখ নেই (ঐচ্ছিক)'}</span>
                </Descriptions.Item>
                <Descriptions.Item label="ঠিকানা">
                  <span className="text-slate-700 font-medium">{shop.detailedLocation}, {shop.area}, {shop.city}</span>
                </Descriptions.Item>
              </Descriptions>
            </div>

            {/* Description Paragraph */}
            <div className="space-y-2">
              <Title level={5} className="text-slate-700">বিস্তারিত বিবরণ</Title>
              <Paragraph className="text-slate-650 leading-relaxed text-sm whitespace-pre-wrap">
                {shop.description}
              </Paragraph>
            </div>

            {/* Business Suitable For Tags */}
            <div className="space-y-2">
              <Title level={5} className="text-slate-700">যে ব্যবসার জন্য উপযুক্ত</Title>
              <Space wrap size={[8, 8]}>
                {shop.suitableFor.length === 0 ? (
                  <span className="text-xs text-slate-400 font-medium">যেকোনো ব্যবসা (ঐচ্ছিক)</span>
                ) : (
                  shop.suitableFor.map(biz => (
                    <Tag key={biz} className="font-medium bg-slate-100 text-slate-600 border-0 px-3 py-1 rounded-full text-xs">
                      {biz === 'Retail' ? 'খুচরা ব্যবসা' : biz === 'Restaurant' ? 'রেস্টুরেন্ট / ক্যাফে' : biz === 'Office' ? 'অফিস' : biz === 'Warehouse' ? 'গুদাম' : biz === 'Pharmacy' ? 'ফার্মেসি' : biz === 'Salon' ? 'সেলুন' : biz}
                    </Tag>
                  ))
                )}
              </Space>
            </div>

            {/* Facilities Checklist */}
            <div className="space-y-2">
              <Title level={5} className="text-slate-700">সুবিধাসমূহ</Title>
              <Space wrap size={[8, 8]}>
                {shop.facilities.length === 0 ? (
                  <span className="text-slate-400 text-xs">কোনো সুবিধা সিলেক্ট করা হয়নি</span>
                ) : (
                  shop.facilities.map(fac => (
                    <Tag key={fac} className="bg-sky-50 text-sky-600 border-0 px-3 py-1 rounded-full text-xs font-semibold">
                      ✓ {fac === 'Security' ? 'নিরাপত্তা প্রহরী' : fac === 'CCTV' ? 'সিসিটিভি' : fac === 'Generator Backup' ? 'জেনারেটর ব্যাকআপ' : fac === 'Lift/Elevator' ? 'লিফট' : fac === 'Parking' ? 'পার্কিং' : fac === 'Water Supply' ? 'পানি সরবরাহ' : fac === 'Air Conditioning' ? 'এসি' : fac}
                    </Tag>
                  ))
                )}
              </Space>
            </div>
          </Col>

          {/* Photo Gallery & Owner Profile */}
          <Col xs={24} lg={10} className="space-y-6 border-l border-slate-100 lg:pl-6">
            <div className="space-y-2">
              <Title level={5} className="text-slate-700">আপলোডকৃত ছবিসমূহ ({shop.images.length})</Title>
              <Row gutter={[8, 8]}>
                {shop.images.map((img, i) => (
                  <Col span={12} key={i}>
                    <Image
                      src={img}
                      alt={`Shop view ${i+1}`}
                      className="object-cover rounded-2xl aspect-square border border-slate-100 shadow-sm"
                      fallback="https://placehold.co/300x300?text=Shop+Image"
                    />
                  </Col>
                ))}
              </Row>
            </div>

            {/* Owner Details Card */}
            <Card className="rounded-2xl bg-slate-50/50 border-slate-150/40 p-1">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
                    <UserOutlined />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">লিস্টিং মালিক (Owner)</div>
                    <div className="font-bold text-slate-800 text-sm">{shop.ownerName}</div>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/50 pt-3">
                  <div className="flex items-center gap-2">
                    <MailOutlined className="text-slate-400" />
                    <span>{shop.ownerEmail}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneOutlined className="text-slate-400" />
                    <span>{shop.ownerPhone}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Admin Decision buttons */}
            {shop.status === 'pending' && (
              <Card className="rounded-2xl border-amber-100 bg-amber-50/30 p-2 text-center">
                <div className="text-xs font-semibold text-amber-800 mb-4">
                  এডমিন সিদ্ধান্ত: এই বিজ্ঞাপনটি কি নীতিমালার সাথে সংগতিপূর্ণ?
                </div>
                <div className="flex gap-4 justify-center">
                  <Button 
                    type="primary" 
                    icon={<CheckCircleOutlined />} 
                    onClick={handleApprove}
                    loading={actionLoading}
                    className="bg-emerald-600 hover:bg-emerald-700 border-0 rounded-xl font-bold h-11 px-6 shadow-sm shadow-emerald-500/10"
                  >
                    অনুমোদন দিন
                  </Button>
                  <Button 
                    danger 
                    type="primary"
                    icon={<CloseCircleOutlined />} 
                    onClick={() => setRejectModalVisible(true)}
                    loading={actionLoading}
                    className="rounded-xl font-bold h-11 px-6 shadow-sm"
                  >
                    বাতিল করুন
                  </Button>
                </div>
              </Card>
            )}
          </Col>
        </Row>
      </Card>

      {/* Reject Reason input Modal */}
      <Modal
        title={<span className="font-bold text-red-600">বিজ্ঞাপন বাতিলের কারণ লিখুন</span>}
        open={rejectModalVisible}
        onOk={handleReject}
        onCancel={() => {
          setRejectModalVisible(false);
          setRejectReason('');
        }}
        okText="বাতিল নিশ্চিত করুন"
        cancelText="ফিরে যান"
        okButtonProps={{ danger: true, loading: actionLoading, className: "rounded-lg" }}
        cancelButtonProps={{ className: "rounded-lg" }}
        className="rounded-2xl overflow-hidden"
      >
        <div className="space-y-3 py-2">
          <p className="text-xs text-slate-500">
            বিজ্ঞাপনটি কেন বাতিল করা হচ্ছে তার একটি স্পষ্ট কারণ লিখুন। এটি সরাসরি শপের মালিক তার প্রোফাইলের 'My Post' সেকশনে দেখতে পাবেন।
          </p>
          <TextArea
            rows={4}
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            placeholder="যেমন: দোকানের ভেতরের স্পষ্ট এবং ফায়ার সেফটি গেটের ছবি যুক্ত করতে হবে।"
            className="rounded-xl p-3 border-slate-200"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ListingDetail;
