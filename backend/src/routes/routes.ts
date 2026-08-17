import { Router } from "express";
import { UserRoute } from "@/modules/user/user.routes";
import { ShopRoute } from "@/modules/shop/shop.routes";
import { NotificationRoute } from "@/modules/notification/notification.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoute,
  },
  {
    path: "/shops",
    route: ShopRoute,
  },
  {
    path: "/notifications",
    route: NotificationRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
