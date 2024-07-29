import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('4e0291e7-d43b-48c3-ab89-7f1f9dcc8db6', '1Santos_Hilll@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_L2c3d4e5f6g7h8i9', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('30a0db90-780b-4dd2-8ede-a4f356680848', '7Cristal.Schuppe55@hotmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=9', 'cus_K1b2c3d4e5f6g7h8', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('e4c44a29-f5ad-42e4-b134-2e4684523567', '19Viviane.Ziemann48@yahoo.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=21', 'cus_M3d4e5f6g7h8i9j0', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('f167919f-d483-4679-b2d4-560f114e6933', '25Rosetta.Conroy53@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=27', 'cus_N4e5f6g7h8i9j0k1', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('1ee38bd9-bd18-4c6d-bb21-8229befbf5a9', '31Lizzie_Buckridge71@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=33', 'cus_K1b2c3d4e5f6g7h8', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('4ad0ae5d-e5d3-4285-958b-31c53c250165', '37Rosalia.Brekke26@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=39', 'cus_N4e5f6g7h8i9j0k1', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('64827832-f68a-423c-b8c6-bd6586935f2e', '43Connor42@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_K1b2c3d4e5f6g7h8', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('afe30b71-f3c0-496a-b1ba-d3fc762123d6', '49Lamont40@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'cus_K1b2c3d4e5f6g7h8', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('37ec3502-b1b3-499b-a819-a7ce07e9f076', '55Garret44@gmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=57', 'cus_L2c3d4e5f6g7h8i9', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('4d3269d4-886e-497b-8aea-2650fe44c28e', 'Convertible', 'Honda', 'A4', 152, 'Available', 'A reliable and fuelefficient car.', 'https://i.imgur.com/YfJQV5z.png?id=67');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('0dc2fe71-1782-4fe2-ad39-f795a50b32c4', 'Sedan', 'Toyota', 'X5', 740, 'Available', 'Luxury SUV with advanced features.', 'https://i.imgur.com/YfJQV5z.png?id=75');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('23656c8c-8d93-4374-b2b6-89c11dd46ce6', 'SUV', 'Audi', 'X5', 761, 'Rented', 'A sporty and stylish ride.', 'https://i.imgur.com/YfJQV5z.png?id=83');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('950911f2-64dd-410c-a412-cd844b68a515', 'Convertible', 'Audi', 'Civic', 548, 'Available', 'A sporty and stylish ride.', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('38a81399-f5dd-4915-a599-95d9fcc29b94', 'SUV', 'BMW', 'X5', 983, 'Rented', 'Elegant and comfortable sedan.', 'https://i.imgur.com/YfJQV5z.png?id=99');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('bb0c0345-b38c-47d4-a82f-0c4942f13d1c', 'Convertible', 'Ford', 'Mustang', 706, 'In Maintenance', 'A sporty and stylish ride.', 'https://i.imgur.com/YfJQV5z.png?id=107');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('e76fd61c-1749-4601-956b-fbd4bfc5aa5f', 'Hatchback', 'Honda', 'Mustang', 739, 'In Maintenance', 'A sporty and stylish ride.', 'https://i.imgur.com/YfJQV5z.png?id=115');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('8a947c93-38fa-4420-a905-fa99e3e82b01', 'Sedan', 'Toyota', 'Civic', 923, 'Reserved', 'Luxury SUV with advanced features.', 'https://i.imgur.com/YfJQV5z.png?id=123');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('3d1be565-eeb6-45cf-81fa-bf8c86071ff6', 'Sedan', 'Ford', 'X5', 264, 'Reserved', 'A sporty and stylish ride.', 'https://i.imgur.com/YfJQV5z.png?id=131');
INSERT INTO "Car" ("id", "type", "brand", "model", "pricePerDay", "availabilityStatus", "description", "imageUrl") VALUES ('be484d31-1fb5-44af-bbd2-413ce212790c', 'Sedan', 'Toyota', 'X5', 673, 'Rented', 'Luxury SUV with advanced features.', 'https://i.imgur.com/YfJQV5z.png?id=139');

INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('ce52b79d-a946-43a6-983f-89edabba7d1f', '2024-01-10T13:29:44.552Z', '2024-02-17T02:24:13.724Z', 'confirmed', 586, '37ec3502-b1b3-499b-a819-a7ce07e9f076', 'e76fd61c-1749-4601-956b-fbd4bfc5aa5f');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('1c94a15f-1a17-45fa-9eb0-85454092d053', '2023-12-11T13:55:11.498Z', '2024-01-29T20:39:32.738Z', 'inprogress', 161, 'afe30b71-f3c0-496a-b1ba-d3fc762123d6', '23656c8c-8d93-4374-b2b6-89c11dd46ce6');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('54cf4ad1-e901-4c55-86cc-32ffc15085f0', '2024-06-10T02:39:44.991Z', '2024-08-13T07:30:59.754Z', 'confirmed', 324, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'bb0c0345-b38c-47d4-a82f-0c4942f13d1c');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('032c29ee-ee85-47b1-bf9b-65f7caf82206', '2023-12-18T05:57:33.450Z', '2024-05-09T06:00:00.497Z', 'cancelled', 205, '4e0291e7-d43b-48c3-ab89-7f1f9dcc8db6', 'bb0c0345-b38c-47d4-a82f-0c4942f13d1c');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('03bbacb8-13f3-496a-8ad8-b0c55e8836eb', '2025-01-19T00:43:36.471Z', '2024-12-10T14:24:35.810Z', 'cancelled', 897, '4e0291e7-d43b-48c3-ab89-7f1f9dcc8db6', '23656c8c-8d93-4374-b2b6-89c11dd46ce6');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('bfbbc474-c110-4adb-b45c-672a9c4003c6', '2024-11-06T06:53:44.907Z', '2024-02-13T03:38:51.670Z', 'confirmed', 936, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'bb0c0345-b38c-47d4-a82f-0c4942f13d1c');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('c42dc0f4-f5dc-44bb-a08c-153d2ec3efef', '2025-05-05T15:30:14.247Z', '2024-08-30T09:16:37.204Z', 'cancelled', 359, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'be484d31-1fb5-44af-bbd2-413ce212790c');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('1ff44a2c-ce1f-47f9-b0ae-bbf1ea34cc0e', '2025-06-22T09:25:41.687Z', '2024-08-02T02:45:17.305Z', 'confirmed', 981, 'e4c44a29-f5ad-42e4-b134-2e4684523567', '0dc2fe71-1782-4fe2-ad39-f795a50b32c4');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('b0ce92b1-5c5e-46e4-92de-cbd6ec81a9c2', '2024-09-01T08:04:53.332Z', '2025-04-25T23:14:45.183Z', 'inprogress', 270, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'bb0c0345-b38c-47d4-a82f-0c4942f13d1c');
INSERT INTO "Booking" ("id", "startDate", "endDate", "status", "totalPrice", "userId", "carId") VALUES ('1802efcf-14eb-4c08-85de-84bef41700ff', '2024-08-11T15:55:35.966Z', '2024-03-28T21:52:06.432Z', 'completed', 239, '4ad0ae5d-e5d3-4285-958b-31c53c250165', '950911f2-64dd-410c-a412-cd844b68a515');

INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('334c6766-d19f-435e-a822-9e2f4813934f', 447, '2025-01-08T13:06:32.302Z', 'failed', 'txn_1A2B3C4D5E', '032c29ee-ee85-47b1-bf9b-65f7caf82206');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('8d922596-4679-4d70-9bbf-5eac8f6d9e99', 135, '2024-09-14T02:52:20.261Z', 'completed', 'txn_6F7G8H9I0J', '03bbacb8-13f3-496a-8ad8-b0c55e8836eb');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('3e938e03-51ae-40bc-b6f6-5872cb51131a', 596, '2025-02-15T13:06:59.718Z', 'pending', 'txn_1K2L3M4N5O', '1802efcf-14eb-4c08-85de-84bef41700ff');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('9f301a1c-c07f-4042-a7a5-9cf2bdbb7de7', 913, '2023-09-16T00:26:39.695Z', 'pending', 'txn_1A2B3C4D5E', '032c29ee-ee85-47b1-bf9b-65f7caf82206');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('084458dd-fe65-4f94-b8ad-ed19650f7e19', 286, '2025-04-24T10:11:29.942Z', 'completed', 'txn_1K2L3M4N5O', '1c94a15f-1a17-45fa-9eb0-85454092d053');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('dce31ed9-a4ac-4b32-894d-0947abc5e89e', 731, '2024-05-14T02:59:42.573Z', 'pending', 'txn_6P7Q8R9S0T', '1802efcf-14eb-4c08-85de-84bef41700ff');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('c7be9227-f678-47a3-a088-ee5f479c5e5e', 500, '2024-06-21T14:16:27.945Z', 'completed', 'txn_1U2V3W4X5Y', '032c29ee-ee85-47b1-bf9b-65f7caf82206');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('ef43d9c3-07f3-4213-9f76-400249a80c8b', 448, '2025-06-18T18:54:32.262Z', 'completed', 'txn_1A2B3C4D5E', '1802efcf-14eb-4c08-85de-84bef41700ff');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('baf8b50b-05d1-42c8-8589-238129ca7c30', 129, '2024-04-12T23:47:58.464Z', 'pending', 'txn_6F7G8H9I0J', '1802efcf-14eb-4c08-85de-84bef41700ff');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "paymentStatus", "stripeTransactionId", "bookingId") VALUES ('cb0b3336-2f0b-4ef3-b651-4b564d6f95a8', 981, '2024-08-25T15:41:21.341Z', 'completed', 'txn_6F7G8H9I0J', 'bfbbc474-c110-4adb-b45c-672a9c4003c6');

INSERT INTO "RentalTerms" ("id", "content") VALUES ('a605cd32-0c1e-4367-8509-ad63f2edad22', 'Fuel must be refilled to the same level as at the start of the rental period.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('e1d9f0c1-83a0-4935-aab8-977bb69c326f', 'Late returns will incur an additional fee of 20 per hour.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('0b0fd409-966d-4757-ac42-039eda9a4b89', 'The renter must be at least 21 years old and possess a valid drivers license.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('3faeecfd-3ba8-47ff-a853-3b1b74a829e9', 'The renter must be at least 21 years old and possess a valid drivers license.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('f2425cbc-b9b3-45f3-9c82-9ab27a1d6e85', 'Late returns will incur an additional fee of 20 per hour.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('f57bb96d-f7f2-42f0-b6e7-e8d35ff5ceb0', 'Any damage to the vehicle must be reported immediately to the rental company.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('7712c3a9-daeb-418b-aaf9-4065f6402175', 'Late returns will incur an additional fee of 20 per hour.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('ad891098-fb13-4ffd-a4ad-15042a731fe6', 'The rental period is for a minimum of 24 hours and a maximum of 30 days.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('603cdb81-7c66-49bc-adda-04b24068f228', 'Fuel must be refilled to the same level as at the start of the rental period.');
INSERT INTO "RentalTerms" ("id", "content") VALUES ('a4ab4853-560f-41b1-b4a2-6c547e17c0cf', 'Late returns will incur an additional fee of 20 per hour.');

INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('a289e57c-9680-4b1f-a3a8-760cd08ed530', 'Can I change my pickup location', 'We have refunded the overcharged amount.', 'Resolved', '37ec3502-b1b3-499b-a819-a7ce07e9f076');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('b4d6e781-b65e-4dc8-ae75-6b9cbc604b2b', 'Can I change my pickup location', 'We have refunded the overcharged amount.', 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('27e53b29-0e87-44a2-a71e-d80edb3b322f', 'How do I extend my rental period', 'Please provide more details about the problem.', 'Resolved', '4e0291e7-d43b-48c3-ab89-7f1f9dcc8db6');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('76a80f8a-8cf1-4212-8371-39a7d2c683d2', 'I was overcharged for my rental.', 'We have refunded the overcharged amount.', 'Resolved', '64827832-f68a-423c-b8c6-bd6586935f2e');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('1914e1a6-c1d4-41b4-8716-8417dd419921', 'I need help with my booking.', 'Your rental period has been extended.', 'Closed', 'e4c44a29-f5ad-42e4-b134-2e4684523567');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('f428a908-a697-4073-8767-4e7613dc0c5c', 'Can I change my pickup location', 'Your rental period has been extended.', 'Resolved', 'e4c44a29-f5ad-42e4-b134-2e4684523567');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('6ea84c24-d6c4-4a55-ab00-9f03110f8b12', 'How do I extend my rental period', 'We have refunded the overcharged amount.', 'In Progress', '37ec3502-b1b3-499b-a819-a7ce07e9f076');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('f9aaf1e4-8192-412d-839f-2c059775fea6', 'Can I change my pickup location', 'Your pickup location has been updated.', 'Resolved', '64827832-f68a-423c-b8c6-bd6586935f2e');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('2c3d0504-d53b-4b00-a993-47c6aa9d9712', 'How do I extend my rental period', 'Your rental period has been extended.', 'Pending', '1ee38bd9-bd18-4c6d-bb21-8229befbf5a9');
INSERT INTO "CustomerSupport" ("id", "message", "response", "status", "userId") VALUES ('356d1a3f-97f0-4ddc-b689-8264c80d4d05', 'The car I rented broke down.', 'We have refunded the overcharged amount.', 'Resolved', 'f167919f-d483-4679-b2d4-560f114e6933');

INSERT INTO "Admin" ("id", "role", "userId") VALUES ('05c551c4-60b7-4251-90ff-5c3877caf4f2', 'Support Admin', '30a0db90-780b-4dd2-8ede-a4f356680848');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('dd61c1b0-9875-4c47-9a6f-9506d72da0af', 'Fleet Manager', '4e0291e7-d43b-48c3-ab89-7f1f9dcc8db6');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('d060b07c-d29a-4d8a-a3f9-1f8ee28b3c72', 'Operations Admin', '30a0db90-780b-4dd2-8ede-a4f356680848');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('031ba7f4-1697-4f22-9c6a-488a302ee0c1', 'Fleet Manager', '30a0db90-780b-4dd2-8ede-a4f356680848');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('747ad872-b425-4dd2-b873-e41a67aae596', 'Super Admin', 'afe30b71-f3c0-496a-b1ba-d3fc762123d6');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('24f2e843-40f6-4775-bdc1-b44536986a8c', 'Support Admin', '1ee38bd9-bd18-4c6d-bb21-8229befbf5a9');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('7688a39f-ec3a-4f1a-b060-e0dcc86e9be7', 'Support Admin', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('c539cf4b-14f4-4c2f-b93c-c0f03793fa93', 'Super Admin', '4ad0ae5d-e5d3-4285-958b-31c53c250165');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('ce5b1494-84a1-4899-ab77-46b965ca355e', 'Super Admin', '30a0db90-780b-4dd2-8ede-a4f356680848');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('6502875f-48b7-4309-b5fe-aa176d18af52', 'Finance Admin', '64827832-f68a-423c-b8c6-bd6586935f2e');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
