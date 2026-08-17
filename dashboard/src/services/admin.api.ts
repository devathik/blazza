export interface AdminListing {
  id: string;
  title: string;
  city: string;
  area: string;
  detailedLocation: string;
  listingType: 'rent' | 'lease' | 'sale';
  shopCategory: string;
  shopType: string;
  price: number;
  priceUnit: string;
  negotiable: boolean;
  advanceDeposit: number;
  sizeSqft?: number;
  frontWidthFt?: number;
  floorLevel: string;
  washrooms: string;
  electricityLoadKw?: number;
  suitableFor: string[];
  condition: string;
  availableFrom: string;
  facilities: string[];
  description: string;
  note?: string;
  images: string[];
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  submittedAt: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
}

export interface AdminNotification {
  id: string;
  type: 'new_listing_pending';
  message: string;
  relatedListingId: string;
  isRead: boolean;
  createdAt: string;
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

async function request(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem('adminToken');
  const headers: Record<string, string> = {};

  if (options.headers) {
    Object.entries(options.headers as Record<string, string>).forEach(([key, value]) => {
      headers[key] = value;
    });
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  if (options.body && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }
  return data;
}

const mapShopToListing = (shop: any): AdminListing => ({
  id: shop._id,
  title: shop.title,
  city: shop.city,
  area: shop.area,
  detailedLocation: shop.detailedLocation,
  listingType: shop.listingType,
  shopCategory: shop.shopCategory,
  shopType: shop.shopType,
  price: shop.price,
  priceUnit: shop.priceUnit,
  negotiable: shop.negotiable,
  advanceDeposit: shop.advanceDeposit,
  sizeSqft: shop.sizeSqft,
  frontWidthFt: shop.frontWidthFt,
  floorLevel: shop.floorLevel,
  washrooms: shop.washrooms,
  electricityLoadKw: shop.electricityLoadKw,
  suitableFor: shop.suitableFor || [],
  condition: shop.condition,
  availableFrom: shop.availableFrom,
  facilities: shop.facilities || [],
  description: shop.description,
  note: shop.note,
  images: shop.images || [],
  status: shop.status === 'deactivated' ? 'rejected' : shop.status,
  rejectionReason: shop.rejectionReason,
  submittedAt: shop.createdAt,
  ownerName: shop.owner?.fullName || 'N/A',
  ownerEmail: shop.owner?.email || 'N/A',
  ownerPhone: shop.contactPhone || 'N/A',
});

const mapNotification = (notif: any): AdminNotification => ({
  id: notif._id,
  type: 'new_listing_pending',
  message: notif.message,
  relatedListingId: notif.relatedShop,
  isRead: notif.isRead,
  createdAt: notif.createdAt,
});

export const getShops = async (status?: string): Promise<AdminListing[]> => {
  const queryStatus = status === 'all' ? undefined : status;
  const res = await request(`/shops/admin${queryStatus ? `?status=${queryStatus}` : ''}`);
  return (res.data || []).map(mapShopToListing);
};

export const getShopDetails = async (id: string): Promise<AdminListing | null> => {
  const res = await request(`/shops/${id}`);
  return res.data ? mapShopToListing(res.data) : null;
};

export const approveShop = async (id: string): Promise<boolean> => {
  const res = await request(`/shops/admin/${id}/approve`, { method: 'PATCH' });
  return res.success;
};

export const rejectShop = async (id: string, reason: string): Promise<boolean> => {
  const res = await request(`/shops/admin/${id}/reject`, {
    method: 'PATCH',
    body: JSON.stringify({ reason }),
  });
  return res.success;
};

export const getNotifications = async (): Promise<AdminNotification[]> => {
  const res = await request('/notifications');
  return (res.data || []).map(mapNotification);
};

export const markNotificationRead = async (id: string): Promise<boolean> => {
  const res = await request(`/notifications/${id}/read`, { method: 'PATCH' });
  return res.success;
};

export const getUnreadNotificationsCount = async (): Promise<number> => {
  const res = await request('/notifications/unread-count');
  return res.data?.count || 0;
};

export const loginAdmin = async (payload: any) => {
  const res = await request('/users/dev-admin-login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return res.data;
};
