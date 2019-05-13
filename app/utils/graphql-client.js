import Cookie from 'js-cookie';
import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(process.env.GRAHPQL_URL, {
  headers: {
    authorization: `Bearer ${Cookie.get('access_token') || 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im4tcWVBRUNWc1pYSjdQU1NwYWFwNTRCVzFldU01Nm5TbFVYeXM0OGRtdDgifQ.eyJqdGkiOiJDakt5c3FXSzUxMVJ1bk1kdWt2VW8iLCJzdWIiOiJhZG1pbnBhc3N3b3JkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdCIsImlhdCI6MTU1Nzc2MzgxMywiZXhwIjoxNTU3NzY3NDEzLCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwYXRpZW50LyouKiIsImF1ZCI6Im5pcm1hbF9pbXBsaWNpdCJ9.cV7OrsjnA4YJWH-1l52SlivdH1XXrU8oohEqiclj0cG0zGOwQnUvvsC-uqqA7RYV6X0A5v4A4wZJwOv46hJ-UEVeWCk19YkHXTXOUSRLF3yKcd_TeLAab64drGlWN81GQv0qO_mam_d6eATgbZRro1yzt3eFRcHFuQinyzQhf5ZHgaXjAIKKZTD3EDMF9LUw5Y9OIo2_hwKGb7pKRk4PwgXThd6VdDa95vwXnjYKXpxZK1L7mPmjF5fHhkBQANlSj4lynm2hREeLlaH1x2189ek2Bo6QjcHs_rHeqLVh-6J5Zou67yNjnErhzuR2UWgfZ5MoytYO-66Kyd5Zue-FbA'}`,
  },
});

export default (query, variables = {}) => graphQLClient.request(query, variables);
