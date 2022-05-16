interface ServerConfig {
  url: string;
  port: number;
  path: string;
}

export const serverCustomerConfig : ServerConfig = {
  url: 'localhost',
  port: 9999,
  path: 'user-service/api/v1'
 };
