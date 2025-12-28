# 电商后台管理APP开发文档

## 1. 项目概述

该项目是一个基于React Native + Expo开发的电商后台管理APP，用于方便商家在手机上操作订单管理和商品管理。

## 2. 技术栈

### 前端技术栈
- **框架**: React Native + Expo
- **状态管理**: Zustand
- **路由**: React Navigation
- **UI组件库**: Ant Design Mobile
- **HTTP客户端**: Axios
- **表单处理**: React Hook Form
- **验证库**: Zod
- **日期处理**: Day.js
- **图标**: Expo Vector Icons

### 后端技术栈
- **框架**: Express.js
- **数据库**: MySQL
- **认证**: JWT

## 3. 项目结构

```
shop-admin-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # 首页
│   │   ├── orders.tsx         # 订单列表
│   │   └── products.tsx       # 商品列表
│   ├── auth/
│   │   └── login.tsx          # 登录页面
│   ├── order-detail.tsx       # 订单详情
│   └── product-detail.tsx     # 商品详情
├── components/
│   ├── Auth/
│   │   └── LoginForm.tsx      # 登录表单组件
│   ├── Order/
│   │   ├── OrderCard.tsx      # 订单卡片组件
│   │   └── OrderFilter.tsx    # 订单筛选组件
│   └── Product/
│       └── ProductCard.tsx    # 商品卡片组件
├── hooks/
│   ├── useApp.ts              # 应用状态管理hook
│   ├── useAuth.ts             # 认证状态管理hook
│   ├── useOrders.ts           # 订单相关hook
│   └── useProducts.ts         # 商品相关hook
├── services/
│   ├── api.ts                 # API基础配置
│   ├── authService.ts         # 认证服务
│   ├── orderService.ts        # 订单服务
│   └── productService.ts      # 商品服务
├── store/
│   ├── authStore.ts           # 认证状态管理
│   └── appStore.ts            # 应用状态管理
├── types/
│   ├── auth.ts                # 认证相关类型
│   ├── order.ts               # 订单相关类型
│   └── product.ts             # 商品相关类型
├── utils/
│   ├── formatter.ts           # 格式化工具
│   └── validator.ts           # 验证工具
├── app.json                   # Expo配置
├── babel.config.js            # Babel配置
├── package.json               # 项目依赖
└── tsconfig.json              # TypeScript配置
```

## 4. 核心功能

### 4.1 认证功能
- 用户登录
- 权限验证
- Token管理

### 4.2 订单管理
- 订单列表展示
- 订单筛选（按状态、时间）
- 订单详情查看
- 订单状态更新

### 4.3 商品管理
- 商品列表展示
- 商品搜索
- 商品详情查看
- 商品上下架管理

## 5. API接口

### 5.1 认证接口
- `POST /api/login` - 用户登录

### 5.2 订单接口
- `GET /api/members/:memberId/orders/list` - 获取订单列表
- `GET /api/orders/:id` - 获取订单详情
- `PUT /api/orders/:id/status` - 更新订单状态

### 5.3 商品接口
- `GET /api/products` - 获取商品列表
- `GET /api/products/:id` - 获取商品详情
- `PUT /api/products/:id/status` - 更新商品状态

## 6. 开发环境配置

### 6.1 安装依赖
```bash
npm install
```

### 6.2 启动开发服务器
```bash
npx expo start
```

### 6.3 运行在设备上
- **Android**: 使用Expo Go扫描QR码
- **iOS**: 使用Camera应用扫描QR码
- **Web**: 按`w`键在浏览器中打开

## 7. 构建与发布

### 7.1 构建Android APK
```bash
eas build -p android --profile preview
```

### 7.2 构建iOS IPA
```bash
eas build -p ios --profile preview
```

### 7.3 发布到应用商店
- **Google Play**: 使用Google Play Console
- **App Store**: 使用App Store Connect

## 8. 代码规范

- 使用TypeScript进行类型检查
- 使用ESLint进行代码质量检查
- 使用Prettier进行代码格式化
- 遵循React Native最佳实践

## 9. 测试

### 9.1 单元测试
```bash
npm test
```

### 9.2 集成测试
```bash
npx expo test --detox
```

## 10. 性能优化

- 图片懒加载
- 列表分页加载
- 缓存策略
- 代码分割

## 11. 安全性

- 使用HTTPS通信
- Token安全存储
- 输入验证
- 权限控制

## 12. 后续计划

- 添加商品编辑功能
- 添加订单统计功能
- 添加推送通知
- 支持多店铺管理
- 优化离线功能
